import{a3 as u,Z as a,_ as i,a1 as e,a2 as r,$ as o,a4 as d,a0 as t,D as s}from"./framework-61fc4e0a.js";const h={},c={href:"https://en.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"как-это-работает",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#как-это-работает","aria-hidden":"true"},"#"),r(" Как это работает")],-1),p={href:"https://v3.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://next.router.vuejs.org",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},m=e("ul",null,[e("li",null,[e("p",null,"Во время разработки мы запускаем обычный dev-сервер, а сайт VuePress обслуживаем как обычный SPA. Если вы раньше использовали Vue, вы заметите знакомый опыт разработки при написании и разработке с помощью VuePress.")]),e("li",null,[e("p",null,"Во время сборки мы создаем серверную версию сайта VuePress и визуализируем соответствующий HTML, виртуально посещая каждый маршрут.")])],-1),v=e("h2",{id:"вступление-во-vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#вступление-во-vuepress","aria-hidden":"true"},"#"),r(" Вступление во VuePress")],-1),V=e("h2",{id:"официальные-документация-vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#официальные-документация-vuepress","aria-hidden":"true"},"#"),r(" Официальные документация VuePress")],-1),b={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"};function g(x,w){const l=s("ExternalLinkIcon"),n=s("RouterLink");return a(),i("div",null,[e("p",null,[r("VuePress — это генератор статических сайтов, ориентированный на уценку. Вы можете написать свой контент (документацию, блоги и т. д.) в "),e("a",c,[r("Markdown"),o(l)]),r(", тогда VuePress поможет вам создать статический сайт для их размещения.")]),d(" more "),_,e("p",null,[r("Сайт VuePress на самом деле представляет собой одностраничное приложение (SPA) на базе "),e("a",p,[r("Vue"),o(l)]),r(" и "),e("a",k,[r("Vue Router"),o(l)]),r(".")]),e("p",null,[r("Маршруты генерируются в соответствии с относительным путем ваших файлов Markdown. Каждый файл Markdown компилируется в HTML с помощью "),e("a",f,[r("markdown-it"),o(l)]),r(", а затем обрабатывается как шаблон компонента Vue. Это позволяет вам напрямую использовать Vue внутри ваших файлов Markdown и отлично подходит, когда вам нужно встроить динамический контент.")]),m,v,e("ul",null,[e("li",null,[e("p",null,[o(n,{to:"/ru/cookbook/vuepress/page.html"},{default:t(()=>[r("Страница")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/ru/cookbook/vuepress/markdown.html"},{default:t(()=>[r("Разметка")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/ru/cookbook/vuepress/file.html"},{default:t(()=>[r("Структура файла")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/ru/cookbook/vuepress/config.html"},{default:t(()=>[r("Файл конфигурации")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/ru/cookbook/vuepress/plugin.html"},{default:t(()=>[r("Плагины")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/ru/cookbook/vuepress/theme.html"},{default:t(()=>[r("Тема")]),_:1})])])]),V,e("ul",null,[e("li",null,[e("a",b,[r("VuePress"),o(l)])])])])}const M=u(h,[["render",g],["__file","index.html.vue"]]);export{M as default};
