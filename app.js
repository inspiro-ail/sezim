// ===== Disease Database =====
const diseasesDatabase = [
    {
        id: 1,
        name: 'ОРВИ (Острая Респираторная Вирусная Инфекция)',
        symptoms: ['кашель', 'горло', 'насморк', 'температура', 'озноб', 'слабость', 'выделения', 'чихание'],
        description: 'Вирусная инфекция дыхательных путей, одна из самых распространённых болезней.',
        details: {
            description: 'Острая респираторная вирусная инфекция - наиболее распространённое инфекционное заболевание. Вызывается разными вирусами.',
            causes: ['Вирусные инфекции', 'Снижение иммунитета', 'Переохлаждение', 'Контакт с больными'],
            symptoms_detail: ['Кашель', 'Боль в горле', 'Насморк и заложенность носа', 'Температура (37-39°C)', 'Озноб', 'Общая слабость', 'Выделения из носа'],
            treatment: ['Соблюдение постельного режима', 'Обильное питьё', 'Полоскание горла', 'Противовирусные препараты', 'Витамин C', 'Обращение к врачу при ухудшении'],
            prevention: ['Частое мытьё рук', 'Избегание контактов с больными', 'Укрепление иммунитета', 'Правильное питание', 'Прогулки на свежем воздухе']
        }
    },
    {
        id: 2,
        name: 'Грипп',
        symptoms: ['температура', 'озноб', 'головная боль', 'мышцы', 'усталость', 'кашель', 'горло', 'насморк'],
        description: 'Острое инфекционное заболевание дыхательных путей, вызываемое вирусом гриппа.',
        details: {
            description: 'Грипп - это инфекционное заболевание, вызываемое вирусом гриппа. Более опасен, чем ОРВИ.',
            causes: ['Вирус гриппа', 'Контакт с инфицированными людьми', 'Воздушно-капельный путь передачи'],
            symptoms_detail: ['Высокая температура (39-40°C)', 'Озноб', 'Сильная головная боль', 'Боль в мышцах и суставах', 'Усталость', 'Кашель', 'Боль в горле'],
            treatment: ['Постельный режим', 'Противовирусные препараты (тамифлю, риба­вирин)', 'Обильное питьё', 'Жаропонижающие средства', 'Медицинское наблюдение'],
            prevention: ['Вакцинация против гриппа', 'Избегание контактов с больными', 'Использование маски', 'Гигиена рук', 'Укрепление иммунитета']
        }
    },
    {
        id: 3,
        name: 'Бронхит',
        symptoms: ['кашель', 'выделения', 'одышка', 'грудь', 'температура', 'слабость', 'горло'],
        description: 'Воспаление слизистой оболочки бронхов, сопровождающееся сильным кашлем.',
        details: {
            description: 'Бронхит - воспаление бронхов. Может быть острым или хроническим.',
            causes: ['Вирусная инфекция', 'Бактериальная инфекция', 'Курение', 'Загрязнение воздуха', 'Холодный воздух'],
            symptoms_detail: ['Сильный кашель', 'Выделения мокроты', 'Одышка', 'Боль в груди при кашле', 'Температура', 'Слабость', 'Хрипы при дыхании'],
            treatment: ['Противокашлевые средства', 'Бронхолитики', 'Отхаркивающие препараты', 'Антибиотики (при бактериальной инфекции)', 'Обильное питьё', 'Обращение к пульмонологу'],
            prevention: ['Отказ от курения', 'Избегание загрязнённого воздуха', 'Своевременное лечение ОРВИ', 'Укрепление иммунитета']
        }
    },
    {
        id: 4,
        name: 'Пневмония',
        symptoms: ['кашель', 'высокая температура', 'одышка', 'грудь', 'слабость', 'озноб'],
        description: 'Острое воспаление лёгких, обычно вызываемое бактериями. Требует срочного лечения.',
        details: {
            description: 'Пневмония - опасное заболевание, требующее немедленного обращения к врачу. Смертельность 5-30%.',
            causes: ['Бактериальная инфекция', 'Вирусная инфекция', 'Осложнение ОРВИ', 'Ослабленный иммунитет'],
            symptoms_detail: ['Сильный кашель с мокротой', 'Высокая температура (38-40°C)', 'Одышка', 'Боль в груди', 'Общая слабость', 'Озноб', 'Учащённое дыхание'],
            treatment: ['СРОЧНОЕ ОБРАЩЕНИЕ К ВРАЧУ!', 'Антибиотики', 'Кислородная терапия', 'Противокашлевые средства', 'Жаропонижающие препараты', 'Стационарное лечение'],
            prevention: ['Вакцинация', 'Своевременное лечение ОРВИ', 'Здоровый образ жизни', 'Избегание переохлаждения']
        }
    },
    {
        id: 5,
        name: 'Ангина (Острый тонзиллит)',
        symptoms: ['горло', 'температура', 'боль', 'глотание', 'озноб', 'налёт', 'миндалины'],
        description: 'Острое воспаление нёбных миндалин, обычно вызываемое стрептококками.',
        details: {
            description: 'Ангина - это острое инфекционное заболевание лимфоидной ткани глотки.',
            causes: ['Стрептококковая инфекция', 'Вирусная инфекция', 'Переохлаждение', 'Ослабленный иммунитет'],
            symptoms_detail: ['Острая боль в горле', 'Высокая температура (38-40°C)', 'Затруднённое глотание', 'Озноб', 'Увеличение и покраснение миндалин', 'Белый налёт на миндалинах', 'Увеличение лимфоузлов'],
            treatment: ['Антибиотики (при бактериальной)', 'Полоскание горла раствором', 'Жаропонижающие средства', 'Противовоспалительные препараты', 'Обильное питьё', 'Мягкая пища'],
            prevention: ['Избегание переохлаждения', 'Гигиена полости рта', 'Укрепление иммунитета', 'Избегание контактов с больными']
        }
    },
    {
        id: 6,
        name: 'Гастрит',
        symptoms: ['боль в животе', 'тошнота', 'рвота', 'вздутие', 'изжога', 'аппетит'],
        description: 'Воспаление слизистой оболочки желудка, вызывающее боль в животе и нарушение пищеварения.',
        details: {
            description: 'Гастрит - воспаление слизистой оболочки желудка. Может быть острый или хронический.',
            causes: ['Helicobacter pylori', 'Стресс', 'Нерегулярное питание', 'Злоупотребление алкоголем', 'НПВС препараты'],
            symptoms_detail: ['Боль в верхней части живота', 'Тошнота', 'Рвота', 'Вздутие живота', 'Изжога', 'Потеря аппетита', 'Чёрный кал (при кровотечении)'],
            treatment: ['Антациды', 'Ингибиторы протонной помпы', 'Антибиотики (при helicobacter)', 'Диета', 'Избегание раздражающих продуктов', 'ФГДС при необходимости'],
            prevention: ['Правильное питание', 'Избегание стресса', 'Отказ от алкоголя', 'Ограничение кофе', 'Регулярные приёмы пищи']
        }
    },
    {
        id: 7,
        name: 'Аллергия',
        symptoms: ['чихание', 'зуд', 'сыпь', 'отёк', 'чешется', 'нос', 'глаза', 'кожа', 'дыхание'],
        description: 'Реакция организма на контакт с аллергеном, проявляющаяся различными симптомами.',
        details: {
            description: 'Аллергия - патологическая реакция иммунной системы на обычно безвредные вещества.',
            causes: ['Пыль', 'Пыльца растений', 'Шерсть животных', 'Пищевые аллергены', 'Лекарства', 'Плесень'],
            symptoms_detail: ['Чихание', 'Зуд в носу и глазах', 'Выделения из носа', 'Конъюнктивит', 'Сыпь на коже', 'Зуд кожи', 'Отёк', 'Затруднение дыхания (при тяжёлой форме)'],
            treatment: ['Антигистаминные препараты', 'Деконгестанты', 'Кортикостероидные спреи', 'Избегание аллергена', 'Супрастин, тавегил', 'При анафилаксии - адреналин'],
            prevention: ['Выявление аллергена', 'Избегание контакта с аллергеном', 'Уборка дома', 'Использование воздушных фильтров', 'Гипоаллергенная диета']
        }
    },
    {
        id: 8,
        name: 'Мигрень',
        symptoms: ['головная боль', 'тошнота', 'свет', 'звуки', 'пульсирующая', 'половине', 'глаза'],
        description: 'Неврологический синдром, характеризующийся повторяющимися приступами головной боли.',
        details: {
            description: 'Мигрень - это хронический неврологический синдром, наследственный характер.',
            causes: ['Наследственность', 'Гормональные изменения', 'Стресс', 'Провоцирующие продукты (кофе, шоколад)', 'Недостаток сна', 'Метеорологические факторы'],
            symptoms_detail: ['Приступообразная головная боль (4-72 часа)', 'Пульсирующий характер', 'Тошнота и рвота', 'Непереносимость света и звуков', 'Боль обычно в одной половине головы', 'Аура (нарушение зрения)', 'Усиление при физической нагрузке'],
            treatment: ['Трипланы (суматриптан)', 'НПВС препараты', 'Анальгетики', 'Профилактические препараты', 'Отдых в тёмном помещении', 'Обращение к неврологу'],
            prevention: ['Ведение дневника мигреней', 'Избегание триггеров', 'Регулярный сон', 'Снижение стресса', 'Физические упражнения', 'Правильное питание']
        }
    },
    {
        id: 9,
        name: 'Гипертония (Повышенное давление)',
        symptoms: ['давление', 'головная боль', 'головокружение', 'сердце', 'усталость', 'сердцебиение', 'затылок'],
        description: 'Стойкое повышение артериального давления выше 140/90 мм рт. ст.',
        details: {
            description: 'Гипертоническая болезнь - одно из самых распространённых сердечно-сосудистых заболеваний.',
            causes: ['Возраст', 'Наследственность', 'Избыточный вес', 'Высокое потребление соли', 'Стресс', 'Малоподвижный образ жизни'],
            symptoms_detail: ['Головная боль', 'Головокружение', 'Быстрое сердцебиение', 'Одышка', 'Боль в груди', 'Усталость', 'Снижение зрения (при осложнениях)'],
            treatment: ['Диуретики', 'Бета-блокаторы', 'Ингибиторы АПФ', 'Блокаторы кальция', 'Диета с низким содержанием соли', 'Регулярное измерение давления'],
            prevention: ['Ограничение соли в рационе', 'Физические упражнения', 'Снижение веса', 'Отказ от курения и алкоголя', 'Стресс-менеджмент', 'Регулярный контроль давления']
        }
    },
    {
        id: 10,
        name: 'Гипотония (Низкое давление)',
        symptoms: ['давление', 'слабость', 'головокружение', 'усталость', 'предобморок', 'черноеет', 'давление низкое'],
        description: 'Снижение артериального давления ниже 90/60 мм рт. ст., приводящее к недомоганию.',
        details: {
            description: 'Гипотония - состояние сниженного кровяного давления. Может быть первичной или вторичной.',
            causes: ['Наследственность', 'Вегетативные нарушения', 'Анемия', 'Эндокринные нарушения', 'Кровопотеря', 'Голодание', 'Обезвоживание'],
            symptoms_detail: ['Слабость и разбитость', 'Головокружение и предобморочное состояние', 'Потемнение в глазах при вставании', 'Пониженная работоспособность', 'Легкая утомляемость', 'Холодные конечности', 'Раздражительность'],
            treatment: ['Увеличение потребления жидкости', 'Увеличение потребления соли', 'Физические упражнения', 'Адаптогены (женьшень, элеутерококк)', 'Кофеиносодержащие напитки', 'Лечение основного заболевания'],
            prevention: ['Нормальный режим дня', 'Физическая активность', 'Правильное питание', 'Достаточное потребление жидкости', 'Обогащенная железом диета']
        }
    },
    {
        id: 11,
        name: 'Диабет',
        symptoms: ['жажда', 'частое мочеиспускание', 'слабость', 'вес', 'голод', 'зуд', 'раны'],
        description: 'Эндокринное заболевание, характеризующееся повышением уровня сахара в крови.',
        details: {
            description: 'Сахарный диабет - хроническое эндокринное заболевание. Два основных типа: 1 и 2.',
            causes: ['Генетическая предрасположенность', 'Избыточный вес', 'Нарушение иммунитета', 'Возраст', 'Вирусные инфекции', 'Стресс'],
            symptoms_detail: ['Постоянная жажда', 'Частое мочеиспускание', 'Общая слабость', 'Потеря веса', 'Усиленный аппетит', 'Зуд кожи', 'Плохое заживление ран', 'Нарушение зрения'],
            treatment: ['Инсулинотерапия (при диабете 1 типа)', 'Пероральные сахаропонижающие препараты (при диабете 2 типа)', 'Диета с ограничением углеводов', 'Физические упражнения', 'Регулярный контроль сахара', 'Наблюдение эндокринолога'],
            prevention: ['Здоровое питание', 'Физическая активность', 'Нормальный вес', 'Укрепление иммунитета', 'Избегание стресса', 'Регулярные обследования']
        }
    },
    {
        id: 12,
        name: 'Анемия',
        symptoms: ['усталость', 'слабость', 'бледность', 'дыхание', 'головокружение', 'холод', 'кожа'],
        description: 'Снижение количества красных кровяных телец или гемоглобина в крови.',
        details: {
            description: 'Анемия - состояние, при котором содержание гемоглобина в крови ниже нормы.',
            causes: ['Недостаток железа', 'Дефицит витамина B12 и фолиевой кислоты', 'Кровопотеря', 'Хронические заболевания', 'Наследственные нарушения'],
            symptoms_detail: ['Общая слабость и утомляемость', 'Бледность кожи и слизистых', 'Одышка при физической нагрузке', 'Головокружение', 'Холодные руки и ноги', 'Учащённое сердцебиение', 'Нарушение концентрации внимания'],
            treatment: ['Препараты железа', 'Витамин B12 и фолиевая кислота', 'Переливание крови (при тяжёлой форме)', 'Диета, богатая железом', 'Лечение основного заболевания', 'Анализ крови для контроля'],
            prevention: ['Сбалансированная диета', 'Включение в рацион продуктов с железом', 'Избегание кровопотерь', 'Избегание хронического стресса']
        }
    },
    {
        id: 13,
        name: 'Артрит',
        symptoms: ['суставы', 'боль', 'припухлость', 'скованность', 'воспаление', 'утро', 'движение'],
        description: 'Воспалительное заболевание суставов, приводящее к боли, отёку и ограничению подвижности.',
        details: {
            description: 'Артрит - группа воспалительных заболеваний суставов. Включает артрит ревматоидный и остеоартрит.',
            causes: ['Аутоиммунные нарушения', 'Возраст', 'Избыточный вес', 'Инфекции', 'Травмы', 'Генетическая предрасположенность'],
            symptoms_detail: ['Боль в суставах', 'Припухлость и отёк', 'Скованность, особенно по утрам', 'Ограничение подвижности', 'Воспаление', 'Повышение температуры суставов', 'Дискомфорт при движении'],
            treatment: ['НПВС препараты', 'Глюкокортикостероиды', 'Иммунодепрессанты', 'Физиотерапия', 'ЛФК', 'Обращение к ревматологу'],
            prevention: ['Поддержание здорового веса', 'Физическая активность', 'Избегание травм', 'Правильная осанка', 'Уменьшение нагрузки на суставы']
        }
    },
    {
        id: 14,
        name: 'Остеопороз',
        symptoms: ['кости', 'спина', 'боль', 'переломы', 'рост', 'горб', 'слабость'],
        description: 'Заболевание, при котором снижается минеральная плотность костей и увеличивается хрупкость.',
        details: {
            description: 'Остеопороз - заболевание, характеризующееся снижением плотности костей.',
            causes: ['Возраст', 'Менопауза', 'Дефицит кальция и витамина D', 'Малоподвижный образ жизни', 'Курение и алкоголь', 'Наследственность'],
            symptoms_detail: ['Боль в спине', 'Уменьшение роста', 'Сутулость', 'Частые переломы при незначительных травмах', 'Боль в костях', 'Слабость мышц'],
            treatment: ['Препараты кальция и витамина D', 'Бифосфонаты', 'Гормонозамещающая терапия', 'Физические упражнения', 'Правильное питание', 'DEXA-сканирование'],
            prevention: ['Достаточное потребление кальция', 'Витамин D и солнечный свет', 'Физические упражнения', 'Отказ от курения', 'Ограничение алкоголя', 'Правильная осанка']
        }
    },
    {
        id: 15,
        name: 'Дерматит',
        symptoms: ['кожа', 'зуд', 'сыпь', 'покраснение', 'воспаление', 'пузырьки', 'шелушение', 'раздражение'],
        description: 'Воспалительное заболевание кожи, проявляющееся зудом, сыпью и покраснением.',
        details: {
            description: 'Дерматит - острое или хроническое воспалительное заболевание кожи.',
            causes: ['Контактные аллергены', 'Раздражители', 'Микробную флору', 'Грибки', 'Вирусы', 'Солнечное излучение'],
            symptoms_detail: ['Зуд кожи', 'Покраснение', 'Сыпь или пузырьки', 'Шелушение кожи', 'Воспаление', 'В тяжёлых случаях - крупные волдыри', 'Мокнутие и корочки'],
            treatment: ['Местные кортикостероидные кремы', 'Антигистаминные препараты', 'Избегание раздражителя', 'Мягкие моющие средства', 'Увлажняющие кремы', 'Консультация дерматолога'],
            prevention: ['Избегание аллергенов', 'Защита кожи от раздражителей', 'Использование гипоаллергенной косметики', 'Аккуратная гигиена', 'Избегание чрезмерного трения кожи']
        }
    },
    {
        id: 16,
        name: 'Экзема',
        symptoms: ['кожа', 'зуд', 'воспаление', 'сухость', 'покраснение', 'трещины', 'волдыри'],
        description: 'Хроническое или острое воспалительное заболевание кожи с сильным зудом.',
        details: {
            description: 'Экзема - это острое или хроническое аллергическое воспалительное заболевание кожи.',
            causes: ['Генетическая предрасположенность', 'Аллергены', 'Раздражители', 'Стресс', 'Нарушение иммунитета', 'Климатические факторы'],
            symptoms_detail: ['Интенсивный зуд', 'Сухость кожи', 'Покраснение и воспаление', 'Мелкие везикулы (волдыри)', 'Трещины и корочки', 'В острой стадии - мокнутие', 'Вторичное инфицирование при расчёсывании'],
            treatment: ['Местные кортикостероиды', 'Противозудные препараты', 'Антигистаминные средства', 'Увлажняющие кремы', 'Избегание триггеров', 'Фототерапия'],
            prevention: ['Увлажнение кожи', 'Избегание раздражителей', 'Мягкая одежда из натуральных материалов', 'Избегание стресса', 'Правильная гигиена']
        }
    },
    {
        id: 17,
        name: 'Острый гастроэнтерит',
        symptoms: ['рвота', 'диарея', 'боль в животе', 'тошнота', 'температура', 'слабость', 'обезвоживание'],
        description: 'Острое воспаление слизистой оболочки желудка и тонкого кишечника.',
        details: {
            description: 'Гастроэнтерит - инфекционное заболевание ЖКТ, часто называемое пищевым отравлением.',
            causes: ['Вирусные инфекции', 'Бактериальные инфекции', 'Загрязненная пища или вода', 'Токсины', 'Недоваренная пища'],
            symptoms_detail: ['Тошнота и рвота', 'Диарея', 'Боли в животе и спазмы', 'Лихорадка', 'Общая слабость', 'Обезвоживание', 'Потеря аппетита'],
            treatment: ['Оральная регидратация (электролиты)', 'Противорвотные препараты', 'Антидиарейные средства', 'Легкая диета', 'Обильное питьё', 'При необходимости - госпитализация'],
            prevention: ['Правильное хранение продуктов', 'Тщательная внешняя обработка продуктов', 'Мытье рук перед едой', 'Избегание уличной еды', 'Кипячённая вода в путешествиях']
        }
    },
    {
        id: 18,
        name: 'Синусит',
        symptoms: ['нос', 'насморк', 'выделения', 'головная боль', 'заложенность', 'давление', 'лоб'],
        description: 'Воспаление слизистой оболочки придаточных пазух носа.',
        details: {
            description: 'Синусит - воспаление парных придаточных пазух носа: верхнечелюстных, лобных, височных.',
            causes: ['Вирусная инфекция', 'Бактериальная инфекция', 'Аллергия', 'Искривление перегородки', 'Полипы', 'Травма'],
            symptoms_detail: ['Заложенность носа', 'Слизис или гнойные выделения из носа', 'Давление и боль в области пазух', 'Головная боль, особенно в области лба', 'Постоянный кашель', 'Снижение обоняния', 'Осиплость голоса'],
            treatment: ['Деконгестанты (сосудосуживающие капли)', 'Солевые растворы для промывания', 'Антигистаминные препараты (при аллергии)', 'Антибиотики (при бактериальной инфекции)', 'Кортикостероидные спреи', 'МСКТ при необходимости'],
            prevention: ['Своевременное лечение ОРВИ', 'Промывание носа', 'Избегание переохлаждения', 'Гигиена носовой полости', 'Укрепление иммунитета']
        }
    },
    {
        id: 19,
        name: 'Конъюнктивит',
        symptoms: ['глаза', 'покраснение', 'зуд', 'выделения', 'слез', 'светобоязнь', 'отек'],
        description: 'Воспаление конъюнктивы глаза, обычно вирусного или бактериального происхождения.',
        details: {
            description: 'Конъюнктивит - воспаление слизистой оболочки глаза. Может быть различного происхождения.',
            causes: ['Вирусная инфекция', 'Бактериальная инфекция', 'Аллергия', 'Раздражающие вещества', 'Контактные линзы', 'Грибки'],
            symptoms_detail: ['Покраснение белков глаз', 'Зуд и жжение', 'Выделения (прозрачные при вирусном, гнойные при бактериальном)', 'Слезотечение', 'Отёк век', 'Светобоязнь', 'Ощущение инородного тела'],
            treatment: ['Антибактериальные капли (при бактериальном)', 'Противовирусные капли', 'Антигистаминные препараты (при аллергическом)', 'Холодные компрессы', 'Гигиена глаз', 'Консультация офтальмолога'],
            prevention: ['Гигиена рук перед касанием глаз', 'Личная гигиена полотенец и подушек', 'Правильная обработка контактных линз', 'Избегание контакта с больными', 'Защита от раздражающих веществ']
        }
    },
    {
        id: 20,
        name: 'Отит (Воспаление уха)',
        symptoms: ['ухо', 'боль в ухе', 'выделения', 'слух', 'заложенность', 'шум', 'температура'],
        description: 'Острое или хроническое воспаление среднего уха, вызывающее боль и нарушение слуха.',
        details: {
            description: 'Отит - воспаление ушной раковины, слухового прохода или среднего уха.',
            causes: ['Вирусная инфекция', 'Бактериальная инфекция', 'Вода в ухе', 'Травма уха', 'Авитаминоз', 'Переохлаждение'],
            symptoms_detail: ['Боль в ухе (часто острая)', 'Выделения из уха', 'Нарушение слуха', 'Заложенность в ухе', 'Шум в ухе (тиннитус)', 'Температура (при инфекции)', 'Отёк области уха'],
            treatment: ['Противовоспалительные капли', 'Обезболивающие препараты', 'Антибиотики (при бактериальной инфекции)', 'Компрессы на ухо', 'Продувание евстахиевой трубы', 'Консультация ЛОРа'],
            prevention: ['Защита ушей от воды', 'Осторожное очищение ушей', 'Лечение ОРВИ и синусита', 'Профилактика переохлаждения уха']
        }
    }
];

// ===== App State =====
let selectedSymptoms = [];
let allSymptoms = [];
let openaiApiKey = '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';

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    initializeAllSymptoms();
    setupEventListeners();
    checkApiKey();
});

// ===== Check and Setup API Key =====
function checkApiKey() {
    // API ключ установлен по умолчанию
    console.log('✅ OpenAI API ключ активирован для функций ИИ');
}

// ===== API Key Management =====
function setupApiKeyHandlers() {
    // API ключ установлен по умолчанию, ничего не требуется
}

// ===== Initialize All Symptoms =====
function initializeAllSymptoms() {
    const symptomSet = new Set();
    diseasesDatabase.forEach(disease => {
        disease.symptoms.forEach(symptom => {
            symptomSet.add(symptom);
        });
    });
    allSymptoms = Array.from(symptomSet).sort();
}

// ===== Setup Event Listeners =====
function setupEventListeners() {
    const symptomInput = document.getElementById('symptomInput');
    const searchBtn = document.getElementById('searchBtn');
    const modal = document.getElementById('diseaseModal');
    const closeModal = document.querySelector('.close-modal');

    // Setup API Key handlers
    setupApiKeyHandlers();

    // Setup Tab switching
    setupTabSwitching();

    // Setup AI features
    setupAIFeatures();

    // Input autocomplete
    symptomInput.addEventListener('input', handleAutocomplete);
    symptomInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    });

    // Search button
    searchBtn.addEventListener('click', handleSearchClick);

    // Modal close
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

// ===== Tab Switching =====
function setupTabSwitching() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// ===== AI Features Setup =====
function setupAIFeatures() {
    const photoUpload = document.getElementById('photoUpload');
    const fileInputLabel = document.querySelector('.file-input-label');
    const analyzeBtn = document.getElementById('analyzeBtn');

    if (!photoUpload || !fileInputLabel || !analyzeBtn) {
        console.warn('AI features elements not found');
        return;
    }

    // Click to upload
    fileInputLabel.addEventListener('click', () => {
        photoUpload.click();
    });

    // Drag and drop
    fileInputLabel.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileInputLabel.style.borderColor = 'white';
        fileInputLabel.style.background = 'rgba(255, 255, 255, 0.15)';
    });

    fileInputLabel.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileInputLabel.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        fileInputLabel.style.background = 'rgba(255, 255, 255, 0.05)';
    });

    fileInputLabel.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileInputLabel.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        fileInputLabel.style.background = 'rgba(255, 255, 255, 0.05)';
        
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            // Create a new DataTransfer to set files
            const dt = new DataTransfer();
            dt.items.add(files[0]);
            photoUpload.files = dt.files;
            handlePhotoUpload();
        }
    });

    // File input change
    photoUpload.addEventListener('change', handlePhotoUpload);

    // Analyze button
    analyzeBtn.addEventListener('click', analyzeWithAI);
}

// ===== Handle Photo Upload =====
function handlePhotoUpload() {
    const photoUpload = document.getElementById('photoUpload');
    const photoPreview = document.getElementById('photoPreview');

    if (!photoUpload) return;

    if (photoUpload.files && photoUpload.files.length > 0) {
        const file = photoUpload.files[0];

        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Пожалуйста, выберите изображение');
            photoUpload.value = '';
            return;
        }

        // Validate file size (max 20MB)
        if (file.size > 20 * 1024 * 1024) {
            alert('Размер файла не должен превышать 20MB');
            photoUpload.value = '';
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                photoPreview.src = e.target.result;
                photoPreview.style.display = 'block';
            } catch (error) {
                console.error('Error displaying image:', error);
                alert('Ошибка при загрузке изображения');
            }
        };

        reader.onerror = () => {
            alert('Ошибка при чтении файла');
            photoUpload.value = '';
        };

        reader.readAsDataURL(file);
    }
}

// ===== Analyze with AI =====
async function analyzeWithAI() {
    if (!openaiApiKey || openaiApiKey.trim() === '') {
        alert('⚠️ OpenAI API ключ не установлен');
        return;
    }

    const photoUpload = document.getElementById('photoUpload');
    const description = document.getElementById('aiDescription')?.value.trim() || '';

    if (!photoUpload?.files?.length && !description) {
        alert('Загрузите фото и/или введите описание симптомов');
        return;
    }

    const loading = document.getElementById('loading');
    const resultsGrid = document.getElementById('resultsGrid');
    const noResults = document.getElementById('noResults');

    loading.classList.add('active');
    resultsGrid.innerHTML = '';
    noResults.classList.remove('active');

    try {
        let aiResponse = '';

        // Process photo if uploaded
        if (photoUpload?.files?.length > 0) {
            try {
                const photoBase64 = await fileToBase64(photoUpload.files[0]);
                aiResponse = await analyzePhotoWithOpenAI(photoBase64, description);
            } catch (photoError) {
                console.warn('Photo analysis failed, trying description only:', photoError);
                if (description) {
                    aiResponse = await analyzeWithChatGPT(description);
                } else {
                    throw new Error('Не удалось обработать фото. Пожалуйста, добавьте описание симптомов.');
                }
            }
        } else if (description) {
            aiResponse = await analyzeWithChatGPT(description);
        } else {
            throw new Error('Пожалуйста, загрузите фото или введите описание');
        }

        // Extract symptoms from AI response
        const extractedSymptoms = extractSymptomsFromAI(aiResponse);
        
        if (extractedSymptoms.length === 0) {
            throw new Error('ИИ не смог извлечь симптомы. Попробуйте другое описание.');
        }

        selectedSymptoms = extractedSymptoms;
        renderSymptomTags();

        // Show results
        loading.classList.remove('active');
        const matches = calculateMatches();

        if (matches.length === 0) {
            noResults.classList.add('active');
        } else {
            noResults.classList.remove('active');
            renderResults(matches);
        }

    } catch (error) {
        loading.classList.remove('active');
        console.error('Analysis Error:', error);
        alert('❌ Ошибка при анализе: ' + error.message);
    }
}

// ===== File to Base64 =====
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}

// ===== Analyze Photo with OpenAI =====
async function analyzePhotoWithOpenAI(photoBase64, description) {
    const userPrompt = `Ты опытный врач-диагност. Анализируя фото и описание, извлеки ВСЕ возможные симптомы. 
Ответь ТОЛЬКО списком симптомов через запятую, без пояснений.

${description ? `Описание пациента: ${description}` : 'Проанализируй фото и определи возможные симптомы.'}

Примеры ответа: кашель, боль в горле, температура, насморк`;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4-turbo',
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'image_url',
                                image_url: {
                                    url: photoBase64
                                }
                            },
                            {
                                type: 'text',
                                text: userPrompt
                            }
                        ]
                    }
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.warn('Фото анализ недоступен, используется описание:', error.message);
        // Fallback to ChatGPT API
        return await analyzeWithChatGPT(description);
    }
}

// ===== Analyze with ChatGPT (Fallback) =====
async function analyzeWithChatGPT(description) {
    if (!description || description.trim().length === 0) {
        throw new Error('Пожалуйста, введите описание симптомов');
    }

    const systemPrompt = `Ты опытный врач-диагност. Анализируя описание симптомов пациента, 
    извлеки ВСЕ возможные симптомы и признаки заболевания. 
    Ответь ТОЛЬКО списком симптомов на русском, разделенных запятыми, без пояснений.
    Примеры ответа: кашель, высокая температура, боль в горле, насморк, озноб`;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4-turbo',
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: `Проанализируй следующее описание симптомов и укажи все возможные симптомы через запятую:\n\n${description}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMsg = errorData.error?.message || `API error: ${response.status}`;
            throw new Error(errorMsg);
        }

        const data = await response.json();
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            throw new Error('Неожиданный ответ от API');
        }
        
        return data.choices[0].message.content;
    } catch (error) {
        console.error('ChatGPT API Error:', error);
        throw new Error('Ошибка при обращении к OpenAI API: ' + error.message);
    }
}

// ===== Extract Symptoms from AI Response =====
function extractSymptomsFromAI(aiResponse) {
    if (!aiResponse || typeof aiResponse !== 'string') {
        console.warn('Invalid AI response:', aiResponse);
        return [];
    }

    // Split by comma, newline, and clean up
    const raw = aiResponse
        .split(/[,\n;]/g)
        .map(s => s.trim().toLowerCase())
        .filter(s => s.length > 2); // Only keep strings with 3+ characters

    // Filter symptoms that exist in or match our database
    const validSymptoms = [];
    
    raw.forEach(symptom => {
        // Exact match
        const exactMatch = allSymptoms.find(s => s.toLowerCase() === symptom);
        if (exactMatch) {
            validSymptoms.push(exactMatch);
            return;
        }

        // Partial match - find the best match
        const partialMatch = allSymptoms.find(s => 
            s.toLowerCase().includes(symptom) || symptom.includes(s.toLowerCase())
        );
        if (partialMatch) {
            validSymptoms.push(partialMatch);
            return;
        }

        // If no match in database, still add it (might be a valid symptom)
        validSymptoms.push(symptom);
    });

    // Remove duplicates
    return [...new Set(validSymptoms)].slice(0, 10);
}

// ===== Autocomplete Handler =====
function handleAutocomplete(e) {
    const input = e.target.value.toLowerCase();
    const autocompleteList = document.getElementById('autocompleteList');

    if (!input) {
        autocompleteList.classList.remove('active');
        return;
    }

    const filtered = allSymptoms.filter(symptom => 
        symptom.toLowerCase().includes(input) && !selectedSymptoms.includes(symptom)
    );

    if (filtered.length === 0) {
        autocompleteList.classList.remove('active');
        return;
    }

    autocompleteList.innerHTML = filtered.slice(0, 8).map(symptom => 
        `<li class="autocomplete-item" onclick="selectSymptomFromAutoComplete('${symptom}')">${symptom}</li>`
    ).join('');

    autocompleteList.classList.add('active');
}

// ===== Select Symptom from Autocomplete =====
function selectSymptomFromAutoComplete(symptom) {
    if (!selectedSymptoms.includes(symptom)) {
        selectedSymptoms.push(symptom);
    }
    document.getElementById('symptomInput').value = '';
    document.getElementById('autocompleteList').classList.remove('active');
    renderSymptomTags();
}

// ===== Render Symptom Tags =====
function renderSymptomTags() {
    const container = document.getElementById('symptomsContainer');
    
    if (selectedSymptoms.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = selectedSymptoms.map((symptom, index) => `
        <div class="symptom-tag">
            <span>${symptom}</span>
            <span class="remove-symptom" onclick="removeSymptom(${index})">✕</span>
        </div>
    `).join('');
}

// ===== Remove Symptom =====
function removeSymptom(index) {
    selectedSymptoms.splice(index, 1);
    renderSymptomTags();
    document.getElementById('resultsGrid').innerHTML = '';
    document.getElementById('noResults').classList.remove('active');
}

// ===== Handle Search Click =====
function handleSearchClick() {
    if (selectedSymptoms.length === 0) {
        alert('Пожалуйста, выберите хотя бы один симптом');
        return;
    }

    performSearch();
}

// ===== Perform Search =====
function performSearch() {
    const loading = document.getElementById('loading');
    const resultsGrid = document.getElementById('resultsGrid');
    const noResults = document.getElementById('noResults');

    // Show loading
    loading.classList.add('active');
    resultsGrid.innerHTML = '';
    noResults.classList.remove('active');

    // Simulate processing delay
    setTimeout(() => {
        loading.classList.remove('active');

        // Calculate matches
        const matches = calculateMatches();

        if (matches.length === 0) {
            noResults.classList.add('active');
            resultsGrid.innerHTML = '';
        } else {
            noResults.classList.remove('active');
            renderResults(matches);
        }
    }, 800);
}

// ===== Calculate Matches =====
function calculateMatches() {
    const matches = diseasesDatabase
        .map(disease => {
            let matchedCount = 0;
            selectedSymptoms.forEach(symptom => {
                if (disease.symptoms.some(s => s.toLowerCase().includes(symptom.toLowerCase()))) {
                    matchedCount++;
                }
            });

            if (matchedCount > 0) {
                const score = Math.round((matchedCount / selectedSymptoms.length) * 100);
                return {
                    ...disease,
                    score: score,
                    matchedCount: matchedCount
                };
            }
            return null;
        })
        .filter(d => d !== null)
        .sort((a, b) => b.score - a.score);

    return matches;
}

// ===== Render Results =====
function renderResults(matches) {
    const resultsGrid = document.getElementById('resultsGrid');
    
    resultsGrid.innerHTML = matches.map(disease => `
        <div class="disease-card">
            <div class="disease-title">${disease.name}</div>
            <div class="disease-score">Совпадение: ${disease.score}%</div>
            <div class="disease-description">${disease.description}</div>
            
            <div class="disease-symptoms">
                <div class="disease-symptoms-label">Совпадённые симптомы:</div>
                <div class="symptoms-list">
                    ${selectedSymptoms
                        .filter(symptom => disease.symptoms.some(s => s.toLowerCase().includes(symptom.toLowerCase())))
                        .map(symptom => `<span class="symptom-badge">${symptom}</span>`)
                        .join('')}
                </div>
            </div>

            <div class="disease-actions">
                <button class="btn btn-primary" onclick="showDiseaseDetails(${disease.id})">
                    <i class="fas fa-info-circle"></i> Подробнее
                </button>
                <button class="btn btn-secondary" onclick="addMoreSymptoms()">
                    <i class="fas fa-plus"></i> Ещё симптомы
                </button>
            </div>
        </div>
    `).join('');
}

// ===== Show Disease Details =====
function showDiseaseDetails(diseaseId) {
    const disease = diseasesDatabase.find(d => d.id === diseaseId);
    if (!disease) return;

    const modal = document.getElementById('diseaseModal');
    const modalBody = document.getElementById('modalBody');

    const html = `
        <h2 class="modal-title">${disease.name}</h2>

        <div class="modal-section">
            <h3>Описание</h3>
            <p>${disease.details.description}</p>
        </div>

        <div class="modal-section">
            <h3>Причины возникновения</h3>
            <ul>
                ${disease.details.causes.map(cause => `<li>${cause}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h3>Симптомы</h3>
            <ul>
                ${disease.details.symptoms_detail.map(symptom => `<li>${symptom}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h3>Лечение</h3>
            <ul>
                ${disease.details.treatment.map(treatment => `<li>${treatment}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h3>Профилактика</h3>
            <ul>
                ${disease.details.prevention.map(prev => `<li>${prev}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section" style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 2rem;">
            <p style="color: #856404; margin: 0;"><strong>⚠️ Важно:</strong> Эта информация исключительно информационного характера. Для точного диагноза и лечения обратитесь к квалифицированному врачу.</p>
        </div>
    `;

    modalBody.innerHTML = html;
    modal.classList.add('show');
}

// ===== Add More Symptoms =====
function addMoreSymptoms() {
    document.getElementById('symptomInput').focus();
    document.getElementById('symptomInput').select();
}

// ===== Smooth Scroll Setup =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
