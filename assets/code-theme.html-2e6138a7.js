import{a3 as c,Z as r,_ as p,a1 as l,$ as t,a0 as e,a5 as d,a2 as s,D as u}from"./framework-61fc4e0a.js";const B={},h=d('<h2 id="with-prism-js-highlighter" tabindex="-1"><a class="header-anchor" href="#with-prism-js-highlighter" aria-hidden="true">#</a> With Prism.js Highlighter</h2><p><code>vuepress-theme-hope</code> bundles <code>@vuepress/plugin-prismjs</code> to support code highlighting by default, and we allow you to set code block themes for lightmode and darkmode globally.</p><p>By default, we use <code>one-light</code> and <code>one-dark</code> for lightmode and darkmode respectively, and you can change them by setting <code>light</code> and <code>dark</code> in <code>plugin.prismjs</code>.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Due to output size consideration, we will not import all styles globally to support code theme config per code block.</p></div><h3 id="available-themes" tabindex="-1"><a class="header-anchor" href="#available-themes" aria-hidden="true">#</a> Available Themes</h3><div class="hint-container info"><p class="hint-container-title">Light themes</p><ul><li>ateliersulphurpool-light</li><li>coldark-cold</li><li>coy</li><li>duotone-light</li><li>ghcolors</li><li>gruvbox-light</li><li>material-light</li><li>one-light</li><li>vs</li></ul></div><div class="hint-container info"><p class="hint-container-title">Dark themes</p><ul><li>atom-dark</li><li>cb</li><li>coldark-dark</li><li>dark</li><li>dracula</li><li>duotone-dark</li><li>duotone-earth</li><li>duotone-forest</li><li>duotone-sea</li><li>duotone-space</li><li>gruvbox-dark</li><li>holi</li><li>hopscotch</li><li>lucario</li><li>material-dark</li><li>material-oceanic</li><li>night-owl</li><li>nord</li><li>one-dark</li><li>pojoaque</li><li>shades-of-purple</li><li>solarized-dark-atom</li><li>tomorrow</li><li>vsc-dark-plus</li><li>xonokai</li><li>z-touch</li></ul></div><h2 id="with-shiki-highlighter" tabindex="-1"><a class="header-anchor" href="#with-shiki-highlighter" aria-hidden="true">#</a> With Shiki Highlighter</h2><p>Prism.js is fast and lightweight, but it can not highlight all syntax correctly. If you want a more accurate highlight result, you can use <code>@vuepress/plugin-shiki</code>.</p>',9),y=l("li",null,[l("p",null,[s("Disable "),l("code",null,"@vuepress/plugin-prismjs"),s(" plugin by setting "),l("code",null,"plugins.prismjs: false"),s(" in theme options.")])],-1),g=l("p",null,"Install the plugin:",-1),m=l("div",{class:"language-bash","data-ext":"sh"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"pnpm "),l("span",{style:{color:"#98C379"}},"add"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#D19A66"}},"-D"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"@vuepress/plugin-shiki@next")]),s(`
`),l("span",{class:"line"})])])],-1),b=l("div",{class:"language-bash","data-ext":"sh"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"yarn "),l("span",{style:{color:"#98C379"}},"add"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#D19A66"}},"-D"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"@vuepress/plugin-shiki@next")]),s(`
`),l("span",{class:"line"})])])],-1),v=l("div",{class:"language-bash","data-ext":"sh"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"npm "),l("span",{style:{color:"#98C379"}},"i"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#D19A66"}},"-D"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"@vuepress/plugin-shiki@next")]),s(`
`),l("span",{class:"line"})])])],-1),A=l("p",null,"Import shiki plugin and use it:",-1),F=l("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.ts")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C678DD"}},"import"),l("span",{style:{color:"#ABB2BF"}}," { "),l("span",{style:{color:"#E06C75"}},"shikiPlugin"),l("span",{style:{color:"#ABB2BF"}}," } "),l("span",{style:{color:"#C678DD"}},"from"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},'"@vuepress/plugin-shiki"'),l("span",{style:{color:"#ABB2BF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C678DD"}},"import"),l("span",{style:{color:"#ABB2BF"}}," { "),l("span",{style:{color:"#E06C75"}},"defineUserConfig"),l("span",{style:{color:"#ABB2BF"}}," } "),l("span",{style:{color:"#C678DD"}},"from"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},'"vuepress"'),l("span",{style:{color:"#ABB2BF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C678DD"}},"export"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#C678DD"}},"default"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#61AFEF"}},"defineUserConfig"),l("span",{style:{color:"#ABB2BF"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"  "),l("span",{style:{color:"#E06C75"}},"plugins"),l("span",{style:{color:"#ABB2BF"}},": [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"    "),l("span",{style:{color:"#61AFEF"}},"shikiPlugin"),l("span",{style:{color:"#ABB2BF"}},"({")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"      "),l("span",{style:{color:"#7F848E","font-style":"italic"}},"// your options")]),s(`
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
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"      "),l("span",{style:{color:"#7F848E","font-style":"italic"}},"// your options")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"      "),l("span",{style:{color:"#E06C75"}},"theme"),l("span",{style:{color:"#ABB2BF"}},": "),l("span",{style:{color:"#98C379"}},'"one-dark-pro"'),l("span",{style:{color:"#ABB2BF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"    }),")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"  ],")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ABB2BF"}},"};")]),s(`
`),l("span",{class:"line"})])]),l("div",{class:"line-numbers","aria-hidden":"true"},[l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"}),l("div",{class:"line-number"})])],-1),f=l("li",null,[l("p",null,[s("Set background color and font color for code blocks according to theme you want to use by adding these variables in "),l("code",null,".vuepress/styles/config.scss"),s(":.")]),l("ul",null,[l("li",null,[l("code",null,"$code-bg-color"),s(": background color for code blocks")]),l("li",null,[l("code",null,"$code-color"),s(": font color for code blocks")])])],-1);function _(C,D){const a=u("CodeTabs");return r(),p("div",null,[h,l("ol",null,[y,l("li",null,[g,t(a,{id:"216",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:e(({title:o,value:n,isActive:i})=>[m]),tab1:e(({title:o,value:n,isActive:i})=>[b]),tab2:e(({title:o,value:n,isActive:i})=>[v]),_:1})]),l("li",null,[A,t(a,{id:"232",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:o,value:n,isActive:i})=>[F]),tab1:e(({title:o,value:n,isActive:i})=>[k]),_:1})]),f])])}const w=c(B,[["render",_],["__file","code-theme.html.vue"]]);export{w as default};
