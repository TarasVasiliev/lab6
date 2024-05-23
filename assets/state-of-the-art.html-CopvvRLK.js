import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c as n,a as t,b as e,d as a,f as d}from"./app-Dh5i2ruK.js";const s="/lab6/assets/Gapminder-CEeOjnF8.jpg",p="/lab6/assets/Gapminder_2-BS6YYQYm.jpg",c="/lab6/assets/Gapminder_3-B6b-lIEH.jpg",h="/lab6/assets/DataBank-CKvLQhZ6.jpg",u="/lab6/assets/DataBank_2-CrvQX2fJ.jpg",_="/lab6/assets/DataExplorer-Dbq173hv.jpg",g="/lab6/assets/DataExplorer_2-CNuTg9Su.jpg",m="/lab6/assets/Poland_Euro-wzLt14Z0.jpg",b="/lab6/assets/Poland_Euro_2-BwIwkX2l.jpg",D="/lab6/assets/Eurostat-BJg6TQFF.jpg",f="/lab6/assets/Eurostat_2-BH5dp7KP.jpg",k="/lab6/assets/Dataverse-BZpo6Kr8.jpg",B="/lab6/assets/Dataverse_2-DY1hXZty.jpg",y={},x=d('<h1 id="аналіз-предметноі-області" tabindex="-1"><a class="header-anchor" href="#аналіз-предметноі-області"><span>Аналіз предметної області</span></a></h1><h2 id="вступ" tabindex="-1"><a class="header-anchor" href="#вступ"><span>Вступ</span></a></h2><p><em>У даному документі представленно такі підрозділи:</em></p><ul><li>Основні терміни та їх скорочення, які були використані при написанні роботи;</li><li>Опис моделей та способів вирішення завдань;</li><li>Опис інуючих аналогів;</li><li>Порівняльна характеристика FURPS;</li><li>Висновки щоди розробки інформаційної системи;</li><li>Список документів, які згадуються в проекті;</li></ul><h2 id="основні-визначення" tabindex="-1"><a class="header-anchor" href="#основні-визначення"><span>Основні визначення</span></a></h2>',5),w={href:"https://hostiq.ua/blog/ukr/what-is-api/",target:"_blank",rel:"noopener noreferrer"},v=t("br",null,null,-1),E={href:"https://uk.wikipedia.org/wiki/XML",target:"_blank",rel:"noopener noreferrer"},z=t("br",null,null,-1),P={href:"https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%B4%D0%BA%D1%80%D0%B8%D1%82%D1%96_%D0%B4%D0%B0%D0%BD%D1%96",target:"_blank",rel:"noopener noreferrer"},S=t("br",null,null,-1),T={href:"https://apeps.kpi.ua/shco-take-basa-danykh",target:"_blank",rel:"noopener noreferrer"},j=t("br",null,null,-1),G={href:"https://www.miyklas.com.ua/p/informatica/10-klas/sistemi-keruvannia-bazami-danikh-326161/skbd-reliatciini-bazi-danikh-326453/re-ecb32162-0c19-4c15-bc5d-61d53b7add6b",target:"_blank",rel:"noopener noreferrer"},A=t("p",null,"Найпоширенішими є такі види моделей БД:",-1),F=t("ul",null,[t("li",null,"Ієрархічна — це модель, де використовується представлення бази даних у вигляді деревовидної (ієрархічної) структури, що складається з об'єктів (даних) різних рівнів. За ієрархічною моделлю функціонує файлова система комп’ютера."),t("li",null,"Реляційна БД (від англ. relation — зв’язок) являє собою сукупність зв’язаних таблиць, що містять дані про об’єкти певного виду."),t("li",null,"Об’єктно-орієнтована модель даних — це модель БД, в якій дані зберігаються як абстрактні об’єкти, наділені певними властивостями та можливостями (методами) взаємодіяти з іншими об’єктами.")],-1),I={href:"https://avada-media.ua/ua/sql/",target:"_blank",rel:"noopener noreferrer"},C=t("h2",{id:"підходи-та-способи-вирішення-завдання",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#підходи-та-способи-вирішення-завдання"},[t("span",null,"Підходи та способи вирішення завдання")])],-1),L=t("p",null,[t("span",{class:"big-bold-text"},"Методи отримання відкритих даних")],-1),Q={href:"https://uk.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%83%D0%BB%D1%96%D0%BD%D0%B3",target:"_blank",rel:"noopener noreferrer"},N=t("ul",null,[t("li",null,"Плюси: можливість збору великих обсягів даних, автоматизація процесу."),t("li",null,"Мінуси: потрібні технічні навички, можуть бути проблеми з авторськими правами.")],-1),Z={href:"https://sparsim.org/uk/perevahy-ta-nedoliky-veb-skripinhu/",target:"_blank",rel:"noopener noreferrer"},q=t("ul",null,[t("li",null,"Плюси: не потрібні глибокі технічні навички."),t("li",null,"Мінуси: трудомісткий ручний процес, не можна зібрати великі обсяги даних.")],-1),M={href:"https://iqdecision.com/ua/kraudfanding-plyusi-ta-minusi/",target:"_blank",rel:"noopener noreferrer"},R=t("ul",null,[t("li",null,"Плюси: залучення зацікавлених людей, отримання унікальних даних."),t("li",null,"Мінуси: потрібні ресурси на координацію, результати можуть бути непередбачуваними.")],-1),X={href:"https://brainlab.com.ua/uk/blog-uk/shho-take-api",target:"_blank",rel:"noopener noreferrer"},U=d('<ul><li>Плюси: зручність, швидкість, можливість інтеграції даних.</li><li>Мінуси: обмеження по кількості запитів, потрібні навички розробки.</li></ul><p><span class="big-bold-text">Типи даних та способи їх збереження</span></p><p>Структуровані дані (таблиці, бази даних):</p><ul><li>Локальне зберігання (на жорсткому диску, зовнішніх носіях) <ul><li>Плюси: повний контроль, немає залежності від інтернету</li><li>Мінуси: ризик втрати даних, потрібне резервне копіювання</li></ul></li><li>Хмарні сховища (AWS S3, MongoDB Atlas, Firebase) <ul><li>Плюси: надійність, масштабованість, швидкий доступ</li><li>Мінуси: залежність від провайдера, вартість</li></ul></li></ul><p>Неструктуровані дані (texto, зображення, аудіо/відео)</p><ul><li>Локальне зберігання <ul><li>Плюси: повний контроль, доступ без інтернету</li><li>Мінуси: обмеженість простору</li></ul></li><li>Хмарні сховища (AWS S3, Google Cloud Storage, Dropbox) <ul><li>Плюси: масштабованість, швидкий доступ</li><li>Мінуси: цінова політика за трафік та зберігання</li></ul></li></ul><p><span class="big-bold-text">Аналіз даних</span></p><p>Excel і табличні процесори (Excel, Google Tables)</p><ul><li>Плюси: простота, швидкість, візуалізація</li><li>Мінуси: обмежені можливості аналізу великих обсягів даних</li></ul><p>Мови програмування (Python, R)</p><ul><li>Плюси: гнучкість, широкий набір бібліотек і методів аналізу</li><li>Мінуси: потрібні навички програмування</li></ul><p>Спеціалізовані аналітичні платформи (Tableau, Power BI, Qlik)</p><ul><li>Плюси: багато функцій візуалізації та аналізу, зручний інтерфейс</li><li>Мінуси: обмеження за обсягами та видами аналізу, вартість</li></ul><p>Хмарні аналітичні сервіси (Google BigQuery)</p><ul><li>Плюси: масштабованість, можливість аналізу великих даних</li><li>Мінуси: складність налаштування, вартість</li></ul><p>Машинне навчання (TensorFlow, PyTorch)</p><ul><li>Плюси: автоматизація аналізу, глибокий аналіз даних</li><li>Мінуси: потрібні висока кваліфікація, значні обчислювальні ресурси</li></ul><p><span class="big-bold-text">Візуалізація</span></p><p>Візуалізація даних використовується для легкого сприйняття великих об’ємів даних. Є декілька типів візуальних даних:</p><ul><li>Лінійні графіки. Показують тенденції, піки і спади, що особливо корисно при аналізі продажів, акцій або погодних умов. Ідеальні для відображення змін у часі.</li><li>Стовпчасті діаграми. Гарні для зіставлення даних і рейтингів. Мають вигляд вертикальних або горизонтальних стовпців, чия висота пропорційна значенню змінної.</li><li>Кругові діаграми. Підходять для візуалізації процентного розподілу або часток цілого.</li><li>Теплові карти. Представляють дані у вигляді системи колірних кодів, щоб швидко визначити області з найбільшою і найменшою концентрацією або інтенсивністю чого-небудь (аналіз вебтрафіку, дослідження ринку тощо).</li><li>Scatter plot. Використовуються для вивчення зв’язків між змінними. Вони показують розподіл точок на графіку і допомагають виявити кореляцію або викиди.</li><li>Географічні діаграми. Дають змогу візуалізувати інформацію в контексті конкретних регіонів чи країн.</li><li>Інфографіка. Комбінує різні типи візуалізації даних із текстом, зображеннями та іншими елементами дизайну для створення захопливого і простого представлення даних.</li></ul><p>Для візуалізації даних використовують різні інструменти потипу, Google Charts Polymaps, Microsoft Excel &amp; Power BI, Figma, Tableau тощо.</p><p><span class="big-bold-text">Моделі та методи контролю доступу</span></p><p>Контроль та управління правом доступу вирішують завдання щодо захисту від незаконного проникнення на об&#39;єкти та несанкціонованого використання ресурсів. Практичну дієвість зобразили чотири науково розроблених моделі та методи управління доступом, де враховані як специфіки суб&#39;єктів, так і ступінь важливості безпеки об&#39;єктів або ресурсів.</p><p>Моделі управління доступом поділяються на такі категорії:</p><ul><li>дискреційне (виборче) управління;</li><li>обов&#39;язковий (мандатний) метод управління;</li><li>рольова модель управління;</li><li>управління доступом на основі правил;</li></ul><p><span class="big-bold-text">Модель рольового управління доступом</span></p><p>Основний принцип рольової моделі передбачає розподіл функцій персоналу з урахуванням виду діяльності організації в цілому або роботи конкретного підрозділу, або при виконанні судових проектів. При використанні рольового методу немає потреби визначати тип доступу для кожного окремого користувача ресурсом. Досить встановити ступінь допуску для ролі, яку виконує користувач ресурсу відповідно до посадових обов&#39;язків або при виконанні окремого завдання. При цьому, допуск строго визначений роллю виконуваної співробітником та не виходить за межі, визначені початковим сценарієм.</p><p>Перевага рольового методу полягає в тому, що доступом до ресурсу може користуватися кілька користувачів, які призначені на одну і ту ж роль або навпаки — один співробітник призначається на виконання декількох ролей без перегляду індивідуального рівня доступу. Однак, якщо в інтересах роботи виконавець вимагає розширити сферу допуску, передбачену роллю, то адміністратор переглядає ступінь доступу для кожного конкретного випадку. Метод рольового управління СКУД найбільш підходить для динамічних та мінливих хмарних систем управління.</p><p><span class="big-bold-text">Контроль та управління доступом на основі правил</span></p><p>Ця форма управління схожа з рольовим методом, але відрізняється тим, що власниками об&#39;єктів та адміністратором ресурсів встановлюються чіткі правила щодо обмеження доступу до об&#39;єкта в певний час доби або дозволяється тільки з конкретного пристрою. Крім того, дозволи до допуску можуть бути визначені кількістю попередніх спроб входу або місцем знаходження користувача. Також дозволи на доступ можуть бути визначені комбінацією встановлених правилами дій.</p><p>Ця модель відмінно підходить для управління доступом в організаціях, які мають велику кількість об&#39;єктів з різним ступенем рівня доступу та різним регламентом роботи. Гнучкість системи безпеки на основі правил дозволяє визначати безліч комбінацій доступу в залежності від мінливого оточення.</p><h2 id="порівняльна-характеристика-існуючих-засобів-вирішення-завдання" tabindex="-1"><a class="header-anchor" href="#порівняльна-характеристика-існуючих-засобів-вирішення-завдання"><span>Порівняльна характеристика існуючих засобів вирішення завдання</span></a></h2>',32),V={href:"https://uk.wikipedia.org/wiki/%D0%A4%D1%83%D0%BD%D0%B4%D0%B0%D1%86%D1%96%D1%8F_Gapminder",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://en.wikipedia.org/wiki/Trendalyzer",target:"_blank",rel:"noopener noreferrer"},J=t("br",null,null,-1),K=t("img",{src:s,alt:"",loading:"lazy"},null,-1),O=t("figure",null,[t("img",{src:p,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),W=t("figure",null,[t("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),H={href:"https://databank.worldbank.org/home.aspx",target:"_blank",rel:"noopener noreferrer"},$=t("img",{src:h,alt:"",loading:"lazy"},null,-1),tt=t("figure",null,[t("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),et={href:"https://uk.wikipedia.org/wiki/Google_Public_Data_Explorer",target:"_blank",rel:"noopener noreferrer"},lt=t("img",{src:_,alt:"",loading:"lazy"},null,-1),at=t("figure",null,[t("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),dt={href:"https://en.wikipedia.org/wiki/Statistics_Poland",target:"_blank",rel:"noopener noreferrer"},rt=t("img",{src:m,alt:"",loading:"lazy"},null,-1),it=t("figure",null,[t("img",{src:b,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),ot={href:"https://commission.europa.eu/about-european-commission/departments-and-executive-agencies/eurostat-european-statistics_en",target:"_blank",rel:"noopener noreferrer"},nt=t("img",{src:D,alt:"",loading:"lazy"},null,-1),st=t("figure",null,[t("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),pt={href:"https://en.wikipedia.org/wiki/Dataverse",target:"_blank",rel:"noopener noreferrer"},ct=t("img",{src:k,alt:"",loading:"lazy"},null,-1),ht=d('<figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><span class="big-bold-text">Таблиця порівняння</span></p><table><thead><tr><th>Загальні вимоги</th><th>Конкретні вимоги</th><th>Наш проєкт</th><th>Grapminder</th><th>DataBank</th><th>G.P.D.E</th><th>Poland Stat.</th><th>EuroStat.</th><th>Dataverse</th></tr></thead><tbody><tr><td>Functionality</td><td>Візуалізація даних</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td></td><td>Додавання/редагування даних</td><td>✅</td><td>❌</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td></td><td>Можливість аторізовуватись</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td></tr><tr><td></td><td>Можливість пошуку/фільтрування інформації</td><td>✅</td><td>🟨</td><td>✅</td><td>🟨</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Usability</td><td>Підтримка інших мов</td><td>❌</td><td>🟨</td><td>✅</td><td>✅</td><td>🟨</td><td>✅</td><td>❌</td></tr><tr><td></td><td>Зручність Інтерфейсу</td><td>✅</td><td>✅</td><td>✅</td><td>🟨</td><td>✅</td><td>✅</td><td>🟨</td></tr><tr><td></td><td>Документація</td><td>✅</td><td>🟨</td><td>🟨</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Reliability</td><td>Актуальність даних</td><td>✅</td><td>🟨</td><td>✅</td><td>🟨</td><td>✅</td><td>✅</td><td>🟨</td></tr><tr><td></td><td>Резервне копіювання даних</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td></td><td>Ліцензійність</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Performance</td><td>Стійкість у разі неполадок/збоїв</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td></td><td>Ефективність обробки запитів</td><td>✅</td><td>🟨</td><td>✅</td><td>✅</td><td>🟨</td><td>✅</td><td>🟨</td></tr><tr><td>Supportability</td><td>Підтримка</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>🟨</td><td>✅</td><td>✅</td></tr><tr><td></td><td>FAQ</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td></tr><tr><td></td><td>Зворотній зв’язок</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="висновки" tabindex="-1"><a class="header-anchor" href="#висновки"><span>Висновки</span></a></h2><p>Наша команда провела ретельний аналіз існуючих програмних продуктів та веб-застосунків для управління відкритими даними. Серед них:</p><ul><li>Dataverse: володіє більшістю інструментів для реалізації повного життєвого циклу даних, але не має засобів візуалізації та працює в режимі обмеженого доступу.</li><li>Google Public Data Explorer: пропонує потужні інструменти візуалізації, але не має функціоналу для роботи з датасетами та керування версіями.</li><li>Інші: існують й інші рішення, але вони не володіють комплексом необхідних функцій або мають суттєві обмеження.</li></ul><p>На основі проведеного аналізу, наша команда дійшла висновку, що розробка нової веб-системи управління відкритими даними буде кращим рішенням, адже вона:</p><ul><li>Має систему для додавання та редагування даних : авторизовані користувачі зможуть давати поради/зауваження адмінам та це зможе покращити наш сервіс.</li><li>Буде доступною для всіх: система буде доступна для широкого кола користувачів, без обмежень та платних підписок.</li><li>Відповідатиме потребам користувачів: система буде мати зручний інтерфейс та актуальні дані, а також буде мати ефективну систему оброку запитів.</li></ul><p>Розробка нової веб-системи управління відкритими даними стане значним кроком вперед у цій сфері, надавши користувачам потужний та зручний інструмент для роботи з даними.</p><h2 id="посилання" tabindex="-1"><a class="header-anchor" href="#посилання"><span>Посилання</span></a></h2>',10),ut={href:"https://www.gapminder.org/",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://databank.worldbank.org/home.aspx",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://www.google.com/publicdata/directory",target:"_blank",rel:"noopener noreferrer"},mt={href:"https://stat.gov.pl/en/",target:"_blank",rel:"noopener noreferrer"},bt={href:"https://ec.europa.eu/eurostat/data/database",target:"_blank",rel:"noopener noreferrer"},Dt={href:"https://sites.google.com/view/ddkbmta-info/%D0%BB%D0%B5%D0%BA%D1%86%D1%96%D1%97/%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B8-%D0%BA%D0%B5%D1%80%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-%D0%B1%D0%B0%D0%B7%D0%B0%D0%BC%D0%B8-%D0%B4%D0%B0%D0%BD%D0%B8%D1%85-microsoft-access/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%96-%D0%BF%D0%BE%D0%BD%D1%8F%D1%82%D1%82%D1%8F-%D0%B1%D0%B0%D0%B7-%D0%B4%D0%B0%D0%BD%D0%B8%D1%85",target:"_blank",rel:"noopener noreferrer"},ft={href:"https://goit.global/ua/articles/vizualizatsiia-danykh-pryntsypy-sposoby-ta-korysni-instrumenty/",target:"_blank",rel:"noopener noreferrer"},kt={href:"https://toplead.com.ua/ua/blog/id/38-luchshih-instrumentov-dlja-vizualizacii-dannyh-160/",target:"_blank",rel:"noopener noreferrer"},Bt={href:"https://worldvision.com.ua/modeli-i-metody-kontrolya-dostupa-chto-vam-podkhodit/",target:"_blank",rel:"noopener noreferrer"};function yt(xt,wt){const l=i("ExternalLinkIcon");return o(),n("div",null,[x,t("p",null,[t("a",w,[e("API(Application Programming Interface)"),a(l)]),e(" — це посередник між програмами, який задає правила «спілкування»."),v,t("a",E,[e("XML(EXtensible Markup Language)"),a(l)]),e(" — це стандарт побудови мов розмітки ієрархічно структурованих даних для обміну між різними застосунками, зокрема, через Інтернет."),z,t("a",P,[e("Відкриті дані"),a(l)]),e(" — це концепція, за якою певні дані мають бути вільними для використання та розповсюдження будь-якою особою з будь-якою метою."),S,t("a",T,[e("База Даних(БД)(Data Base)"),a(l)]),e(" — це організована структура, яка призначена для зберігання, зміни та обробки взаємозалежної інформації, переважно великих обсягів."),j,t("a",G,[e("Модель даних"),a(l)]),e(" — це опис об’єкта дослідження, виділення окремих параметрів (атрибутів) цього об’єкта, підготовка до добору та внесення конкретних даних (значень атрибутів).")]),A,F,t("p",null,[t("a",I,[e("SQL(Structured Query Language)"),a(l)]),e(" - це мова програмування, єдина функція якої - відправлення запитів до реляційних баз даних.")]),C,L,t("p",null,[t("a",Q,[e("Веб-краулінг"),a(l)]),e(" - автоматичний збір даних з веб-сторінок за допомогою спеціального програмного забезпечення.")]),N,t("p",null,[t("a",Z,[e("Веб-скрейпінг"),a(l)]),e(" - вилучення даних з веб-сторінок вручну або за допомогою простих скриптів.")]),q,t("p",null,[t("a",M,[e("Краудфандинг"),a(l)]),e(" - збір відкритих даних за підтримки волонтерів або учасників фінансування.")]),R,t("p",null,[t("a",X,[e("API"),a(l)]),e(" - використання готових програмних інтерфейсів для автоматичного отримання даних.")]),U,t("p",null,[t("a",V,[e("Фундація Gapminder"),a(l)]),e(" – незалежна, некомерційна організація, що сприяє сталому глобальному розвитку використання і розуміння статистичних даних та іншої інформації, шляхом використання і розуміння різних глобальних фактів про країни світу, їх проблеми, економічний та екологічний розвиток. Для візуалізації даних, використовується програмне забезпечення "),t("a",Y,[e("Trendalyzer"),a(l)]),e("."),J,K]),O,W,t("p",null,[t("a",H,[e("DataBank"),a(l)]),e(" - це інструмент для аналізу та візуалізації, який містить колекції даних часових рядів на різні теми, де можна створювати власні запити, генерувати таблиці, діаграми та карти, а також легко зберігати, вбудовувати та ділитися ними. "),$]),tt,t("p",null,[t("a",et,[e("Google Public Data Explorer"),a(l)]),e(" – інструмент, що надає загальнодоступні дані і прогнози від ряду міжнародних організацій і наукових установ, які можуть відображатись у вигляді лінійних графіків, гістограм, тощо. Також він є загальнодоступним для завантаження, обміну та візуалізації наборів даних. "),lt]),at,t("p",null,[t("a",dt,[e("Statistics Poland"),a(l)]),e(" – є головним органом виконавчої влади Польщі, відповідальним за збір та публікацію статистичних даних, пов'язаних з економікою, населенням та суспільством країни, на національному та місцевому рівнях. "),rt]),it,t("p",null,[t("a",ot,[e("Eurostat"),a(l)]),e(" — це статистичне відомство Європейського Союзу, відповідальне за публікацію загальноєвропейської статистики та індикаторів, які дозволяють проводити порівняння між країнами та регіонами. "),nt]),st,t("p",null,[t("a",pt,[e("Dataverse"),a(l)]),e(" - це веб-додаток з відкритим вихідним кодом для обміну, збереження, цитування, вивчення та аналізу дослідницьких даних. Репозитарій простору даних містить кілька просторів даних(dataverses). Кожен простір даних(dataverse) містить набір(и) даних(dataset(s)) або інші простори даних(dataverse(s)), і кожен набір даних містить описові метадані та файли даних (включно з документацією та кодом, що супроводжують дані) "),ct]),ht,t("ul",null,[t("li",null,[t("a",ut,[e("GRAPMINDER"),a(l)])]),t("li",null,[t("a",_t,[e("The World Bank DataBank"),a(l)])]),t("li",null,[t("a",gt,[e("Google Public Data Explorer"),a(l)])]),t("li",null,[t("a",mt,[e("Statistic Poland"),a(l)])]),t("li",null,[t("a",bt,[e("Eurostat"),a(l)])]),t("li",null,[t("a",Dt,[e("Бази даних та основні поняття"),a(l)])]),t("li",null,[t("a",ft,[e("Візуалізація даних"),a(l)])]),t("li",null,[t("a",kt,[e("Інструменти візуалізації"),a(l)])]),t("li",null,[t("a",Bt,[e("Моделі та методи контролю доступу"),a(l)])])])])}const zt=r(y,[["render",yt],["__file","state-of-the-art.html.vue"]]),Pt=JSON.parse('{"path":"/requirements/state-of-the-art.html","title":"Аналіз предметної області","lang":"en-US","frontmatter":{"description":"Аналіз предметної області Вступ У даному документі представленно такі підрозділи: Основні терміни та їх скорочення, які були використані при написанні роботи; Опис моделей та сп...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/lab6/requirements/state-of-the-art.html"}],["meta",{"property":"og:site_name","content":"Система управління відкритими даними"}],["meta",{"property":"og:title","content":"Аналіз предметної області"}],["meta",{"property":"og:description","content":"Аналіз предметної області Вступ У даному документі представленно такі підрозділи: Основні терміни та їх скорочення, які були використані при написанні роботи; Опис моделей та сп..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-26T14:53:15.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-26T14:53:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Аналіз предметної області\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-26T14:53:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Вступ","slug":"вступ","link":"#вступ","children":[]},{"level":2,"title":"Основні визначення","slug":"основні-визначення","link":"#основні-визначення","children":[]},{"level":2,"title":"Підходи та способи вирішення завдання","slug":"підходи-та-способи-вирішення-завдання","link":"#підходи-та-способи-вирішення-завдання","children":[]},{"level":2,"title":"Порівняльна характеристика існуючих засобів вирішення завдання","slug":"порівняльна-характеристика-існуючих-засобів-вирішення-завдання","link":"#порівняльна-характеристика-існуючих-засобів-вирішення-завдання","children":[]},{"level":2,"title":"Висновки","slug":"висновки","link":"#висновки","children":[]},{"level":2,"title":"Посилання","slug":"посилання","link":"#посилання","children":[]}],"git":{"createdTime":1708081508000,"updatedTime":1708959195000,"contributors":[{"name":"Namelessa","email":"pdo090318@gmail.com","commits":3},{"name":"Dmytro Zanuda","email":"dmzanuda.work@gmail.com","commits":1}]},"readingTime":{"minutes":6.13,"words":1838},"filePathRelative":"requirements/state-of-the-art.md","localizedDate":"February 16, 2024","autoDesc":true}');export{zt as comp,Pt as data};
