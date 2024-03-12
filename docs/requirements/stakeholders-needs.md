# Запити зацікавлених осіб

## Вступ

Даний документ містить інформацію, яка призначена для тих, хто цікавиться участю у розробці чи використанні даного продукту. Він включає короткий опис продукту, список вимог, опис цільової аудиторії та пояснення термінів, пов'язаних з проєктом. Це ключовий документ для всіх учасників бізнес-процесу, який сприяє покращенню продукту як для користувачів, так і для розробників.

### Мета

Цей документ має на меті відображення сутності проекту та його значення для подальшої розробки та втілення в життя системи управління відкритими даними. Система повинна бути створена для забезпечення доступності, прозорості та використання публічних даних з метою сприяння інноваціям, розвитку відкритого суспільства та покращення якості життя громадян. Шлях до досягнення цих цілей полягає в установленні конкретних цілей, які дозволять розробити систему управління відкритими даними з зручною функціональністю, приносячи найбільшу можливу користь як користувачам, так і розробникам.

### Контекст

Проведено аналіз потенційних сценаріїв взаємодії між різними групами зацікавлених осіб, таких як відвідувачі, користувачі, адміністратори та сама система проекту. Визначено загальну характеристику категорій користувачів та з'ясовано вплив кожної особи на інших учасників або на систему в цілому. На завершення наведено технічні вимоги, потреби та очікування до програмного продукту.

### Основні визначення та скорочення

1.	[**Зацікавленна сторона**](https://en.wikipedia.org/wiki/Stakeholder_(corporate)) - Особа чи організація, яка може впливати, зазнавати впливу або відчувати вплив рішення чи діяльності
2.	[**Система**](https://en.wikipedia.org/wiki/System) - це група взаємодіючих або взаємопов’язаних елементів, які діють відповідно до набору правил, утворюючи єдине ціле.
3.	[**Відвідувач**](https://en.wikipedia.org/wiki/User_(computing))- зацікавлена сторона, яка не має власного облікового запису в мережі.
4.	[**Користувач**](https://en.wikipedia.org/wiki/User_(computing)) - зацікавлена сторона, що має власний обліковий запис в мережі.
5.	[**Адміністратор**](https://en.wikipedia.org/wiki/Database_administrator) - особа, яка використовує спеціалізоване програмне забезпечення для зберігання та організації даних. Роль може включати планування потужностей, установку, конфігурацію, проектування бази даних, міграцію, моніторинг продуктивності, безпеку, усунення несправностей, а також резервне копіювання та відновлення даних.
6.	[**FURPS**](https://en.wikipedia.org/wiki/FURPS)(Functionality, Usability, Reliability, Perfomance, Supportability) - це акронім, що представляє модель для класифікації атрибутів якості програмного забезпечення:
    - Функціональність – можливості (розмір і загальність набору функцій), багаторазове використання (сумісність, сумісність, портативність), безпека (безпека та можливість використання)
    - Зручність використання (UX) - людський фактор, естетика, узгодженість, документація, чуйність
    - Надійність - Доступність (Частота відмов (надійність/Довговічність/Стійкість), ступінь відмов і тривалість часу (відновлюваність/живучість)), передбачуваність (стабільність), точність (частота/серйозність помилок)
    - Продуктивність - швидкість, ефективність, споживання ресурсів (потужність, оперативна пам'ять, кеш-пам'ять тощо), пропускна здатність, ємність, масштабованість
    - Можливість підтримки - можливість тестування, гнучкість (можливість модифікації, конфігурації, адаптованості, розширюваності, модульності), можливість встановлення, локалізація


<!-- ### Посилання

_[Розділ містить повний список всіх документів, про які згадується.]_ -->

## Короткий зміст

- [Характеристика ділових процесів](#характеристика-ділових-процесів)
  - [ВІДВІДУВАЧ](#відвідувач)
  - [КОРИСТУВАЧ](#користувач)
  - [АДМІНСТРАТОР](#адмінстратор)
- [Короткий огляд продукту](#короткий-огляд-продукту)
- [Функціональність](#функціональність)
- [Практичність](#Практичність)
- [Надійність](#Надійність)
- [Продуктивність](#Продуктивність)
- [Експлуатаційна придатність](#Експлуатаційна-придатність)

## Характеристика ділових процесів

### **ВІДВІДУВАЧ**

| **ID:**                | GuestSearch                                                                                      |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Відвідувач отримує інформацію або дані у системі через пошуковий бар |
| **УЧАСНИКИ:**          | Відвідувач, Система |
| **ПЕРЕДУМОВИ:**        | Відвідувач не авторизований |
| **РЕЗУЛЬТАТ:**         | Знаходження відповідної інформації та даних у системі |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Введені пошукові дані не відповідають з наявними у системі - DataNotFinded |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Відвідувач вибирає опцію "Пошук даних" на головній сторінці сайту.<br/> 2. Відвідувач вводить відповідну інформацію для пошуку.<br/> 3. Система перевіряє наявність відповідних даних у базі даних, які відповідають введеній інформації. <br/> 4. Система перенаправляє гостя на відповідну сторінку з даними. |

| **ID:**                | GuestDownload                                                                                      |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Відвідувач завантажує інформацію або дані з системи |
| **УЧАСНИКИ:**          | Відвідувач, Система |
| **ПЕРЕДУМОВИ:**        | Відвідувач не авторизований |
| **РЕЗУЛЬТАТ:**         | Завантаження відповідної інформації та даних з системи |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Завантажуваного файлу не існує в системі - DataFormatNotFinded |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Відвідувач вибирає опцію "Завантаження" на сторінці з  відповідними даними.<br/> 2. Система шукає відповідний файл у базі даних.<br/> 3. Система передає відповідний файл корситувачу <br/> 4. Система сповіщає про успішну передачу файлу. |

### **КОРИСТУВАЧ**

| **ID:**                | UserRegistration                                                                                 |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Реєстрація акаунту користувача у системі | 
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач не має облікового запису у системі |
| **РЕЗУЛЬТАТ:**         | Успішна реєстрація облікового запису користувачем у системі |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Пусті для обов'язкового заповнення рядки для реєстрації у системі - UnfilledRegistrationRows<br/> Введене ім'я користувачем не відповідає умовам реєстрації - IncorrectUserName<br/> Введена електронна пошта користувача не відповідає умовам реєстрації - IncorrectUserEmail<br/> Введений пароль користувачем не відповідає умовам реєстрації - IncorrectPassword|
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Користувач вибирає опцію "Реєстрація" на головній сторінці веб-сайту. <br/> 2. Система перенаправляє користувача на сторінку з формою реєстрації.<br/> 3. Користувач заповнює обов'язкові поля реєстраційної форми, такі як ім'я, електронна пошта, пароль та надсилає форму реєстрації до системи.<br/> 4. Система перевіряє, чи введені дані є унікальними та відповідають умовам реєстрації, чи не існує облікового запису з такою самою електронною поштою чи ім'ям користувача.<br/> 5. Система додає введені дані користувачем у базу даних, таким чином створюючи аккаунт користувача у системі.<br/> 6. Система повідомляє користувача про успішну реєстрацію.<br/> 7. Система перенаправляє користувача на сторінку створеного облікового запису. |

| **ID:**                | UserLogin                                                                                        |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Вхід користувачем до свого акаунту | 
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач має облікового запису у системі |
| **РЕЗУЛЬТАТ:**         | Успішний вхід у обліковий запис користувача |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Пусті для обов'язкового заповнення рядки для входу у систему - UnfilledLoginRows<br/> Введене ім'я користувачем не знайдено у базі даних - NotFoundUserName<br/> Введена електронна пошта користувачем не знайдена у базі даних - NotFoundUserEmail<br/> Введений пароль користувачем невірний - IncorrectPassword|
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Користувач вибирає опцію "Увійти" на головній сторінці веб-сайту.<br/> 2. Система перенаправляє користувача на сторінку входу.<br/> 3. Користувач вводить своє ім'я користувача (логін) або електронну пошту та пароль у відповідні поля та натискає кнопку "Увійти".<br/> 4. Система перевіряє введені дані на відповідність існуючим обліковим записам у базі даних.<br/> 5. Якщо введені дані коректні та відповідають обліковому запису, система надає доступ користувачеві до його облікового запису.<br/> 6. Система перенаправляє користувача на особистий кабінет.<br/> 7. Якщо введені дані некоректні або не відповідають обліковому запису, система повідомляє користувача про помилку та надає можливість спробувати знову. |

| **ID:**                | UserExit                                                                                         |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Вихід користувачем до свого акаунту | 
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач увійшов з облікового запису у систему |
| **РЕЗУЛЬТАТ:**         | Успішний вихід у обліковий запис користувача |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Немає|
| **ОСНОВНИЙ СЦЕНАРІЙ:** |1. Користувач обирає опцію "Вийти" на головній сторінці веб-сайту.<br/> 2. Система перенаправляє користувача на головну сторінку |

| **ID:**                | UserUpload                                                                                         |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Завантаження даних користувачем у систему | 
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Відкрита система управління даними дозволяє користувачам завантажувати нові набори даних. |
| **РЕЗУЛЬТАТ:**         | Користувач успішно завантажив та опублікувала нові дані |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Неправильний формат файлу - IncorrectFileFormat.<br/>Відсутні дані - MissingData|
| **ОСНОВНИЙ СЦЕНАРІЙ:** |1. Користувач переходить на сторінку або розділ веб-сайту, де можна завантажити нові дані.<br/> 2. Користувач натискає кнопку "Завантажити нові дані", щоб розпочати процес.<br/>3. Відкривається вікно з формою, де користувач може вибрати файл з даними зі свого комп'ютера або іншого пристрою.<br/> 4. Система перевіряє формат файлу та структуру даних. Якщо дані коректні, система продовжує. У разі помилок система повідомляє користувачу про них та пропонує способи виправлення.<br/>5. Користувач переглядає параметри завантаження та натискає кнопку "ОК" для підтвердження.<br/>6. Система обробляє завантажені дані та зберігає їх у системній базі даних.<br/>7. Система повідомляє користувача про успішне завантаження та надає доступ до розділу, де можна переглянути нові дані.<br/>|

| **ID:**                | UserEditSuggestions                                                                              |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Пропонування оновлення даних користувачем у систему | 
| **УЧАСНИКИ:**          | Користувач, Адміністратор, Система |
| **ПЕРЕДУМОВИ:**        | Відкрита система управління даними дозволяє користувачам пропонувати оновлення існуючих наборів даних. |
| **РЕЗУЛЬТАТ:**         | Пропозиція користувача на оновлення даних успішно надійшла до системи |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Відсутність змін у даних - NoChangedDate<br/> Надсилання пустих даних - EmptyDate |
| **ОСНОВНИЙ СЦЕНАРІЙ:** |1. Користувач переходить на сторінку або розділ веб-сайту, де можна оновити дані.<br/> 2. Користувач натискає кнопку "Запропонувати оновлення", щоб розпочати процес.<br/>3. Відкривається вікно з формою, де користувач може редагувати дані.<br/> 4. Система перевіряє формат файлу та структуру даних. Якщо дані коректні, система продовжує. У разі помилок система повідомляє користувачу про них та пропонує способи виправлення.<br/>5. Користувач переглядає параметри оновлення та натискає кнопку "ОК" для підтвердження.<br/>6. Система надсилає пропозицію оновлення даних до адмінастраторів.<br/>|

### **АДМІНСТРАТОР**

| **ID:**                | AdminLogin                                                                                       |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Вхід адміністратора до свого акаунту | 
| **УЧАСНИКИ:**          | Aдміністратор, Система |
| **ПЕРЕДУМОВИ:**        | Адміністратор має обліковий запис у системі |
| **РЕЗУЛЬТАТ:**         | Успішний вхід у обліковий запис адміністратора |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Пусті для обов'язкового заповнення рядки для входу у систему - UnfilledLoginRows<br/> Введене ім'я адміністратор не знайдено у базі даних - NotFoundAdminName<br/> Введена електронна пошта адміністратора не знайдена у базі даних - NotFoundAdminEmail<br/> Введений пароль адміністратором невірний - IncorrectPassword|
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Адміністратор вибирає опцію "Увійти" на головній сторінці веб-сайту.<br/> 2. Система перенаправляє користувача на сторінку входу.<br/> 3. Адміністратор вводить своє ім'я користувача (логін) або електронну пошту та пароль у відповідні поля та натискає кнопку "Увійти".<br/> 4. Система перевіряє введені дані на відповідність існуючим адміністраторам у базі даних.<br/> 5. Якщо введені дані коректні та відповідають обліковому запису, система надає доступ адміністратору до його облікового запису.<br/> 6. Система перенаправляє адміністратора на особистий кабінет.<br/> 7. Якщо введені дані некоректні або не відповідають обліковому запису, система повідомляє користувача про помилку та надає можливість спробувати знову. |

| **ID:**                | AdminExit                                                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **НАЗВА:**             | Вихід адміністратора з свого акаунту                                                                                                |
| **УЧАСНИКИ:**          | Адміністратор, Система                                                                                                              |
| **ПЕРЕДУМОВИ:**        | Адміністратор увійшов з облікового запису у систему                                                                                 |
| **РЕЗУЛЬТАТ:**         | Успішний вихід адміністратора з свого акаунту                                                                                       |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Немає                                                                                                                               |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Адміністратор обирає опцію "Вийти" на головній сторінці веб-сайту.<br/> 2. Система перенаправляє користувача на головну сторінку |


| **ID:**                | AdminDelete                                                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **НАЗВА:**             | Видалення даних адміністратором                                                                                                |
| **УЧАСНИКИ:**          | Адміністратор, Система                                                                                                              |
| **ПЕРЕДУМОВИ:**        | Адміністратор увійшов до системи                                                                                 |
| **РЕЗУЛЬТАТ:**         | Успішний видалення даних із системи                                                                                       |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Відповідних даних не існує в системі - DataNotFound                                                                                |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Адміністратор вибирає опцію "Видалення" на сторінці з відповідними даними.<br/> 2. Система попереджає адміністратора про остаточне видалення даних .<br/> 3. Адміністратор підтверджує свої дії.<br/> 4. Система видаляє дані з базі даних.<br/> |

| **ID:**                | AdminConfirmChange                                                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **НАЗВА:**             | Підтвердження змін в даних адміністратором                                                                                                |
| **УЧАСНИКИ:**          | Адміністратор, Користувач, Система                                                                                                              |
| **ПЕРЕДУМОВИ:**        | Адміністратор увійшов до системи                                                                                 |
| **РЕЗУЛЬТАТ:**         | Успішний оновлення даних у системі                                                                                       |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Відповідних даних не існує в системі - DataNotFinded                                                                                                        |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Адміністратор вибирає опцію "Підтвердити оновлення даних" на сторінці з відповідними даними.<br/> 2. Система попереджає адміністратора про оновлення даних .<br/> 3. Адміністратор підтверджує свої дії.<br/> 4. Система оновлює дані в базі даних.<br/>|

| **ID:**                | AdminEdit                                                                              |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Оновлення даних користувачем у систему | 
| **УЧАСНИКИ:**          | Адміністратор, Система |
| **ПЕРЕДУМОВИ:**        | Адміністратор увійшов до системи. |
| **РЕЗУЛЬТАТ:**         | Успішний оновлення даних у системі |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Відсутність змін у даних - NoChangedDate<br/> Надсилання пустих даних - EmptyDate |
| **ОСНОВНИЙ СЦЕНАРІЙ:** |1. Адміністратор переходить на сторінку або розділ веб-сайту, де можна оновити дані.<br/> 2. Адміністратор натискає кнопку "Оновити", щоб розпочати процес.<br/>3. Відкривається вікно з формою, де адміністратор може редагувати дані.<br/> 4. Система перевіряє формат файлу та структуру даних. Якщо дані коректні, система продовжує. У разі помилок система повідомляє користувачу про них та пропонує способи виправлення.<br/>5. Адміністратор переглядає параметри завантаження та натискає кнопку "ОК" для підтвердження.<br/>6. Система оновлює дані в базі даних.<br/>|

| **ID:**                | AdminBan                                                                              |
|------------------------|--------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Блокування користувача адміністратором | 
| **УЧАСНИКИ:**          | Адміністратор, Система, Користувач |
| **ПЕРЕДУМОВИ:**        | Адміністратор увійшов до системи. |
| **РЕЗУЛЬТАТ:**         | Успішне блокування користувача |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Користувача не існує - UserNotFound |
| **ОСНОВНИЙ СЦЕНАРІЙ:** |1. Адміністратор вибирає опцію "Заблокувати користувача" на сторінці користувача.<br/> 2. Система попереджає адміністратора про не зворотність дій .<br/> 3. Адміністратор підтверджує свої дії.<br/> 4. Система блокує користувача.<br/>|
## Короткий огляд продукту
Наш продукт - інноваційна веб-система управління даними, яка надає широкі можливості для ефективної роботи з великими обсягами інформації. Вона вирізняється своєю здатністю збирати дані з різноманітних джерел. Можливість користувачів змінювати й додавати нові дані та уважна модерація зі сторони адміністраторів забезпечує високу актуальність та доступність інформації. Використання такого інструменту, як TensorFlow, забезпечує глибокий аналіз даних для наступної класифікації, кластеризації та можливого прогнозування закономірностей. Найсучасніші інструменти для візуалізації, які містить бібліотека D3.js дозволяє Вам у різних виглядах представити дані.
## Функціональність

**_Відвідувач:_**
- Перегляд загальної інформації та даних без потреби реєстрації.
- Пошук конкретних даних за ключовими словами, категоріями, датами тощо.
- Завантаження вибраних даних з системи.

**_Користувач:_**
- Реєстрація облікового запису у системі для доступу до нових можливостей, недоступних відвідувачам.
- Можливість входу та виходу до/з зареєстрованого акаунту.
- Завантаження власних даних до системи.
- Пропонування оновлення існуючих даних у системі.

**_Адміністратор:_**
- Блокування користувачів через порушення правил.
- Завантаження власних даних до системи
- Оновлення існуючих даних у системі.
- Підтвердження оновлення даних запропонованих іншими користувачами.
- Можливість входу та виходу до/з акаунту з розширеними правами.

## Практичність

-	Система має забезпечувати швидкий та зручний пошук даних з різноманітними фільтрами та інтуїтивним інтерфейсом.
-	Має надавати різноманітні інструменти для аналізу та візуалізації даних, щоб користувачі могли легко виділити важливі відомості та тренди.
-	Сумісна з іншими програмами та системами, що дозволяє легко обмінюватися даними та інтегрувати їх для різних цілей.
-	Надання професійної підтримки та навчання користувачів у використанні системи, що сприяє їхньому ефективному використанню продукту.

## Надійність

Наша система забезпечує надійність за допомогою наступних методів:
-	Використання резервних серверів або хмарних технологій для видобування даних у випадку відмови головного серверу, що забезпечує безперервну доступність даних.
-	Ведення журналів змін даних для збереження цілісності та відновлення всіх змін, що гарантує стабільність та надійність даних.
-	Застосування шифрування особистих даних користувачів під час передачі та зберігання для забезпечення конфіденційності інформації.
-	Забезпечення безперервної та постійної доступності системи управління відкритими даними без планових або непланових зупинок, що забезпечує безперервну роботу.
-	Регулярне створення резервних копій даних користувачів для відновлення їх у разі втрати або випадкового видалення, що гарантує безпеку та відновлення інформації.


## Продуктивність

Наша система забезпечує високу продуктивність за допомогою наступних підходів:
-	Забезпечення оптимізації бази даних та запитів для мінімізації часу виконання та швидкості завантаження інформації.
-	Використання масштабованих баз даних або технології нереляційних баз даних, якщо очікується велике навантаження на систему.
-	Регулярне тестування бази даних та інші функції системи для підвищення ефективності та швидкості роботи.
-	Має надавати ефективні інструменти графічного відображення та перегляду даних, які використовують мало ресурсів як зі сторони серверу, так і зі сторони користувачів.


## Експлуатаційна придатність

Наша система гарантує експлуатаційну придатність завдяки наступним функціям:
-	Має надавати докладну документацію щодо використання та налагодження системи, що допомагає користувачам швидко розібратися з платформою. 
-	Система має автоматично моніторити роботу та вести журнали, що дозволить оперативно виявляти проблеми та аналізувати продуктивність.
-	Код системи розміщується на Github, що сприяє колаборації та контролю версій.
-	Автоматичне тестуванню, включаючи тести продуктивності, модульні тести та тести на безпеку, що забезпечує надійність та стабільність системи.
