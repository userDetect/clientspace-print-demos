export const business = {
  "name": "РекПроНН",
  "slug": "rekpronn",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Объёмные буквы",
      "detail": "Световые буквы и логотипы с выбором размеров и типа подсветки.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Объёмные буквы"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Световые короба",
      "detail": "Изготовление коробов разных форм, включая композитные.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Световые короба"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Таблички и указатели",
      "detail": "Навигационные и информационные конструкции.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Таблички и указатели"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Баннеры и интерьерная печать",
      "detail": "УФ, широкоформатная и интерьерная печать на баннере и плёнке.",
      "group": "Широкий формат",
      "photo": "",
      "url": "",
      "imageAlt": "Баннеры и интерьерная печать"
    },
    {
      "id": "p5",
      "oldIndex": 4,
      "name": "Брендирование",
      "detail": "Оформление магазинов и офисов, оклейка транспорта.",
      "group": "Сувениры и брендирование",
      "photo": "",
      "url": "",
      "imageAlt": "Брендирование"
    },
    {
      "id": "p6",
      "oldIndex": 5,
      "name": "Монтаж и обслуживание",
      "detail": "Монтаж, демонтаж, ремонт вывесок и помощь с согласованием.",
      "group": "Монтаж и проектирование",
      "photo": "",
      "url": "",
      "imageAlt": "Монтаж и обслуживание"
    },
    {
      "id": "p7",
      "oldIndex": null,
      "name": "Композитные световые короба",
      "detail": "Короб с композитной панелью для наружной вывески. Для расчёта укажите площадь и способ свечения.",
      "group": "Вывески",
      "photo": "",
      "url": "https://rekpronn.ru/#1",
      "imageAlt": "Композитные световые короба"
    },
    {
      "id": "p8",
      "oldIndex": null,
      "name": "Ремонт и демонтаж вывесок",
      "detail": "Обслуживание и демонтаж рекламных конструкций. Укажите высоту установки и прикрепите фото.",
      "group": "Монтаж",
      "photo": "",
      "url": "https://rekpronn.ru/#1",
      "imageAlt": "Ремонт и демонтаж вывесок"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "p1",
      "productLabel": "Объёмные буквы",
      "label": "Базовый ориентир",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 85 ₽/см",
      "rules": "Цена зависит от геометрии и выбранной подсветки. Итог подтверждается по заявке.",
      "url": "https://rekpronn.ru/#1",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t2",
      "product": "p2",
      "productLabel": "Световые короба",
      "label": "Короб на заказ",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 11 500 ₽/м²",
      "rules": "Площадь и исполнение корпуса уточняются по проекту.",
      "url": "https://rekpronn.ru/#1",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t3",
      "product": "p7",
      "productLabel": "Композитные световые короба",
      "label": "Композитное исполнение",
      "quantity": null,
      "displayQuantity": null,
      "price": "13 500 ₽/м²",
      "rules": "Публичный ориентир. Монтаж и условия комплектации уточняются.",
      "url": "https://rekpronn.ru/#1",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t4",
      "product": "p4",
      "productLabel": "Баннеры и интерьерная печать",
      "label": "Рекламный баннер",
      "quantity": null,
      "displayQuantity": null,
      "price": "350 ₽/м²",
      "rules": "Цена на странице производства для баннеров и рекламных сеток.",
      "url": "https://rekpronn.ru/#1",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t5",
      "product": "p5",
      "productLabel": "Брендирование",
      "label": "Офисы и торговые точки",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 1 900 ₽/м²",
      "rules": "Ориентир для помещений. Автомобили и спецтехника рассчитываются отдельно.",
      "url": "https://rekpronn.ru/#1",
      "amount": null,
      "mode": "reference",
      "apply": false
    }
  ],
  "fields": [
    {
      "key": "size",
      "label": "Размер вывески / ширина фасада",
      "type": "text",
      "applies": null
    },
    {
      "key": "lighting",
      "label": "Подсветка",
      "type": "select",
      "options": [
        "Лицевая",
        "Контражурная",
        "Без подсветки",
        "Нужна рекомендация"
      ],
      "applies": null
    },
    {
      "key": "site",
      "label": "Адрес монтажа",
      "type": "text",
      "applies": null
    },
    {
      "key": "install",
      "label": "Монтаж",
      "type": "select",
      "options": [
        "Нужен монтаж",
        "Только изготовление",
        "Нужна консультация"
      ],
      "applies": null
    },
    {
      "key": "notes",
      "label": "Материал, срок и согласование",
      "type": "textarea",
      "applies": null
    }
  ],
  "fileLabel": "Фото фасада или логотип"
};
