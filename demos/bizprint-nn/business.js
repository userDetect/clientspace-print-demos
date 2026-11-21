export const business = {
  "name": "Бизнес Принт",
  "slug": "bizprint-nn",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Офсетная полиграфия",
      "detail": "Визитки, листовки, буклеты и каталоги",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Офсетная полиграфия"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Широкоформатная печать",
      "detail": "Баннеры, плакаты и настенные носители",
      "group": "Широкий формат",
      "photo": "",
      "url": "",
      "imageAlt": "Широкоформатная печать"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Вывески",
      "detail": "Объёмные буквы, плоские вывески и световые короба",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Вывески"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Рекламные конструкции",
      "detail": "Ролл-апы, пресс-воллы и штендеры",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Рекламные конструкции"
    },
    {
      "id": "p5",
      "oldIndex": 4,
      "name": "Наклейки и оформление",
      "detail": "Наклейки, таблички и информационные стенды",
      "group": "Наклейки и плёнки",
      "photo": "",
      "url": "",
      "imageAlt": "Наклейки и оформление"
    },
    {
      "id": "p6",
      "oldIndex": 5,
      "name": "Сувениры с символикой",
      "detail": "Кружки, текстиль, подарочная продукция",
      "group": "Сувениры и брендирование",
      "photo": "",
      "url": "",
      "imageAlt": "Сувениры с символикой"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "",
      "productLabel": "Подготовка макета",
      "label": "Дизайн по техническому заданию",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 300 ₽",
      "rules": "Опубликованный ориентир. Точная сумма зависит от сложности работы.",
      "url": "https://bizprint-nn.ru/",
      "amount": null,
      "mode": "reference",
      "apply": false
    }
  ],
  "fields": [
    {
      "key": "spec",
      "label": "Размер изделия или вывески",
      "type": "text",
      "applies": null
    },
    {
      "key": "quantity",
      "label": "Количество или тираж",
      "type": "number",
      "applies": null
    },
    {
      "key": "location",
      "label": "Адрес монтажа, если нужен",
      "type": "text",
      "applies": [
        2,
        3,
        4
      ]
    },
    {
      "key": "details",
      "label": "Материал, подсветка или отделка",
      "type": "textarea",
      "applies": null
    },
    {
      "key": "deadline",
      "label": "Желаемая дата",
      "type": "date",
      "applies": null
    },
    {
      "key": "finish",
      "label": "Бумага, материал или покрытие",
      "type": "text",
      "options": [],
      "applies": [
        0,
        1,
        4,
        5
      ]
    },
    {
      "key": "installation",
      "label": "Монтаж",
      "type": "select",
      "options": [
        "Нужен",
        "Не нужен",
        "Уточнить"
      ],
      "applies": [
        2,
        3
      ]
    }
  ],
  "fileLabel": "Макет, логотип или фото фасада"
};
