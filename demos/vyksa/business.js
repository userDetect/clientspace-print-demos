export const business = {
  "name": "Выксунская типография",
  "slug": "vyksa",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Книги",
      "detail": "Тиражи от одного экземпляра. Возможен чёрно-белый или цветной блок на офсетной, мелованной или дизайнерской бумаге. Выберите переплёт или оставьте это на согласование.",
      "group": "Издательство",
      "photo": "",
      "url": "https://phpress.ru/products/",
      "imageAlt": "Книги"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Газеты",
      "detail": "Газетные тиражи от 500 экземпляров. По странице производства доступны бумаги от 45 до 80 г/м², возможны скоба и обложка из лёгкой мелованной бумаги.",
      "group": "Периодика",
      "photo": "",
      "url": "https://phpress.ru/products/",
      "imageAlt": "Газеты"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Рекламная полиграфия",
      "detail": "Листовки, плакаты, визитки и буклеты. Ламинирование, вырубка, тиснение и конгрев.",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Рекламная полиграфия"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Бланочная продукция",
      "detail": "Стандартные и индивидуальные формы, журналы учёта и нумерованные квитанции. Для нового бланка приложите образец формы.",
      "group": "Для организаций",
      "photo": "",
      "url": "https://phpress.ru/products/",
      "imageAlt": "Бланочная продукция"
    },
    {
      "id": "p5",
      "oldIndex": 4,
      "name": "Вёрстка и макеты",
      "detail": "Издательский отдел помогает с концепцией, подготовкой макета и вёрсткой издания.",
      "group": "Подготовка и обработка",
      "photo": "",
      "url": "",
      "imageAlt": "Вёрстка и макеты"
    }
  ],
  "tariffs": [],
  "fields": [
    {
      "key": "format",
      "label": "Формат издания",
      "type": "text",
      "applies": null
    },
    {
      "key": "pages",
      "label": "Количество полос",
      "type": "number",
      "applies": null
    },
    {
      "key": "quantity",
      "label": "Тираж, экз.",
      "type": "number",
      "applies": null
    },
    {
      "key": "binding",
      "label": "Переплёт или скрепление",
      "type": "select",
      "options": [
        "Подберите вариант",
        "Твёрдый переплёт",
        "Мягкий переплёт",
        "Скрепка",
        "Пружина"
      ],
      "applies": [
        0
      ]
    },
    {
      "key": "ink",
      "label": "Цветность и бумага",
      "type": "text",
      "applies": null
    },
    {
      "key": "delivery",
      "label": "Самовывоз или город доставки",
      "type": "text",
      "applies": null
    },
    {
      "key": "deadline",
      "label": "Дата готовности",
      "type": "date",
      "applies": null
    },
    {
      "key": "paper",
      "label": "Бумага или плотность",
      "type": "text",
      "options": [],
      "applies": null
    },
    {
      "key": "artwork_ready",
      "label": "Готовность макета",
      "type": "select",
      "options": [
        "Макет готов",
        "Есть рукопись",
        "Нужна подготовка"
      ],
      "applies": null
    }
  ],
  "fileLabel": "Макет или материалы"
};
