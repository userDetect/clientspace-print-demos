export const business = {
  "name": "Артграфика",
  "slug": "artgrafika",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Полиграфия",
      "detail": "Визитки, буклеты, каталоги и брошюры.",
      "group": "Рекламное оформление",
      "photo": "",
      "url": "",
      "imageAlt": "Полиграфия"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Световые короба",
      "detail": "Рекламные конструкции для фасадных и интерьерных задач.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Световые короба"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Таблички и указатели",
      "detail": "Информационные таблички и указатели для зданий.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Таблички и указатели"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Сувениры и значки",
      "detail": "Закатные значки и продукция с символикой.",
      "group": "Сувениры и брендирование",
      "photo": "",
      "url": "",
      "imageAlt": "Сувениры и значки"
    },
    {
      "id": "p5",
      "oldIndex": null,
      "name": "Дисконтные карты",
      "detail": "Белый, цветной или прозрачный пластик и ламинированный картон. Возможна персонализация тиража QR-кодами и номерами.",
      "group": "Полиграфия",
      "photo": "assets/e7c1ef0c2326e5787693dbb8.webp",
      "url": "https://artgrafika-nn.ru/discount.html",
      "imageAlt": "Дисконтные карты"
    },
    {
      "id": "p6",
      "oldIndex": null,
      "name": "Издание книг",
      "detail": "Подготовка рукописи, печать и переплёт. В заявке можно выбрать готовый тираж или полный цикл от вёрстки до ISBN.",
      "group": "Книги",
      "photo": "",
      "url": "https://artgrafika-nn.ru/knigi.html",
      "imageAlt": "Издание книг"
    },
    {
      "id": "p7",
      "oldIndex": null,
      "name": "Квартальные календари",
      "detail": "Настенный календарь для корпоративного оформления и подарков. Укажите тираж, количество рекламных полей и наличие макета.",
      "group": "Полиграфия",
      "photo": "",
      "url": "https://artgrafika-nn.ru/calendar_0100_calendar_kwart.html",
      "imageAlt": "Квартальные календари"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "p5",
      "productLabel": "Дисконтные карты",
      "label": "Ламинированный картон 4+4",
      "quantity": null,
      "displayQuantity": "100 шт.",
      "price": "18,20 ₽/шт.",
      "rules": "Картон 300 г/м² и глянцевая ламинация 200–250 мкм.",
      "url": "https://artgrafika-nn.ru/discount.html",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t2",
      "product": "p5",
      "productLabel": "Дисконтные карты",
      "label": "Белый пластик",
      "quantity": null,
      "displayQuantity": "100 шт.",
      "price": "25,40 ₽/шт.",
      "rules": "Стандартная карта 86 × 54 мм. Персонализация считается отдельно.",
      "url": "https://artgrafika-nn.ru/discount.html",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t3",
      "product": "p5",
      "productLabel": "Дисконтные карты",
      "label": "Белый пластик",
      "quantity": null,
      "displayQuantity": "500 шт.",
      "price": "18,65 ₽/шт.",
      "rules": "Стандартная карта 86 × 54 мм. Цена зависит от тиража.",
      "url": "https://artgrafika-nn.ru/discount.html",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t4",
      "product": "p5",
      "productLabel": "Дисконтные карты",
      "label": "Цветной или прозрачный пластик",
      "quantity": null,
      "displayQuantity": "500 шт.",
      "price": "26,90 ₽/шт.",
      "rules": "Стандартная карта 86 × 54 мм.",
      "url": "https://artgrafika-nn.ru/discount.html",
      "amount": null,
      "mode": "reference",
      "apply": false
    }
  ],
  "fields": [
    {
      "key": "size",
      "label": "Ширина × высота, см",
      "type": "text",
      "applies": null
    },
    {
      "key": "amount",
      "label": "Количество",
      "type": "number",
      "applies": null
    },
    {
      "key": "material",
      "label": "Материал или бумага",
      "type": "text",
      "applies": null
    },
    {
      "key": "date",
      "label": "Желаемая дата",
      "type": "date",
      "applies": null
    }
  ],
  "fileLabel": "Макет или фото объекта"
};
