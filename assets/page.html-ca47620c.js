import{a3 as l,Z as c,_ as p,a1 as t,a2 as e,$ as n,a0 as r,a5 as s,D as d}from"./framework-61fc4e0a.js";const i={},h=s(`<p>VuePress ориентирован на уценку. Каждый файл Markdown внутри вашего проекта представляет собой отдельную страницу.</p><h2 id="роутинг" tabindex="-1"><a class="header-anchor" href="#роутинг" aria-hidden="true">#</a> Роутинг</h2><p>По умолчанию путь маршрута страницы определяется относительным путем вашего файла Markdown.</p><p>Предполагая, что это структура каталогов ваших файлов Markdown:</p><div class="language-text" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">└─ docs</span></span>
<span class="line"><span style="color:#abb2bf;">   ├─ guide</span></span>
<span class="line"><span style="color:#abb2bf;">   │  ├─ getting-started.md</span></span>
<span class="line"><span style="color:#abb2bf;">   │  └─ README.md</span></span>
<span class="line"><span style="color:#abb2bf;">   ├─ contributing.md</span></span>
<span class="line"><span style="color:#abb2bf;">   └─ README.md</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre></div>`,5),u=t("code",null,"docs",-1),_={href:"https://v2.vuepress.vuejs.org/reference/cli.html",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"vuepress dev docs",-1),b=s('<table><thead><tr><th>Относительный путь</th><th>Путь маршрута</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>',2),f={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},k=s(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#E06C75;">lang</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">en-US</span></span>
<span class="line"><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Title of this page</span></span>
<span class="line"><span style="color:#E06C75;">description</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Description of this page</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"></span></code></pre></div><p>Вы, должно быть, заметили, что эти поля аналогичны параметрам конфигурации сайта в файле конфигурации. Вы можете переопределить <code>lang</code>, <code>title</code>, <code>description</code>, и т. д. текущей страницы через frontmatter. Таким образом, вы можете использовать frontmatter в качестве конфигурации области страницы.</p><p>Кроме того, VuePress имеет встроенную поддержку некоторых полей frontmatter, и у вашей темы тоже может быть своя особая frontmatter.</p>`,3),g={class:"hint-container tip"},y=t("p",{class:"hint-container-title"},"Совет",-1),v={href:"https://v2.vuepress.vuejs.org/reference/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},B=t("code",null,"vuepress-theme-hope",-1),M=t("h2",{id:"контент",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#контент","aria-hidden":"true"},"#"),e(" Контент")],-1),w=t("p",null,[e("Основной контент вашей страницы написан в Markdown. VuePress сначала преобразует ваш Markdown в HTML-код, а затем обрабатывает HTML-код как "),t("code",null,"<template>"),e(" Vue SFC.")],-1),x={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"};function E(V,A){const a=d("ExternalLinkIcon"),o=d("RouterLink");return c(),p("div",null,[h,t("p",null,[e("Возьмите каталог "),u,e(" в качестве "),t("a",_,[e("исходного каталога"),n(a)]),e(", например вы используете команду "),m,e(". Тогда пути маршрута ваших файлов Markdown будут такими:")]),b,t("p",null,[e("Файл Markdown может содержать frontmatter "),t("a",f,[e("YAML"),n(a)]),e(". Вступительная часть должна быть в верхней части файла Markdown и должна быть заключена в пару строк с тройным пунктиром. Вот простой пример:")]),k,t("div",g,[y,t("p",null,[e("Ознакомьтесь со "),t("a",v,[e("Справочником Frontmatter"),n(a)]),e(" для получения полного списка встроенных интерфейсов VuePress.")]),t("p",null,[e("Ознакомьтесь с "),n(o,{to:"/ru/config/frontmatter/"},{default:r(()=>[e("Конфиг > Frontmatter")]),_:1}),e(", чтобы узнать о теме по "),B,e(".")])]),M,w,t("p",null,[e("Благодаря возможностям "),t("a",x,[e("markdown-it"),n(a)]),e(" и синтаксису шаблонов Vue базовый Markdown можно значительно расширить. Затем ознакомьтесь с руководством "),n(o,{to:"/ru/cookbook/vuepress/markdown.html"},{default:r(()=>[e("Markdown")]),_:1}),e(" для всех расширений Markdown в VuePress.")])])}const F=l(i,[["render",E],["__file","page.html.vue"]]);export{F as default};
