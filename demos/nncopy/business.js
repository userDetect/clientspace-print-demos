export const business = {
  "name": "ННКОПИ",
  "slug": "nncopy",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Документы и копии",
      "detail": "Печать документов и копирование. Сообщите число страниц, количество экземпляров и требуется ли печать на обеих сторонах листа.",
      "group": "Копицентр",
      "photo": "",
      "url": "https://nncopy.ru/rasp",
      "imageAlt": "Документы и копии"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Плакаты, схемы и чертежи",
      "detail": "Печать схем и плакатов в форматах А1 и А2. В запросе можно отдельно выбрать технический чертёж, обычное изображение или фотопечать на глянцевой бумаге.",
      "group": "Широкий формат",
      "photo": "assets/a676fdc41c97e5fad8c46dae.webp",
      "url": "https://nncopy.ru/shema/",
      "imageAlt": "Фотография из раздела плакатов и чертежей ННКОПИ"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Деловая полиграфия",
      "detail": "Визитки, листовки, флаеры и буклеты для компаний и мероприятий.",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Деловая полиграфия"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Наклейки и этикетки",
      "detail": "Печать наклеек для упаковки и маркировки.",
      "group": "Упаковка и комплекты",
      "photo": "",
      "url": "",
      "imageAlt": "Наклейки и этикетки"
    },
    {
      "id": "p5",
      "oldIndex": 4,
      "name": "Сканирование и переплёт",
      "detail": "Сканирование оригиналов, брошюровка и сборка на пружину. Уточните число листов, обложку для переплёта и желаемый формат цифровой копии.",
      "group": "Копицентр",
      "photo": "",
      "url": "https://nncopy.ru/pereplet/",
      "imageAlt": "Сканирование и переплёт"
    },
    {
      "id": "p6",
      "oldIndex": 5,
      "name": "Фотопечать",
      "detail": "Печать изображений и готовых макетов.",
      "group": "Печать",
      "photo": "",
      "url": "",
      "imageAlt": "Фотопечать"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "p2",
      "productLabel": "Плакаты, схемы и чертежи",
      "label": "А1 · Схема или чертёж на обычной бумаге",
      "quantity": null,
      "displayQuantity": "",
      "price": "150 ₽/лист",
      "rules": "Ориентиры за лист. Для рисунков и глянцевой фотобумаги действуют отдельные цены.",
      "url": "https://nncopy.ru/shema/",
      "amount": 150,
      "mode": "unit",
      "apply": true
    },
    {
      "id": "t2",
      "product": "p2",
      "productLabel": "Плакаты, схемы и чертежи",
      "label": "А2 · Схема или чертёж на обычной бумаге",
      "quantity": null,
      "displayQuantity": "",
      "price": "100 ₽/лист",
      "rules": "Ориентиры за лист. Для рисунков и глянцевой фотобумаги действуют отдельные цены.",
      "url": "https://nncopy.ru/shema/",
      "amount": 100,
      "mode": "unit",
      "apply": true
    },
    {
      "id": "t3",
      "product": "p2",
      "productLabel": "Плакаты, схемы и чертежи",
      "label": "А1 · Рисунки на обычной бумаге",
      "quantity": null,
      "displayQuantity": "",
      "price": "350 ₽/лист",
      "rules": "Ориентиры за лист. Для рисунков и глянцевой фотобумаги действуют отдельные цены.",
      "url": "https://nncopy.ru/shema/",
      "amount": 350,
      "mode": "unit",
      "apply": true
    },
    {
      "id": "t4",
      "product": "p2",
      "productLabel": "Плакаты, схемы и чертежи",
      "label": "А2 · Рисунки на обычной бумаге",
      "quantity": null,
      "displayQuantity": "",
      "price": "250 ₽/лист",
      "rules": "Ориентиры за лист. Для рисунков и глянцевой фотобумаги действуют отдельные цены.",
      "url": "https://nncopy.ru/shema/",
      "amount": 250,
      "mode": "unit",
      "apply": true
    },
    {
      "id": "t5",
      "product": "p2",
      "productLabel": "Плакаты, схемы и чертежи",
      "label": "А1 · Глянцевая фотобумага 170 г/м²",
      "quantity": null,
      "displayQuantity": "",
      "price": "670 ₽/лист",
      "rules": "Ориентиры за лист. Для рисунков и глянцевой фотобумаги действуют отдельные цены.",
      "url": "https://nncopy.ru/shema/",
      "amount": 670,
      "mode": "unit",
      "apply": true
    },
    {
      "id": "t6",
      "product": "p2",
      "productLabel": "Плакаты, схемы и чертежи",
      "label": "А2 · Глянцевая фотобумага 170 г/м²",
      "quantity": null,
      "displayQuantity": "",
      "price": "400 ₽/лист",
      "rules": "Ориентиры за лист. Для рисунков и глянцевой фотобумаги действуют отдельные цены.",
      "url": "https://nncopy.ru/shema/",
      "amount": 400,
      "mode": "unit",
      "apply": true
    }
  ],
  "fields": [
    {
      "key": "format",
      "label": "Формат",
      "type": "select",
      "options": [
        "А4",
        "А3",
        "А2",
        "А1",
        "Другой"
      ],
      "applies": null
    },
    {
      "key": "quantity",
      "label": "Число листов или экземпляров",
      "type": "number",
      "applies": null
    },
    {
      "key": "color",
      "label": "Тип печати",
      "type": "select",
      "options": [
        "Чёрно-белая",
        "Цветная",
        "Уточнить"
      ],
      "applies": null
    },
    {
      "key": "delivery",
      "label": "Получение",
      "type": "select",
      "options": [
        "Самовывоз",
        "Передать курьеру",
        "СДЭК"
      ],
      "applies": null
    },
    {
      "key": "notes",
      "label": "Бумага, масштаб и пожелания",
      "type": "textarea",
      "applies": null
    },
    {
      "key": "drawing_type",
      "label": "Что печатаем",
      "type": "select",
      "options": [
        "Схема или чертёж",
        "Рисунок на обычной бумаге",
        "Плакат на глянцевой фотобумаге"
      ],
      "applies": [
        1
      ]
    }
  ],
  "fileLabel": "Файл для печати"
};
