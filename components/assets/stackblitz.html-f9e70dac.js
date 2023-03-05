import{a4 as t,_ as o,$ as l,a6 as r,a0 as i,a2 as e,a3 as h,a5 as d,F as c}from"./framework-2eced249.js";const n={},s=e("p",null,"在 Markdown 文件中嵌入 StackBlitz 演示。",-1),u=e("h2",{id:"示例",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),h(" 示例")],-1),p=e("p",null,"一个 StackBlitz 项目:",-1),b=d(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;StackBlitz id=&quot;vuepress-theme-hope&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个自定义设置的 StackBlitz 项目:</p>`,2),f=d(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;StackBlitz id=&quot;vuepress-theme-hope&quot; hideExplorer hideNavigation hideDevtools /&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>StackBlitz id</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><ul><li>类型: <code>&quot;project&quot; | &quot;github&quot;</code></li><li>默认值: <code>&quot;project&quot;</code></li></ul><p>StackBlitz 项目类型。</p><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h3><ul><li>类型: <code>string | number</code></li><li>默认值: <code>100%</code></li></ul><p>StackBlitz 组件宽度。</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> height</h3><ul><li>类型: <code>string | number</code></li><li>必填：否</li></ul><p>StackBlitz 组件高度。</p><h3 id="ratio" tabindex="-1"><a class="header-anchor" href="#ratio" aria-hidden="true">#</a> ratio</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>16 / 9</code></li></ul><p>StackBlitz 组件高度宽高比，只有当未指定 <code>height</code> 时有效。</p><h3 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h3><ul><li>类型: <code>string[] | string</code></li><li>必填: 否</li></ul><p>在编辑器中打开的默认文件。</p><h3 id="initialpath" tabindex="-1"><a class="header-anchor" href="#initialpath" aria-hidden="true">#</a> initialPath</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>预览时应打开的初始 URL 路径。</p><h3 id="embed" tabindex="-1"><a class="header-anchor" href="#embed" aria-hidden="true">#</a> embed</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>嵌入 StackBlitz 演示。</p><h3 id="load" tabindex="-1"><a class="header-anchor" href="#load" aria-hidden="true">#</a> load</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否直接加载嵌入演示。(仅在嵌入视图中有效)</p><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h3><ul><li>类型: <code>&quot;dark&quot; | &quot;light&quot;</code></li><li>默认值: <code>&quot;dark&quot;</code></li></ul><p>编辑器主题。(仅在嵌入视图中有效)</p><h3 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> view</h3><ul><li>类型: <code>&quot;default&quot; | &quot;editor&quot; | &quot;preview&quot;</code></li><li>默认值: <code>&quot;preview&quot;</code></li></ul><p>默认打开的视图。</p><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;Open in StackBlitz&quot;</code></li></ul><p>打开 StackBlitz 按钮的文本。</p><h3 id="hideexplorer" tabindex="-1"><a class="header-anchor" href="#hideexplorer" aria-hidden="true">#</a> hideExplorer</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>在嵌入视图中隐藏文件资源管理器面板。</p><h3 id="hidenavigation" tabindex="-1"><a class="header-anchor" href="#hidenavigation" aria-hidden="true">#</a> hideNavigation</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>在嵌入视图中隐藏导航面板。</p><h3 id="hidedevtools" tabindex="-1"><a class="header-anchor" href="#hidedevtools" aria-hidden="true">#</a> hideDevtools</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>在编辑器预览中隐藏调试控制台。</p>`,47);function x(k,m){const a=c("StackBlitz");return o(),l("div",null,[s,r(" more "),u,p,i(a,{id:"vuepress-theme-hope"}),b,i(a,{id:"vuepress-theme-hope",hideExplorer:"",hideNavigation:"",hideDevtools:""}),f])}const q=t(n,[["render",x],["__file","stackblitz.html.vue"]]);export{q as default};