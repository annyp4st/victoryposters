/* global EXHIBIT_DATA */

const BASE = "./assets/posters_by_year/";
const BASE_SMALL = "./assets/posters_by_year_small/";

const yearSelect = document.getElementById("yearSelect");
const qEl = document.getElementById("q");
const resetBtn = document.getElementById("resetBtn");
const addPosterBtn = document.getElementById("addPosterBtn");
const gridEl = document.getElementById("grid");
const counterEl = document.getElementById("counter");
const showMoreBtn = document.getElementById("showMoreBtn");

const LS_USER_KEY = "userPosters_v1";

const FILE_SET = new Set(Array.isArray(window.NLRS_FILES) ? window.NLRS_FILES : []);

const PAGE_SIZE = 24;
let visibleLimit = PAGE_SIZE;

function translitRuToLat(s) {
  const map = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };
  return String(s ?? "")
    .toLowerCase()
    .split("")
    .map((ch) => (map[ch] != null ? map[ch] : ch))
    .join("");
}

function slugifyTitle(title, year) {
  const raw = `${title}-${year}`;
  const t = translitRuToLat(raw)
    .replaceAll("«", "")
    .replaceAll("»", "")
    .replaceAll(/[“”"']/g, "")
    .replaceAll(/&/g, " and ")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/-+/g, "-")
    .replaceAll(/^-|-$/g, "");
  return t || String(year);
}

function normalizeForSearch(s) {
  return String(s ?? "")
    .toLowerCase()
    .replaceAll("ё", "е")
    .replaceAll(/[«»“”"']/g, "")
    .replaceAll(/[\s\u00A0]+/g, " ")
    .trim();
}

function loadUserPosters() {
  try {
    const raw = localStorage.getItem(LS_USER_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch {
    return [];
  }
}

function saveUserPosters(list) {
  try {
    localStorage.setItem(LS_USER_KEY, JSON.stringify(Array.isArray(list) ? list : []));
  } catch {
    // ignore
  }
}

let USER_POSTERS = loadUserPosters();

function slugifyNoYear(title) {
  const t = translitRuToLat(title)
    .replaceAll("«", "")
    .replaceAll("»", "")
    .replaceAll(/[“”"']/g, "")
    .replaceAll(/&/g, " and ")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/-+/g, "-")
    .replaceAll(/^-|-$/g, "");
  return t || "";
}

function stripExtAndSize(filename) {
  const name = String(filename ?? "").trim();
  const base = name.replace(/\.(jpg|jpeg|png|webp)$/i, "");
  return base.replace(/-\d+x\d+$/i, "");
}

function tokens(s) {
  return String(s ?? "")
    .split("-")
    .map((x) => x.trim())
    .filter(Boolean);
}

function scoreMatch(slug, candidateBase) {
  if (!slug || !candidateBase) return -1;
  if (candidateBase === slug) return 10000;
  if (candidateBase.startsWith(slug)) return 9000 - Math.min(2000, candidateBase.length - slug.length);
  if (candidateBase.includes(slug)) return 8000 - Math.min(2000, candidateBase.length - slug.length);
  const a = new Set(tokens(slug));
  const b = new Set(tokens(candidateBase));
  let inter = 0;
  for (const t of a) if (b.has(t)) inter += 1;
  return inter * 100 - Math.abs(a.size - b.size) * 10;
}

function pickFromNlrs(row) {
  const list = Array.isArray(window.NLRS_FILES) ? window.NLRS_FILES : [];
  if (!list.length) return "";

  const slug = slugifyNoYear(row.title);
  let best = "";
  let bestScore = -1;
  for (const f of list) {
    const base = stripExtAndSize(f);
    const sc = scoreMatch(slug, base);
    if (sc > bestScore) {
      bestScore = sc;
      best = f;
    }
  }
  // Порог специально невысокий: если совпадение слабое, лучше упасть на стандартную схему.
  if (best && bestScore >= 200) return best;
  return "";
}

function candidatesExisting(row) {
  const candidates = buildCandidates(row);
  // Для основной коллекции — ориентируемся на манифест (быстро и без “ошибок”).
  if (!row?.user) return candidates.filter((c) => FILE_SET.has(c));
  // Для добавленных вручную — разрешаем любой указанный файл (если не загрузится, карточка просто исчезнет).
  return candidates;
}

function flatten() {
  const rows = [];
  for (const block of EXHIBIT_DATA ?? []) {
    for (const it of block.items ?? []) {
      rows.push({
        year: block.year,
        title: it.title,
        author: it.author,
        file: it.file,
        user: false,
      });
    }
  }
  for (const it of USER_POSTERS ?? []) {
    rows.push({
      year: it.year,
      title: it.title,
      author: it.author,
      file: it.file,
      user: true,
    });
  }
  return rows;
}

let ALL = flatten();

function buildCandidates(row) {
  const explicit = String(row?.file ?? "").trim();
  if (explicit) {
    if (/\.(jpg|jpeg|png|webp)$/i.test(explicit)) return [explicit];
    return [`${explicit}.jpg`, `${explicit}.png`, `${explicit}.webp`];
  }

  // Автоподбор по списку скачанных файлов (как на сайте НБ РС(Я))
  const nlrs = pickFromNlrs(row);
  if (nlrs) return [nlrs];

  const slug = slugifyTitle(row.title, row.year);
  return [`${slug}.jpg`, `${slug}.png`, `${slug}.webp`];
}

function matches(row, yearValue, q) {
  if (yearValue !== "all" && String(row.year) !== String(yearValue)) return false;
  if (!q) return true;
  const qq = normalizeForSearch(q);
  if (!qq) return true;
  const hay = normalizeForSearch(`${row.title} ${row.author} ${row.year}`);
  return hay.includes(qq);
}

function el(tag, className, text) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text != null) e.textContent = text;
  return e;
}

function render() {
  const yearValue = yearSelect?.value ?? "all";
  const q = qEl?.value ?? "";

  const filtered = ALL.filter((r) => matches(r, yearValue, q)).filter((r) => candidatesExisting(r).length > 0);
  const visible = filtered.slice(0, Math.max(0, visibleLimit));

  let shown = 0;
  if (counterEl) {
    const yearLabel = yearValue === "all" ? "все годы" : `год ${yearValue}`;
    counterEl.textContent = `Показано: ${Math.min(filtered.length, visible.length)} из ${filtered.length} (${yearLabel})`;
  }

  gridEl.innerHTML = "";

  for (const row of visible) {
    const candidates = candidatesExisting(row);
    if (!candidates.length) continue;

    const card = el("div", "item");
    const imgWrap = el("div", "imgWrap");
    const img = document.createElement("img");
    img.alt = `«${row.title}» (${row.year})`;
    img.loading = "lazy";
    img.decoding = "async";

    let tryIdx = 0;
    let phase = 0; // 0 = small, 1 = full
    const setSrc = () => {
      const file = candidates[tryIdx];
      img.src = (phase === 0 ? BASE_SMALL : BASE) + file;
    };
    setSrc();
    img.onerror = () => {
      // Сначала пробуем маленькую версию, затем оригинал.
      if (phase === 0) {
        phase = 1;
        setSrc();
        return;
      }
      // Переходим к следующему кандидату и снова начинаем с small.
      phase = 0;
      tryIdx += 1;
      if (tryIdx < candidates.length) {
        setSrc();
        return;
      }
      // По просьбе: если фото нет — просто скрываем карточку.
      card.remove();
      shown = Math.max(0, shown - 1);
      if (counterEl) {
        const yearLabel = yearValue === "all" ? "все годы" : `год ${yearValue}`;
        counterEl.textContent = `Показано: ${shown} из ${filtered.length} (${yearLabel})`;
      }
    };
    imgWrap.appendChild(img);

    const meta = el("div", "meta");
    meta.appendChild(el("div", "title", `«${row.title}»`));
    meta.appendChild(el("div", "author", `${row.author} — ${row.year}`));
    if (row.user) {
      const actions = el("div", "row");
      actions.style.marginTop = "10px";
      const delBtn = el("button", "btn btnGhost btnSmall btnDanger");
      delBtn.type = "button";
      delBtn.textContent = "Удалить";
      delBtn.addEventListener("click", () => {
        USER_POSTERS = (USER_POSTERS ?? []).filter(
          (p) =>
            String(p.year) !== String(row.year) ||
            normalizeForSearch(p.title) !== normalizeForSearch(row.title) ||
            String(p.file) !== String(row.file)
        );
        saveUserPosters(USER_POSTERS);
        ALL = flatten();
        render();
      });
      actions.appendChild(delBtn);
      meta.appendChild(actions);
    }

    card.appendChild(imgWrap);
    card.appendChild(meta);
    gridEl.appendChild(card);
    shown += 1;
  }

  // Если всё загрузилось без ошибок — счётчик уже верный.
  if (counterEl) {
    const yearLabel = yearValue === "all" ? "все годы" : `год ${yearValue}`;
    counterEl.textContent = `Показано: ${shown} из ${filtered.length} (${yearLabel})`;
  }

  if (showMoreBtn) {
    const remaining = Math.max(0, filtered.length - Math.min(filtered.length, visibleLimit));
    if (remaining <= 0) {
      showMoreBtn.style.display = "none";
    } else {
      showMoreBtn.style.display = "";
      showMoreBtn.textContent = `Показать ещё (${Math.min(PAGE_SIZE, remaining)} из ${remaining})`;
    }
  }
}

function resetControls() {
  if (yearSelect) yearSelect.value = "all";
  if (qEl) qEl.value = "";
  visibleLimit = PAGE_SIZE;
  render();
}

function addPosterFlow() {
  const folderHint = "Папка с картинками: assets/posters_by_year/ (рядом с index.html)";
  const fileHint = "Важно: вставляй только имя файла (без пути). Пример: ne-boltay-597x850.jpg";

  const y = prompt("Год (например 1941):", "1941");
  if (y == null) return;
  const year = Number(String(y).trim());
  if (!Number.isFinite(year)) return;

  const title = prompt(`Название плаката:\n\n${folderHint}\n${fileHint}`, "");
  if (title == null) return;
  const t = String(title).trim();
  if (!t) return;

  const author = prompt("Автор (можно пусто):", "");
  if (author == null) return;
  const a = String(author).trim();

  const file = prompt(`Имя файла картинки:\n\n${folderHint}\n${fileHint}`, "");
  if (file == null) return;
  const f = String(file).trim();
  if (!f) return;

  USER_POSTERS = [...(USER_POSTERS ?? []), { year, title: t, author: a || "—", file: f }];
  saveUserPosters(USER_POSTERS);
  ALL = flatten();
  visibleLimit = Math.max(visibleLimit, PAGE_SIZE);
  render();
}

function resetPaging() {
  visibleLimit = PAGE_SIZE;
}

yearSelect?.addEventListener("change", render);
qEl?.addEventListener("input", render);
resetBtn?.addEventListener("click", resetControls);
addPosterBtn?.addEventListener("click", addPosterFlow);
yearSelect?.addEventListener("change", resetPaging);
qEl?.addEventListener("input", resetPaging);
showMoreBtn?.addEventListener("click", () => {
  visibleLimit += PAGE_SIZE;
  render();
});

render();

