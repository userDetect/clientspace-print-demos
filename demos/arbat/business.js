export const business = {
  "name": "Арбат",
  "slug": "arbat",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Цифровая полиграфия",
      "detail": "Листовки, каталоги, визитки, буклеты и брошюры",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Цифровая полиграфия"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Печать книг",
      "detail": "По вашему макету, в мягком или твёрдом переплёте",
      "group": "Книги и брошюры",
      "photo": "",
      "url": "",
      "imageAlt": "Печать книг"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Изготовление упаковки",
      "detail": "Коробки из картона и плотных материалов",
      "group": "Упаковка и комплекты",
      "photo": "",
      "url": "",
      "imageAlt": "Изготовление упаковки"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Интерьерная печать",
      "detail": "Постеры, стикерпаки, плакаты и стенды",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Интерьерная печать"
    },
    {
      "id": "p5",
      "oldIndex": 4,
      "name": "Инженерная печать",
      "detail": "Чертежи, брошюровка и инженерная документация",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Инженерная печать"
    },
    {
      "id": "p6",
      "oldIndex": 5,
      "name": "Настольные игры",
      "detail": "Изготовление с индивидуальной коробкой и термоусадочной плёнкой",
      "group": "Упаковка и комплекты",
      "photo": "",
      "url": "",
      "imageAlt": "Настольные игры"
    }
  ],
  "tariffs": [],
  "fields": [
    {
      "key": "format",
      "label": "Формат или габариты",
      "type": "text",
      "applies": null
    },
    {
      "key": "quantity",
      "label": "Тираж, шт.",
      "type": "number",
      "applies": null
    },
    {
      "key": "spec",
      "label": "Переплёт, коробка или комплект",
      "type": "text",
      "applies": null
    },
    {
      "key": "details",
      "label": "Страницы, состав или материалы",
      "type": "textarea",
      "applies": null
    },
    {
      "key": "deadline",
      "label": "К какому дню нужен заказ",
      "type": "date",
      "applies": null
    },
    {
      "key": "pages",
      "label": "Страниц в книге",
      "type": "number",
      "options": [],
      "applies": [
        1
      ]
    },
    {
      "key": "binding",
      "label": "Переплёт",
      "type": "select",
      "options": [
        "Мягкий",
        "Твёрдый",
        "Уточнить"
      ],
      "applies": [
        1
      ]
    },
    {
      "key": "purpose",
      "label": "Для чего нужна упаковка",
      "type": "text",
      "options": [],
      "applies": [
        2
      ]
    },
    {
      "key": "components",
      "label": "Состав набора",
      "type": "text",
      "options": [],
      "applies": [
        5
      ]
    }
  ],
  "fileLabel": "Макет или спецификация"
};
