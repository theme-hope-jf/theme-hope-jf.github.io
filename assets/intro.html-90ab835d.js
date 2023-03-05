import{a3 as p,Z as B,_ as y,a1 as s,a2 as l,$ as n,a0 as e,D as o}from"./framework-61fc4e0a.js";const d={},u=s("h2",{id:"концепции-конфигурации",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#концепции-конфигурации","aria-hidden":"true"},"#"),l(" Концепции конфигурации")],-1),m=s("p",null,[l("VuePress в основном хранит конфигурацию и необходимые файлы в папке "),s("code",null,".vuepress/"),l(" в каталоге.")],-1),F={class:"hint-container info"},h=s("p",{class:"hint-container-title"},"Инфо",-1),v=s("p",null,"В VuePress есть три концепции конфигурации:",-1),A=s("ul",null,[s("li",null,"Конфигурация сайта: это объект, который вы экспортируете непосредственно в файл конфигурации"),s("li",null,[l("Конфиг темы: параметры, переданные в функцию "),s("code",null,"hopeTheme")]),s("li",null,"Конфигурация страницы: предоставляется Frontmatter в верхней части страницы на основе синтаксиса YAML")],-1),b=s("h2",{id:"использование-темы",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#использование-темы","aria-hidden":"true"},"#"),l(" Использование темы")],-1),f=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"defineUserConfig"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress"'),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-theme-hope"'),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#61AFEF"}},"defineUserConfig"),s("span",{style:{color:"#ABB2BF"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// siteConfig here")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// ...")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"theme"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#61AFEF"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// themeConfig here")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// ...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  }),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"});")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),_=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"defineUserConfig"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress"'),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-theme-hope"'),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#61AFEF"}},"defineUserConfig"),s("span",{style:{color:"#ABB2BF"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// siteConfig here")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// ...")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"theme"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#61AFEF"}},"hopeTheme"),s("span",{style:{color:"#ABB2BF"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// themeConfig here")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// ...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  }),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"});")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function C(D,E){const a=o("RouterLink"),t=o("CodeTabs");return B(),y("div",null,[u,m,s("div",F,[h,s("p",null,[l("Файловую структуру VuePress см. в разделе "),n(a,{to:"/ru/cookbook/vuepress/file.html"},{default:e(()=>[l("Основы VuePress → Структура файла")]),_:1}),l(".")])]),v,A,b,n(t,{id:"34",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:c,value:i,isActive:r})=>[f]),tab1:e(({title:c,value:i,isActive:r})=>[_]),_:1})])}const x=p(d,[["render",C],["__file","intro.html.vue"]]);export{x as default};