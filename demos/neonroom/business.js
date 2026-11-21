export const business = {
  "name": "Neonroom.nn",
  "slug": "neonroom",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Неоновая надпись",
      "detail": "Светящаяся фраза или типографика под интерьер.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Неоновая надпись"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Логотип для бизнеса",
      "detail": "Световой логотип для магазина, офиса или витрины.",
      "group": "Рекламное оформление",
      "photo": "",
      "url": "",
      "imageAlt": "Логотип для бизнеса"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Неоновое панно",
      "detail": "Световая графика для стены или зоны оформления.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Неоновое панно"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Макет на фотографии",
      "detail": "Примерка оформления по фото предполагаемого места установки.",
      "group": "Подготовка и обработка",
      "photo": "",
      "url": "",
      "imageAlt": "Макет на фотографии"
    },
    {
      "id": "p5",
      "oldIndex": null,
      "name": "Уличные неоновые вывески",
      "detail": "Вывеска для наружного размещения. Укажите адрес, место подключения и приложите фото фасада.",
      "group": "Вывески",
      "photo": "",
      "url": "https://neonroomnn.ru/",
      "imageAlt": "Уличные неоновые вывески"
    },
    {
      "id": "p6",
      "oldIndex": null,
      "name": "Фотозона и аренда неона",
      "detail": "Световое оформление мероприятия с арендой вывески. Укажите площадку, даты и размер зоны.",
      "group": "События",
      "photo": "",
      "url": "https://neonroomnn.ru/",
      "imageAlt": "Фотозона и аренда неона"
    },
    {
      "id": "p7",
      "oldIndex": null,
      "name": "Готовые неоновые ночники",
      "detail": "Готовые изделия для интерьера. Уточните доступный рисунок и комплектацию.",
      "group": "Интерьер",
      "photo": "",
      "url": "https://neonroomnn.ru/",
      "imageAlt": "Готовые неоновые ночники"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "p1",
      "productLabel": "Неоновая надпись",
      "label": "Интерьерный неон на заказ",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 5 000 ₽ за вывеску",
      "rules": "Размер, сложность рисунка и способ размещения входят в индивидуальный расчёт.",
      "url": "https://neonroomnn.ru/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t2",
      "product": "p5",
      "productLabel": "Уличные неоновые вывески",
      "label": "Неон для улицы",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 7 000 ₽ за вывеску",
      "rules": "Комплектацию и условия эксплуатации согласуют для объекта.",
      "url": "https://neonroomnn.ru/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t3",
      "product": "p6",
      "productLabel": "Фотозона и аренда неона",
      "label": "Аренда",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 1 500 ₽/сутки",
      "rules": "Доступность и доставку уточняют на дату мероприятия.",
      "url": "https://neonroomnn.ru/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t4",
      "product": "p7",
      "productLabel": "Готовые неоновые ночники",
      "label": "Готовое изделие",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 2 000 ₽ за ночник",
      "rules": "Актуальную цену выбранного изделия подтверждает компания.",
      "url": "https://neonroomnn.ru/",
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
      "key": "placement",
      "label": "Место размещения",
      "type": "select",
      "options": [
        "Фасад",
        "Интерьер",
        "Витрина"
      ],
      "applies": null
    },
    {
      "key": "color",
      "label": "Цвет или оттенок свечения",
      "type": "text",
      "applies": null
    },
    {
      "key": "power",
      "label": "Питание",
      "type": "select",
      "options": [
        "От розетки",
        "От аккумулятора",
        "Нужно подобрать"
      ],
      "applies": null
    },
    {
      "key": "delivery_city",
      "label": "Город доставки",
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
