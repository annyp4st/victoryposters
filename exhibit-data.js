// Данные выставки: список плакатов по годам (1941–1945).
// Примечание: это не “картинки из интернета”, а структура для подписи/поиска.
// Картинки добавляются вручную в ./assets/posters_by_year/
// Можно (не обязательно) указать точное имя файла так, как на найденном сайте, например:
// { title: "...", author: "...", file: "bey-fashistskogo-gada-586x850.jpg" }
window.EXHIBIT_DATA = [
  {
    year: 1941,
    items: [
      { title: "Завоеваний Октября не отдадим", author: "М. М. Аввакумов, В. Щеглов", museum: "Тульский государственный музей оружия" , file: "zavoevanie-oktyabrya-ne-otdadim-576x850.jpg" },
      { title: "Помогай Красной армии вылавливать шпионов и диверсантов", author: "П. Вандышев" },
      { title: "Фашизм – злейший враг женщин", author: "Н. Н. Ватолина", file: "fashizm-zleyshiy-vrag-zhenshhin-589x850.jpg" },
      { title: "Не болтай!", author: "Н. Н. Ватолина", file: "ne-boltay-597x850.jpg" },
      {
        title: "Больше хлеба для фронта и тыла. Убрать урожай полностью!",
        author: "Н. Н. Ватолина, Н. В. Денисов",
        file: "bolshe-hleba-dlya-fronta-i-tyla-ubrat-urozhay-polnostyu-1941.jpg",
      },
      {
        title: "Болтуны - находка для врага: Плакат",
        author: "Б. А. Тимофеев",
        file: "boltuny-nahodka dlya vraga.jpg",
      },
      {
        title: "Железнодорожники, пропускайте без задержки на фронт воинские поезда!",
        author: "В.В. Любимов",
        file: "zheleznodorozhniki-propuskayte.jpg",
      },
      {
        title: "Хлеб нужен фронту как и оружие!",
        author: "А.Н. Чечнев", museum: "Музей обороны Тулы",
        file: "hleb-nuzhen-kak.jpg",
      },
      { 
        title: "Против молодца – сам овца", 
        author: "Кукрыниксы", 
        file: "kukr-protiv-molodca.jpg",
        museum: "Музей Порфирия Никитича Крылова"
      },
      { 
        title: "Два котла", 
        author: "Кукрыниксы", 
        file: "kukr-dva-kotla.jpg",
        museum: "Музей Порфирия Никитича Крылова"
      },
      { 
        title: "Юный фриц", 
        author: "Кукрыниксы", 
        file: "kukr-yuny-fric.jpg",
        museum: "Музей Порфирия Никитича Крылова"
      },
      {
        title: "Не есть фашистам советского хлеба!",
        author: "В. Свиненко, З. Л. Докторов", museum: "Музей обороны Тулы",
        file: "ne-est-fashistam.jpg",
      },
      {
        title: "Вступайте в ряды Народного Ополчения!",
        author: "А. Г. Ситтаро, З. Л. Докторов",
        file: "vstupaite-v-ryady.jpg",
      },
      {
        title: "Будет поздно готовить убежища и укрытия, если враг появится над головой!",
        author: "К. Архангельский, К. Частов",
        file: "budet-pozdno.jpg",
      },
      {
        title: "Окно ТАСС № 323. «Непрочные вещи - Немецкие клещи»",
        author: "Кукрыниксы, В. П. Катаев (ТАСС)", museum: "Музей обороны Тулы",
        file: "neprochnye-veshi.jpg",
      },
      { title: "Товарищ москвич, будь всегда на – чеку!", author: "Н. Н. Ватолина, Н. В. Денисов" },
      { title: "Таран – оружие героев!", author: "А. Волошин" },
      { title: "Слава героям партизанам, разрушающим фашистский тыл", author: "П. П. Горелый", museum: "Тульский государственный музей оружия" },
      { title: "На Москву! Хох! от Москвы: Ох!", author: "В. Н. Дени" },
      { title: "Каждый удар молота – удар по врагу!", author: "В. Н. Дени, Н. А. Долгоруков", museum: "Тульский государственный музей оружия" },
      { title: "Так было… Так будет!", author: "Н. А. Долгоруков", file: "tak-byilo-tak-budet-590x850.jpg" },
      { title: "Убрать урожай до единого зерна!", author: "Т. Еремина" },
      { title: "Отстоим Москву!", author: "Н. Н. Жуков, В. С. Климашин" },
      { title: "Пусть вдохновляет вас в этой войне мужественный образ наших великих предков (И. В. Сталин)", author: "В. С. Иванов" },
      { title: "За Родину, за честь, за свободу!", author: "В. С. Иванов", file: "za-rodinu-za-chest-za-svobodu-574x850.jpg" },
      { title: "Бей фашистского гада!", author: "А. А. Кокорекин", file: "bey-fashistskogo-gada-586x850.jpg" },
      { title: "Партизаны, бейте врага без пощады!", author: "В. Б. Корецкий", museum: "Тульский государственный музей оружия" },
      { title: "Вставай в ряды фронтовых подруг. Дружинница – бойцу товарищ и друг!", author: "В. Б. Корецкий, В. А. Гицевич" },
      { title: "Наши силы неисчислимы", author: "В. Б. Корецкий", file: "nashi-silyi-ne-ischislimyi-586x850.jpg" },
      { title: "Долг платежом красен", author: "Кукрыниксы", file: "dolg-platezham-krasen-582x850.jpg" },
      { title: "В Москве калачи, как огнь горячи…", author: "Кукрыниксы" },
      { title: "Про украинский хлеб и немецкий ремень", author: "Кукрыниксы" },
      { title: "Уборка урожая – грозный удар по врагу!", author: "Кукрыниксы" },
      { title: "Наполеон потерпел поражение. То же будет и с зазнавшимся Гитлером!", author: "Кукрыниксы" },
      { title: "Бьемся мы здорово, колем отчаянно – внуки Суворова, дети Чапаева", author: "Кукрыниксы", file: "bemsya-myi-zdorovo-koleem-otchayanno-vnuki-suvorova-deti-chapaeva-850x576.jpg" },
      { title: "«Вся Европа» Гитлера и Рибентропа", author: "Кукрыниксы" },
      { title: "Клещи в клещи", author: "Кукрыниксы", file: "kleshhi-v-kleshhi-530x850.jpg" },
      { title: "Беспощадно разгромим и уничтожим врага", author: "Кукрыниксы", museum: "Музей Порфирия Никитича Крылова и Музей обороны Тулы", file: "besposhhadno-razgromim-i-unichtozhim-vraga-586x850.jpg" },
      { title: "Людоед-вегетарианец, или две стороны одной медали", author: "Кукрыниксы" },
      { title: "Били мы врага копьем, били мы врага ружьем, и теперь стальным оружьем бьем врага, где обнаружим!", author: "Кукрыниксы" },
      { title: "Беспощадно уничтожать фашистских диверсантов", author: "П. Т. Мальцев" },
      { title: "Ты чем помог фронту?", author: "Д. С. Моор", file: "tyi-chem-pomog-frontu-568x850.jpg" },
      { title: "Защитим родную Москву", author: "Б. Мухин" },
      { title: "Не будут крылья черные над Родиной летать", author: "Ю. Н. Петров, В. А. Тамби" },
      { title: "От народной мести не уйти врагу", author: "И. Б. Рабичев" },
      { title: "Где сабля красная взвилась…", author: "Н. С. Самокиш" },
      { title: "Заменим!", author: "В. А. Серов", file: "zamenim-625x850.jpg" },
      { title: "Защитим город Ленина", author: "В. А. Серов" },
      { title: "Наше дело правое, победа будет за нами", author: "В. А. Серов", file: "nashe-delo-pravoe-pobeda-budet-za-nami-577x850.jpg" },
      { title: "Вступайте в ряды народного ополчения", author: "А. Г. Ситтаро", museum: "Музей обороны Тулы" },
      { title: "На земле и над землей мы зажмем врага петлей!", author: "П. П. Соколов – Скаля" },
      { title: "Слава защитникам Москвы!", author: "М. М. Соловьев" },
      { title: "Родина – мать зовет!", author: "И. М. Тоидзе", museum: "Тульский государственный музей оружия", file: "rodina-mat-zovet-594x850.jpg" },
    ],
  },
  {
    year: 1942,
    items: [
      { title: "Нашим партизанам и партизанкам – слава!", author: "П. А. Алякринский" },

      { title: "Боец Красной армии! Ты не дашь любимую на позор и бесчестье гитлеровским солдатам", author: "Ф. В. Антонов", file: "boets-krasnoy-armii-tyi-ne-dash-lyubimuyu-na-pozor-i-beschestie-gitlerovskim-soldatam-648x850.jpg" },
      { title: "За честь жены, за жизнь детей", author: "Л. Ф. Голованов", file: "za-chest-zhenyi-za-chest-detey-za-schaste-rodinyi-svoey-608x850.jpg" },
      { title: "Сталинград!", author: "В. Н. Дени, Н. А. Долгоруков", file: "stalingrad-645x847.jpg" },
      { title: "Смерть немецким оккупантам!", author: "Н. А. Долгоруков, Н. А. Ефимов", museum: "Музей обороны Тулы", file: "smert-nemetskim-okkupantam-603x850.jpg" },
      { title: "Выступали – веселились, отступали – обслезились", author: "Б. Е. Ефимов, Н. А. Долгоруков", file: "yistupali-veselilis-otstupali-obslezilis-559x850.jpg" },
      { title: "Бей насмерть!", author: "Н. Н. Жуков", file: "bey-nasmert-654x814.jpg" },
      { title: "Вперед! На Запад!", author: "В. С. Иванов", file: "vpered-na-zapad-596x850.jpg" },
      { title: "Бей, коли, гони, бери в полон!", author: "В. С. Иванов", museum: "Тульский военно-исторический музей" },
      {
        title: "Больше хлеба фронту!",
        author: "И. Т. Колочков, М. Х. Кочнев, В. П. Федоров", museum: "Музей обороны Тулы",
        file: "bolshe-hleba-frontu.jpg",
      },
      { title: "Гитлериада", author: "Кукрыниксы", museum: "Музей Порфирия Никитича Крылова", file: "kukr-gitleriada.jpg" },
      { title: "Крыловская мартышка о Геббельсе", author: "Кукрыниксы", museum: "Музей Порфирия Никитича Крылова", file: "kukr-kmartyshka.jpg" },
      {
        title: "Свет в окне - помощь врагу!",
        author: "А. А. Кокорекин", museum: "Музей обороны Тулы",
        file: "svet-v-okne.jpg",
      },
       {
        title: "Тульское чаеБитие",
        author: "Н. М. Лисогорский", museum: "Тульский областной краеведческий музей",
        file: "tulskoe_chaebitye.jpg",
      },
      { title: "Все для победы! Фронту от женщин СССР", author: "А. А. Кокорекин", file: "vse-dlya-pobedyi-frontu-ot-zhenshhin-sssr-637x850.jpg" },
      { title: "За Родину!", author: "А. А. Кокорекин", file: "za-rodinu1-528x850.jpg" },
      { title: "Воин Красной армии, спаси!", author: "В. Б. Корецкий", file: "voin-krasnoy-armii-spasi-606x850.jpg" },
      { title: "Дойная корова", author: "Кукрыниксы" },
      { title: "Подлую тварь – на фонарь!", author: "Кукрыниксы" },
      { title: "«Брехомет»", author: "Кукрыниксы" },
      { title: "Превращение «фрицев»", author: "Кукрыниксы" },
      { title: "«Аттестат зверости»", author: "Кукрыниксы" },
      { title: "Били мы врага копьем…", author: "Кукрыниксы" },
      { title: "Все для фронта! Все для победы!", author: "Л. М. Лисицкий", file: "vse-dlya-fronta-vse-dlya-pobedyi-591x850.jpg" },
      { title: "России двинулись сыны", author: "П. П. Соколов – Скаля" },
      { title: "Воин, ответь Родине победой!", author: "Д. А. Шмаринов" },
      { title: "Отомсти!", author: "Д. А. Шмаринов", file: "otomsti-562x850.jpg" },
      { title: "Ты храбро воевал с врагом — войди, хозяин, в новый дом!", author: "Иванова В.С.,Буровой О.К.", file: "za-rodinu-za-chest-za-svobodu-574x850.jpg" },
      { title: "Я жду тебя, воин – освободитель!", author: "Д. А. Шмаринов", file: "ya-zhdu-tebya-voin-osvoboditel-638x850.jpg" },
    ],
  },
  {
    year: 1943,
    items: [
      { title: "Я хочу жить", author: "Ф. В. Антонов" },
      { title: "Спасем советских ребят от немцев!", author: "Л. Ф. Голованов", file: "spasem-sovetskih-rebyat-ot-nemtsev-590x850.jpg" },
      {
        title: "Доблестные воины, крепче бейте врага! Вперед на запад, за полное освобождение советской земли!",
        author: "Л. Ф. Голованов",
      },
      { title: "Расплата", author: "Кукрыниксы", museum: "Музей Порфирия Никитича Крылова", file: "kukr-rasplata.jpg" },
      { title: "За страну советскую, за веру немецкую", author: "Кукрыниксы", museum: "Музей Порфирия Никитича Крылова", file: "kukr-za-stranu-sov.jpg" },
      { title: "Убей его!", author: "Кукрыниксы", museum: "Музей Порфирия Никитича Крылова", file: "kukr-ubey-ego.jpg" },
       { title: "Новогоднее гадание", author: "Кукрыниксы", file: "1411639236-kukryniksy-12-640x726.jpg" },
      { title: "Союзники", author: "Б. Е. Ефимов" },
      { title: "Немецкий танк здесь не пройдет", author: "Н. Н. Жуков" },
      { title: "Ты вернул нам жизнь!", author: "В. С. Иванов", file: "tyi-vernul-nam-zhizn-595x850.jpg" },
      { title: "Очистим советскую землю от фашистской нечисти!", author: "В. С. Иванов", file: "ochistim-sovetskuyu-zemlyu-ot-fashistkoy-nechisti-566x850.jpg" },
      { title: "На Запад!", author: "В. С. Иванов", file: "na-zapad-563x850.jpg" },
      { title: "Вся надежда на тебя, красный воин!", author: "В. С. Иванов, О. К. Бурова" },
      { title: "В этой фронтовой сводке есть и мой боевой труд!", author: "А. А. Кокорекин", file: "est-i-moi-boevoy-trud-1199x1750.jpg" },
      { title: "Боец, Родина ждет этого дня!", author: "В. Б. Корецкий" },
      { title: "Бей так: Что ни патрон – то немец!", author: "В. Б. Корецкий", file: "bey-tak-chto-ni-patron-to-vraga-569x850.jpg" },
      { title: "После Туниса…", author: "Кукрыниксы" },
      { title: "Под Орлом аукнулось, в Риме откликнулось", author: "Кукрыниксы" },
      { title: "Руки коротки", author: "Кукрыниксы" },
      { title: "Клянусь победить врага!", author: "Д. С. Моор" },
      { title: "За Родину – мать!", author: "И. М. Тоидзе", file: "za-rodinu-mat-573x779.jpg" },
      { title: "Слава освободителям Украины!", author: "Д. А. Шмаринов" },
    ],
  },
  {
    year: 1944,
    items: [
      { title: "По вражьей земле, вперед к победе!", author: "М. М. Аввакумов" },
      { title: "Вперед! Победа близка!", author: "Н. Н. Ватолина" },
      { title: "Дойдем до Берлина!", author: "Л. Ф. Голованов", file: "doydem-do-berlina-588x850.jpg" },
      { title: "Узнал фашистский стервятник, что у нас – не ягнятник!", author: "В. Н. Дени", file: "uznal-fashistkiy-stervyatnik-chto-u-nas-ne-yagnyatnik-559x779.jpg" },
      { title: "Так будет с фашистским зверем!", author: "А. А. Кокорекин" },
      { title: "Не спасутся фашисты – гады от снарядов нашей бригады!", author: "В. Б. Корецкий" },
      { title: "Европа будет свободной!", author: "В. Б. Корецкий" },
      { title: "Здание фашистского блока", author: "Кукрыниксы" },
      { title: "Обратный путь", author: "Кукрыниксы" },
      { title: "Громовой удар", author: "Кукрыниксы" },
      { title: "Туда и обратно", author: "Кукрыниксы" },
      { title: "Три года войны", author: "Кукрыниксы", museum: "Музей Порфирия Никитича Крылова" },
      { title: "Восстановим!", author: "А. А. Пластов" },
      { title: "Дедовская слава", author: "Д. А. Шмаринов" },
      { title: "Чехи! Словаки! Поляки!", author: "Д. А. Шмаринов" },
      { title: "Разная картина - вид Москвы и вид Берлина!", author: "В. Н. Дени", file: "27-oktyabrya-559x850.jpg" },
      { title: "Советская земля окончательно очищена от немецко-фашистских захватчиков!", author: "Н. М. Кочергин", file: "sovetskaya-zemlya-okonchatelno-ochishhena-ot-nemetsko-fashistskih-zahvatchikov-613x850.jpg" },
    ],
  },
  {
    year: 1945,
    items: [
      { title: "Красной армии – слава!", author: "Л. Ф. Голованов", file: "krasnoy-armii-slava-1184x1712.jpg" },
      { title: "Окружим лаской и заботой детей, пострадавших от фашистских варваров", author: "Ф. В. Антонов" },
      { title: "Красной армии метла нечисть вымела дотла!", author: "В. Н. Дени", museum: "Тульский государственный музей оружия", file: "krasnoy-armii-metla-nechist-vyimela-dotla-627x850.jpg" },
      { title: "Враг коварен – будь на – чеку!", author: "В. С. Иванов", file: "vrag-kovaren-bud-na-cheku-571x850.jpg" },
      { title: "Отстроим на славу!", author: "В. С. Иванов, О. К. Бурова", file: "otstroim-na-slavu-618x850.jpg" },
      { title: "Воину – победителю – всенародная любовь!", author: "А. А. Кокорекин", museum: "Музей Тульский пряник", file: "voinu-pobeditelyu-vsenarodna-lyubov-603x850.jpg" },
      { title: "Наше знамя – знамя победы!", author: "В. Б. Корецкий" },
    ],
  },
];














