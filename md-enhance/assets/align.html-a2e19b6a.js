import{a2 as B,Y as d,Z as u,a3 as y,_ as l,$ as e,a0 as s,a1 as n,a4 as o,F as a}from"./framework-aea579b9.js";const v={},b=o(`<p>通过对 <code>vuepress-plugin-container</code> 进行额外的配置注入，你可以使用</p><div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: center</span></span>
<span class="line"><span style="color:#ABB2BF;">要居中的段落</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: right</span></span>
<span class="line"><span style="color:#ABB2BF;">要居右的段落</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre></div><p>来对你的段落对齐进行自定义。</p>`,3),m=s("h2",{id:"配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),n(" 配置")],-1),h=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.ts")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"mdEnhancePlugin"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-plugin-md-enhance"'),s("span",{style:{color:"#ABB2BF"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"plugins"),s("span",{style:{color:"#ABB2BF"}},": [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#61AFEF"}},"mdEnhancePlugin"),s("span",{style:{color:"#ABB2BF"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 启用自定义对齐")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"align"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#D19A66"}},"true"),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"};")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),F=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// .vuepress/config.js")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"mdEnhancePlugin"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-plugin-md-enhance"'),s("span",{style:{color:"#ABB2BF"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"default"),s("span",{style:{color:"#ABB2BF"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#E06C75"}},"plugins"),s("span",{style:{color:"#ABB2BF"}},": [")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#61AFEF"}},"mdEnhancePlugin"),s("span",{style:{color:"#ABB2BF"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 启用自定义对齐")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#E06C75"}},"align"),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#D19A66"}},"true"),s("span",{style:{color:"#ABB2BF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  ],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"};")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A=s("h2",{id:"演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),n(" 演示")],-1),g={class:"hint-container danger"},_=s("p",{class:"hint-container-title"},"W.I.P",-1),C=s("p",null,"VuePress Theme Hope V2 版本仍在制作中，API 可能会有",-1),x=s("div",{style:{"text-align":"center"}},[s("p",null,"重大的变动。")],-1),E=s("p",null,"如果你在使用过程中遇到了 bug，可以",-1),f={style:{"text-align":"right"}},D={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues",target:"_blank",rel:"noopener noreferrer"},k=o(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">:::: danger W.I.P</span></span>
<span class="line"><span style="color:#ABB2BF;">VuePress Theme Hope V2 版本仍在制作中，API 可能会有</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: center</span></span>
<span class="line"><span style="color:#ABB2BF;">重大的变动。</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">如果你在使用过程中遇到了 bug，可以</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: right</span></span>
<span class="line"><span style="color:#ABB2BF;">[</span><span style="color:#61AFEF;">提一个 issue</span><span style="color:#ABB2BF;">]</span><span style="color:#E06C75;">(</span><span style="color:#C678DD;text-decoration:underline;">https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues</span><span style="color:#E06C75;">)</span><span style="color:#ABB2BF;">。</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function P(V,I){const i=a("CodeTabs"),c=a("ExternalLinkIcon");return d(),u("div",null,[b,y(" more "),m,l(i,{id:"11",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:r,value:t,isActive:p})=>[h]),tab1:e(({title:r,value:t,isActive:p})=>[F]),_:1}),A,s("div",g,[_,C,x,E,s("div",f,[s("p",null,[s("a",D,[n("提一个 issue"),l(c)]),n("。")])])]),k])}const N=B(v,[["render",P],["__file","align.html.vue"]]);export{N as default};
