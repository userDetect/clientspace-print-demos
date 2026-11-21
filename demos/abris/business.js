export const business = {
  "name": "Абрис",
  "slug": "abris",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Визитки",
      "detail": "Для тиража выберите цифровую или офсетную печать, бумагу и вариант отделки.",
      "group": "Листовая полиграфия",
      "photo": "assets/4099be53d4ae4c5fc16f5569.webp",
      "url": "https://www.copyrus-nn.ru/nasha-produktsiya/vizitki",
      "imageAlt": "Визитки"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Листовки и буклеты",
      "detail": "Рекламные материалы с одно- или двусторонней печатью.",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Листовки и буклеты"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Документы и ризография",
      "detail": "Чёрно-белая печать А4 и А3, тиражирование бланков и методических материалов.",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Документы и ризография"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Конверты и бланки",
      "detail": "Логотип и реквизиты на конвертах и фирменных бланках.",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Конверты и бланки"
    },
    {
      "id": "p5",
      "oldIndex": 4,
      "name": "Баннеры и плёнка",
      "detail": "Широкоформатная и интерьерная печать на баннере, плёнке, бумаге и пластике.",
      "group": "Широкий формат",
      "photo": "",
      "url": "",
      "imageAlt": "Баннеры и плёнка"
    },
    {
      "id": "p6",
      "oldIndex": 5,
      "name": "Переплёт и обработка",
      "detail": "Твёрдый и клеевой переплёт, скрепление на пружину, ламинация и подготовка файла.",
      "group": "Документы и отделка",
      "photo": "assets/48caa972e34d9c1237eeb883.webp",
      "url": "https://www.copyrus-nn.ru/nasha-produktsiya/dopolnitelnye-uslugi/pereplet-broshyurovanie",
      "imageAlt": "Переплёт и обработка"
    }
  ],
  "tariffs": [],
  "fields": [
    {
      "key": "format",
      "label": "Готовый формат или размер",
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
      "key": "sides",
      "label": "Цветность / стороны",
      "type": "select",
      "options": [
        "Чёрно-белая",
        "Цветная, 1 сторона",
        "Цветная, 2 стороны",
        "Нужна консультация"
      ],
      "applies": null
    },
    {
      "key": "deadline",
      "label": "Когда нужен заказ",
      "type": "date",
      "applies": null
    },
    {
      "key": "notes",
      "label": "Бумага и отделка",
      "type": "textarea",
      "applies": null
    },
    {
      "key": "technology",
      "label": "Способ печати",
      "type": "select",
      "options": [
        "Цифровая",
        "Офсетная",
        "Нужно подобрать"
      ],
      "applies": null
    },
    {
      "key": "urgency",
      "label": "Срочность",
      "type": "select",
      "options": [
        "Обычный срок",
        "Срочно",
        "К указанной дате"
      ],
      "applies": null
    }
  ],
  "fileLabel": "Макет"
};
