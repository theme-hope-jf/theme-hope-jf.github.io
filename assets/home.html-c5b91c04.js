import{a3 as e,Z as p,_ as o,a4 as c,a1 as s,a2 as n,$ as i,a0 as r,a5 as a,D as t}from"./framework-61fc4e0a.js";const B="/v2/assets/home-light-b511a795.jpg",d="/v2/assets/home-dark-4b9180d3.jpg",y={},v=s("p",null,[s("code",null,"vuepress-theme-hope"),n(" улучшает домашнюю страницу по умолчанию.")],-1),u=s("p",null,[n("Чтобы использовать его, установите "),s("code",null,"home: true"),n(" в frontmatter страницы. Любой дополнительный контент после "),s("code",null,"YAML front matter"),n(" будет проанализирован как обычный Markdown и отображен после раздела функций.")],-1),m=s("p",null,[s("img",{src:B,alt:"Скриншот","data-mode":"lightmode-only",loading:"lazy"}),s("img",{src:d,alt:"Скриншот","data-mode":"darkmode-only",loading:"lazy"})],-1),C=a('<h2 id="информация-о-саите" tabindex="-1"><a class="header-anchor" href="#информация-о-саите" aria-hidden="true">#</a> Информация о сайте</h2><p>Вы можете использовать <code>heroText</code>, чтобы установить основной заголовок, и <code>tagline</code>, чтобы установить подзаголовок.</p><p>Если у вас есть логотип, вы можете поместить его в <code>public</code> папку и установить через <code>heroImage</code>, если вы хотите отображать другой логотип в ночном режиме, вы можете использовать <code>heroImageDark</code>. Для лучшего A11y мы рекомендуем вам установить описание логотипа на <code>heroAlt</code>.</p><h2 id="кнопка-домашняя-страница" tabindex="-1"><a class="header-anchor" href="#кнопка-домашняя-страница" aria-hidden="true">#</a> Кнопка Домашняя страница</h2><p>Вы можете отобразить некоторые важные ссылки в виде кнопок на главной странице.</p><p>Вы можете установить их через <code>actions</code>, которые представляют собой массив, где каждый элемент является объектом со следующими ключами:</p><ul><li><code>text</code>: текст кнопки</li><li><code>link</code>: ссылка кнопки</li><li><code>type</code>: тип кнопки (поддерживаются только <code>&quot;primary&quot;</code> и <code>&quot;default&quot;</code> (по умолчанию))</li></ul><h2 id="особенности-проекта" tabindex="-1"><a class="header-anchor" href="#особенности-проекта" aria-hidden="true">#</a> Особенности проекта</h2><p>Вы можете установить и отобразить характеристики элемента через <code>features</code>, которые представляют собой массив, каждый элемент которого представляет собой объект, содержащий следующие ключи:</p><ul><li><code>title</code>: название</li><li><code>details</code>: детали</li><li><code>icon</code> (опционально): может быть заполнен полным или абсолютным путем ссылки на изображение или FontClass</li><li><code>link</code> (опционально): адрес ссылки</li></ul>',10),A={class:"hint-container info"},F=s("p",{class:"hint-container-title"},"Инфо",-1),b=a(`<h2 id="демо" tabindex="-1"><a class="header-anchor" href="#демо" aria-hidden="true">#</a> Демо</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#E06C75;">home</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">home</span></span>
<span class="line"><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Главная</span></span>
<span class="line"><span style="color:#E06C75;">heroImage</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/logo.svg</span></span>
<span class="line"><span style="color:#E06C75;">heroText</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">VuePress Theme Hope</span></span>
<span class="line"><span style="color:#E06C75;">tagline</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Тема vuepress с множеством функций✨</span></span>
<span class="line"><span style="color:#E06C75;">actions</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Руководство 🧭</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/cookbook/tutorial/</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">primary</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">вступление 💡</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/get-started/intro.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Конфиг 🛠</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/config/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Онлайн-демонстрация 🪀</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">https://stackblitz.com/fork/vuepress-theme-hope</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">features</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Улучшение разметки</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">fab fa-markdown</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Добавление выравнивания, надстрочного/подстрочного скрипта, сноски, списка задач, текста, блок-схемы, диаграммы, выделения и поддержка презентации в Markdown</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/markdown/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Слайд-страница</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">person-chalkboard</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Добавление страниц слайдов для отображения того, что вам нравится</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/layout/slides</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Улучшение макета</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">object-group</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Добавление хлебных крошек, нижнего колонтитула, улучшенной панели навигации, улучшенной навигации по страницам и т. д.</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/layout/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Просмотры страниц и комментарии</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">comment-dots</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Запустите статистику просмотров страниц и поддержку комментариев с помощью Waline</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/feature/comment.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Информация о статье</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">circle-info</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Добавление автора, даты написания, время чтения, количество слов и другой информации в свою статью</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/feature/page-info.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Поддержка блога</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">blog</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Список ваших статей с их датами, тегами и категориями с некоторыми потрясающими макетами</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/guide/blog/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Пользовательский цвет темы</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">palette</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Поддержка пользовательских цветов темы и позволяет пользователям переключаться между предустановленными цветами темы</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/interface/theme-color.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Темный режим</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">circle-half-stroke</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Свободно переключайтесь между светлым и темным режимами</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/interface/darkmode.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Полная поддержка A11y</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">universal-access</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Полная поддержка специальных возможностей на вашем сайте</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/interface/accessibility.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Шифрование статьи</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">lock</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Шифруйте свои статьи на основе ссылок на страницы, чтобы их мог видеть только тот, кому вы хотите</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/feature/encrypt.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Search</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">search</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Support docsearch and client search</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/feature/search.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Кнопка копирования</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">copy</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Копируйте коды одним кликом в блоках кодов</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/feature/copy-code.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Предпросмотр изображения</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">image</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Поддержка просмотра, масштабирования, обмена изображениями на странице, например, в галерее</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/feature/photo-swipe.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">СЕО-улучшения</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">dumbbell</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Оптимизация страниц для поисковых систем</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/advanced/seo.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Карта сайта</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">sitemap</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Создание карты сайта для своего сайта</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/advanced/sitemap.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Поддержка каналов</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">rss</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Создание потока, чтобы пользователи могли подписаться на него</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/advanced/feed.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Поддержка PWA</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">mobile-screen</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Сделайте свой сайт больше похожим на APP</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/advanced/pwa.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Больше новых функций</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">ellipsis</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Включая поддержку иконок, полноэкранную кнопку и т. д.</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/ru/guide/feature/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">copyright</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#E06C75;">footer</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">MIT Licensed | Copyright © 2019-present Mr.Hope</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function E(h,g){const l=t("RouterLink");return p(),o("div",null,[v,u,m,c(" more "),C,s("div",A,[F,s("p",null,[n("Полные элементы конфигурации смотрите в разделе "),i(l,{to:"/ru/config/frontmatter/home.html"},{default:r(()=>[n("Конфигурация Frontmatter домашней страницы")]),_:1}),n(".")])]),b])}const f=e(y,[["render",E],["__file","home.html.vue"]]);export{f as default};
