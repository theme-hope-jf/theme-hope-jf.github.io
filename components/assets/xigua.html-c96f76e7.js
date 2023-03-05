import{a4 as l,_ as n,$ as d,a6 as o,a0 as i,a2 as a,a3 as t,a5 as s,F as r}from"./framework-2eced249.js";const c={},h=a("p",null,"在 Markdown 文件中嵌入西瓜视频。",-1),p=a("h2",{id:"demo",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),t(" Demo")],-1),u=a("p",null,"西瓜视频:",-1),m=s(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;XiGua id=&quot;7004391080330428964&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>带有自定义设置的西瓜视频:</p>`,2),_=s(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;XiGua</span></span>
<span class="line"><span style="color:#ABB2BF;">  id=&quot;7004391080330428964&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  autoplay</span></span>
<span class="line"><span style="color:#ABB2BF;">  time=&quot;60&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>西瓜视频 id</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>西瓜视频标题</p><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h3><ul><li>类型: <code>string | number</code></li><li>默认值: <code>100%</code></li></ul><p>西瓜视频组件宽度</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> height</h3><ul><li>类型: <code>string | number</code></li><li>必填: 否</li></ul><p>西瓜视频组件高度</p><h3 id="ratio" tabindex="-1"><a class="header-anchor" href="#ratio" aria-hidden="true">#</a> ratio</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>16 / 9</code></li></ul><p>西瓜视频组件比例，仅在高度未设置时生效</p><h3 id="autoplay" tabindex="-1"><a class="header-anchor" href="#autoplay" aria-hidden="true">#</a> autoplay</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否自动播放视频</p><h3 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h3><ul><li>类型: <code>string | number</code></li><li>必填: 否</li></ul><p>视频的开始时间 (单位: 秒)</p>`,23);function B(x,b){const e=r("XiGua");return n(),d("div",null,[h,o(" more "),p,u,i(e,{id:"7004391080330428964"}),m,i(e,{id:"7004391080330428964",autoplay:"",time:"60"}),_])}const f=l(c,[["render",B],["__file","xigua.html.vue"]]);export{f as default};
