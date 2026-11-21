export const business = {
  "name": "АРТиК",
  "slug": "artik",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Фасадная вывеска",
      "detail": "Рекламная конструкция для входной группы или фасада.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Фасадная вывеска"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Световые объёмные буквы",
      "detail": "Логотип и отдельные буквы с подсветкой.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Световые объёмные буквы"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Неоновая вывеска",
      "detail": "Световая надпись для оформления пространства.",
      "group": "Вывески и конструкции",
      "photo": "",
      "url": "",
      "imageAlt": "Неоновая вывеска"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Проект и монтаж",
      "detail": "Дизайн, изготовление, согласование и установка вывески.",
      "group": "Монтаж и проектирование",
      "photo": "",
      "url": "",
      "imageAlt": "Проект и монтаж"
    },
    {
      "id": "p5",
      "oldIndex": null,
      "name": "Крышные установки",
      "detail": "Крупноформатные рекламные конструкции для размещения на кровле. Для запроса подготовьте адрес и снимок здания с уровня улицы.",
      "group": "Вывески",
      "photo": "assets/3b1e3ba7f1f5d58d999cd9b9.webp",
      "url": "https://artiknn.ru/portfolio/",
      "imageAlt": "Крышные установки"
    },
    {
      "id": "p6",
      "oldIndex": null,
      "name": "Брендирование транспорта",
      "detail": "Графика для автомобилей и транспорта с подготовкой к нанесению. Укажите модель и участки кузова.",
      "group": "Оформление",
      "photo": "",
      "url": "https://artiknn.ru/services/brendirovanie-transporta/",
      "imageAlt": "Брендирование транспорта"
    },
    {
      "id": "p7",
      "oldIndex": null,
      "name": "Печать на баннере",
      "detail": "Производство широкоформатного баннера. В заявке удобно зафиксировать габариты, количество и место установки.",
      "group": "Печать",
      "photo": "",
      "url": "https://artiknn.ru/services/pechat-na-bannere/",
      "imageAlt": "Печать на баннере"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "p3",
      "productLabel": "Неоновая вывеска",
      "label": "Гибкий неон",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 3 000 ₽ за вывеску",
      "rules": "Стартовый ориентир. На расчёт влияют габариты основы, длина неона и число элементов.",
      "url": "https://artiknn.ru/services/izgotovlenie-neonovykh-vyvesok/",
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
      "key": "address",
      "label": "Адрес объекта",
      "type": "text",
      "applies": null
    },
    {
      "key": "installation",
      "label": "Монтаж",
      "type": "select",
      "options": [
        "Нужен",
        "Своими силами",
        "Нужно обсудить"
      ],
      "applies": null
    },
    {
      "key": "approval",
      "label": "Согласование",
      "type": "select",
      "options": [
        "Нужно",
        "Не нужно",
        "Уточнить"
      ],
      "applies": null
    }
  ],
  "fileLabel": "Макет или фото объекта"
};
