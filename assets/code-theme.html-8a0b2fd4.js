import{a3 as t,Z as r,_ as p,a1 as l,$ as c,a0 as e,a5 as d,a2 as s,D as B}from"./framework-61fc4e0a.js";const u={},y=d('<h2 id="使用-prism-js-高亮" tabindex="-1"><a class="header-anchor" href="#使用-prism-js-高亮" aria-hidden="true">#</a> 使用 Prism.js 高亮</h2><p><code>vuepress-theme-hope</code> 捆绑了 <code>@vuepress/plugin-prismjs</code> 以默认支持代码高亮，我们允许您全局设置日间模式和夜间模式的代码块主题。</p><p>默认情况下，我们分别为在日间模式和夜间模式使用 <code>one-light</code> 和 <code>one-dark</code> 主题，您可以通过在 <code>plugin.prismjs</code> 中设置 <code>light</code> 和 <code>dark</code> 来更改它们。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>处于对输出样式大小的考量，我们不会全局引入所有样式。所以我们不支持在代码块单独配置主题。</p></div><h3 id="可用的主题" tabindex="-1"><a class="header-anchor" href="#可用的主题" aria-hidden="true">#</a> 可用的主题</h3><div class="hint-container info"><p class="hint-container-title">浅色主题</p><ul><li>ateliersulphurpool-light</li><li>coldark-cold</li><li>coy</li><li>duotone-light</li><li>ghcolors</li><li>gruvbox-light</li><li>material-light</li><li>one-light</li><li>vs</li></ul></div><div class="hint-container info"><p class="hint-container-title">深色主题</p><ul><li>atom-dark</li><li>cb</li><li>coldark-dark</li><li>dark</li><li>dracula</li><li>duotone-dark</li><li>duotone-earth</li><li>duotone-forest</li><li>duotone-sea</li><li>duotone-space</li><li>gruvbox-dark</li><li>holi</li><li>hopscotch</li><li>lucario</li><li>material-dark</li><li>material-oceanic</li><li>night-owl</li><li>nord</li><li>one-dark</li><li>pojoaque</li><li>shades-of-purple</li><li>solarized-dark-atom</li><li>tomorrow</li><li>vsc-dark-plus</li><li>xonokai</li><li>z-touch</li></ul></div><h2 id="使用-shiki-高亮器" tabindex="-1"><a class="header-anchor" href="#使用-shiki-高亮器" aria-hidden="true">#</a> 使用 Shiki 高亮器</h2><p>Prism.js 快速且轻量，但它无法正确高亮所有语法。如果你想要更准确的高亮结果，可以使用 <code>@vuepress/plugin-shiki</code>。</p>',9),h=l("li",null,[l("p",null,[s("通过在主题选项中设置 "),l("code",null,"plugins.prismjs: false"),s(" 来禁用 "),l("code",null,"@vuepress/plugin-prismjs"),s(" 插件。")])],-1),v=l("p",null,"安装插件:",-1),m=l("div",{class:"language-bash","data-ext":"sh"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"pnpm "),l("span",{style:{color:"#98C379"}},"add"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#D19A66"}},"-D"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"@vuepress/plugin-shiki@next")]),s(`
`),l("span",{class:"line"})])])],-1),A=l("div",{class:"language-bash","data-ext":"sh"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"yarn "),l("span",{style:{color:"#98C379"}},"add"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#D19A66"}},"-D"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"@vuepress/plugin-shiki@next")]),s(`
`),l("span",{class:"line"})])])],-1),F=l("div",{class:"language-bash","data-ext":"sh"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"npm "),l("span",{style:{color:"#98C379"}},"i"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#D19A66"}},"-D"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"@vuepress/plugin-shiki@next")]),s(`
`),l("span",{class:"line"})])])],-1),b=l("p",null,"导入 shiki 插件并使用:",-1),g=l("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.ts")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C678DD"}},"import"),l("span",{style:{color:"#ABB2BF"}}," { "),l("span",{style:{color:"#E06C75"}},"shikiPlugin"),l("span",{style:{color:"#ABB2BF"}}," } "),l("span",{style:{color:"#C678DD"}},"from"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},'"@vuepress/plugin-shiki"'),l("span",{style:{color:"#ABB2BF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C678DD"}},"import"),l("span",{style:{color:"#ABB2BF"}}," { "),l("span",{style:{color:"#E06C75"}},"defineUserConfig"),l("span",{style:{color:"#ABB2BF"}}," } "),l("span",{style:{color:"#C678DD"}},"from"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},'"vuepress"'),l("span",{style:{color:"#ABB2BF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C678DD"}},"export"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#C678DD"}},"default"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#61AFEF"}},"defineUserConfig"),l("span",{style:{color:"#ABB2BF"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"  "),l("span",{style:{color:"#E06C75"}},"plugins"),l("span",{style:{color:"#ABB2BF"}},": [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"    "),l("span",{style:{color:"#61AFEF"}},"shikiPlugin"),l("span",{style:{color:"#ABB2BF"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"      "),l("span",{style:{color:"#7F848E","font-style":"italic"}},"// 你的选项")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"      "),l("span",{style:{color:"#E06C75"}},"theme"),l("span",{style:{color:"#ABB2BF"}},": "),l("span",{style:{color:"#98C379"}},'"one-dark-pro"'),l("span",{style:{color:"#ABB2BF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"    }),")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"});")]),s(`
`),l("span",{class:"line"})])]),l("div",{class:"line-numbers","aria-hidden":"true"},[l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"})])],-1),k=l("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.js")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C678DD"}},"import"),l("span",{style:{color:"#ABB2BF"}}," { "),l("span",{style:{color:"#E06C75"}},"shikiPlugin"),l("span",{style:{color:"#ABB2BF"}}," } "),l("span",{style:{color:"#C678DD"}},"from"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},'"@vuepress/plugin-shiki"'),l("span",{style:{color:"#ABB2BF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C678DD"}},"export"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#C678DD"}},"default"),l("span",{style:{color:"#ABB2BF"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"  "),l("span",{style:{color:"#E06C75"}},"plugins"),l("span",{style:{color:"#ABB2BF"}},": [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"    "),l("span",{style:{color:"#61AFEF"}},"shikiPlugin"),l("span",{style:{color:"#ABB2BF"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"      "),l("span",{style:{color:"#7F848E","font-style":"italic"}},"// 你的选项")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"      "),l("span",{style:{color:"#E06C75"}},"theme"),l("span",{style:{color:"#ABB2BF"}},": "),l("span",{style:{color:"#98C379"}},'"one-dark-pro"'),l("span",{style:{color:"#ABB2BF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"    }),")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"};")]),s(`
`),l("span",{class:"line"})])]),l("div",{class:"line-numbers","aria-hidden":"true"},[l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"})])],-1),_=l("li",null,[l("p",null,[s("根据您要使用的主题，通过在 "),l("code",null,".vuepress/styles/config.scss"),s(" 中添加这些变量来设置代码块的背景颜色和字体颜色：")]),l("ul",null,[l("li",null,[l("code",null,"$code-bg-color"),s(": 代码块的背景颜色")]),l("li",null,[l("code",null,"$code-color"),s(": 代码块的字体颜色")])])],-1);function C(f,D){const i=B("CodeTabs");return r(),p("div",null,[y,l("ol",null,[h,l("li",null,[v,c(i,{id:"216",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:e(({title:n,value:o,isActive:a})=>[m]),tab1:e(({title:n,value:o,isActive:a})=>[A]),tab2:e(({title:n,value:o,isActive:a})=>[F]),_:1})]),l("li",null,[b,c(i,{id:"232",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:n,value:o,isActive:a})=>[g]),tab1:e(({title:n,value:o,isActive:a})=>[k]),_:1})]),_])])}const E=t(u,[["render",C],["__file","code-theme.html.vue"]]);export{E as default};
