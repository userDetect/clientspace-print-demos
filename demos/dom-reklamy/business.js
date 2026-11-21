export const business = {
  "name": "Дом Рекламы",
  "slug": "dom-reklamy",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Уличные баннеры",
      "detail": "Печать 360 dpi. В ассортименте литые, сетчатые, транслюцентные материалы.",
      "group": "Широкий формат",
      "photo": "",
      "url": "",
      "imageAlt": "Уличные баннеры"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Интерьерные баннеры",
      "detail": "Печать 720–1440 dpi для проектов, которые будут рассматривать вблизи.",
      "group": "Широкий формат",
      "photo": "",
      "url": "",
      "imageAlt": "Интерьерные баннеры"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Плёнка и бумага",
      "detail": "Белые, прозрачные, перфорированные и специальные плёнки, а также бумага для печати.",
      "group": "Наклейки и плёнки",
      "photo": "",
      "url": "",
      "imageAlt": "Плёнка и бумага"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Холст и фотообои",
      "detail": "Изображения на холсте, ткани и обоях разных фактур.",
      "group": "Рекламное оформление",
      "photo": "",
      "url": "",
      "imageAlt": "Холст и фотообои"
    },
    {
      "id": "p5",
      "oldIndex": 4,
      "name": "Вывески и таблички",
      "detail": "Объёмные буквы, таблички и наружные рекламные конструкции.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Вывески и таблички"
    },
    {
      "id": "p6",
      "oldIndex": 5,
      "name": "Карты и визитки",
      "detail": "Визитки, пластиковые карты и магниты.",
      "group": "Рекламное оформление",
      "photo": "",
      "url": "",
      "imageAlt": "Карты и визитки"
    },
    {
      "id": "p7",
      "oldIndex": null,
      "name": "Баннерная сетка",
      "detail": "Сетчатый ПВХ-носитель для крупноформатных уличных полотен. Укажите размеры, место монтажа и нужные крепления.",
      "group": "Печать",
      "photo": "assets/79636a6ffa665a1f9a4f6329.webp",
      "url": "https://zakaz.domreklami.ru/Tseni",
      "imageAlt": "Баннерная сетка"
    },
    {
      "id": "p8",
      "oldIndex": null,
      "name": "Прозрачная плёнка для стекла",
      "detail": "Глянцевая самоклеящаяся плёнка Ritrama для витрин и окон, толщиной 100 мкм.",
      "group": "Печать",
      "photo": "assets/02e72ff34ecab2d49d0f20a1.webp",
      "url": "https://zakaz.domreklami.ru/Tseni",
      "imageAlt": "Прозрачная плёнка для стекла"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "p1",
      "productLabel": "Уличные баннеры",
      "label": "Баннер 300 г/м²",
      "quantity": null,
      "displayQuantity": null,
      "price": "160 ₽/м²",
      "rules": "Печать 360 dpi. Проклейка и крепёж рассчитываются отдельно.",
      "url": "https://zakaz.domreklami.ru/Tseni",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t2",
      "product": "p1",
      "productLabel": "Уличные баннеры",
      "label": "Баннер 440 г/м²",
      "quantity": null,
      "displayQuantity": null,
      "price": "180 ₽/м²",
      "rules": "Печать 360 dpi. Отдельно указывают обработку краёв.",
      "url": "https://zakaz.domreklami.ru/Tseni",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t3",
      "product": "p1",
      "productLabel": "Уличные баннеры",
      "label": "Литой баннер 440 г/м²",
      "quantity": null,
      "displayQuantity": null,
      "price": "210 ₽/м²",
      "rules": "Печать 360 dpi. Ориентир за печать без дополнительных работ.",
      "url": "https://zakaz.domreklami.ru/Tseni",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t4",
      "product": "p7",
      "productLabel": "Баннерная сетка",
      "label": "Полотно с сетчатой структурой",
      "quantity": null,
      "displayQuantity": null,
      "price": "220 ₽/м²",
      "rules": "Печать 360 dpi, обработка и монтаж уточняются.",
      "url": "https://zakaz.domreklami.ru/Tseni",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t5",
      "product": "p8",
      "productLabel": "Прозрачная плёнка для стекла",
      "label": "Глянцевая Ritrama 100 мкм",
      "quantity": null,
      "displayQuantity": null,
      "price": "350 ₽/м²",
      "rules": "Ориентир за печать по таблице материалов.",
      "url": "https://zakaz.domreklami.ru/Tseni",
      "amount": null,
      "mode": "reference",
      "apply": false
    }
  ],
  "fields": [
    {
      "key": "size",
      "label": "Ширина × высота, м",
      "type": "text",
      "applies": null
    },
    {
      "key": "material",
      "label": "Материал",
      "type": "select",
      "options": [
        "Помогите подобрать",
        "Литой баннер",
        "Баннерная сетка",
        "Самоклеящаяся плёнка",
        "Холст",
        "Другой материал"
      ],
      "applies": [
        0,
        1,
        2,
        3
      ]
    },
    {
      "key": "quantity",
      "label": "Количество изделий",
      "type": "number",
      "applies": null
    },
    {
      "key": "edges",
      "label": "Люверсы или проклейка",
      "type": "text",
      "applies": [
        0,
        1
      ]
    },
    {
      "key": "layoutLink",
      "label": "Ссылка на готовый макет",
      "type": "text",
      "applies": null
    },
    {
      "key": "objectAddress",
      "label": "Адрес для вывески",
      "type": "text",
      "options": [],
      "applies": [
        4
      ]
    },
    {
      "key": "receiving",
      "label": "Получение",
      "type": "select",
      "options": [
        "Самовывоз",
        "Доставка",
        "Уточнить"
      ],
      "applies": null
    }
  ],
  "fileLabel": "Макет или фото места монтажа"
};
