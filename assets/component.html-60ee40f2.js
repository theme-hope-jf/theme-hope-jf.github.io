import{a3 as p,Z as r,_ as c,a4 as i,a1 as s,a2 as n,$ as e,a0 as d,a5 as a,D as o}from"./framework-61fc4e0a.js";const B={},y=s("p",null,"This tutorial will guide you on how to use Vue components and Vue syntax in your VuePress project.",-1),u=s("h2",{id:"import-vue-components-globally",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#import-vue-components-globally","aria-hidden":"true"},"#"),n(" Import Vue Components Globally")],-1),m=s("h3",{id:"register-via-vuepress-plugin-register-components",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#register-via-vuepress-plugin-register-components","aria-hidden":"true"},"#"),n(" Register via "),s("code",null,"@vuepress/plugin-register-components")],-1),h=s("p",null,[n("You can automatically register components via the "),s("code",null,"@vuepress/plugin-register-components"),n(" plugin.")],-1),g={href:"https://v2.vuepress.vuejs.org/reference/plugin/register-components.html",target:"_blank",rel:"noopener noreferrer"},F=a(`<h3 id="register-via-clientconfigfile" tabindex="-1"><a class="header-anchor" href="#register-via-clientconfigfile" aria-hidden="true">#</a> Register via ClientConfigFile</h3><p>You can create <code>.vuepress/client.ts</code> and register components manually.</p><div class="language-typescript" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// .vuepress/client.ts</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineClientConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;@vuepress/client&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">MyComponent</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;./MyComponent.vue&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineClientConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">enhance</span><span style="color:#ABB2BF;">: ({ </span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">router</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">siteData</span><span style="color:#ABB2BF;"> }) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">component</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;MyComponent&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">MyComponent</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre></div><h2 id="using-vue-syntax-and-components-in-markdown" tabindex="-1"><a class="header-anchor" href="#using-vue-syntax-and-components-in-markdown" aria-hidden="true">#</a> Using Vue syntax and components in Markdown</h2>`,4),v=a(`<p>If you need to import Vue components in Markdown, please note that you cannot use relative paths to import, nor write multiple <code>&lt;script&gt;</code> blocks.</p><div class="hint-container info"><p class="hint-container-title">Markdown with Vue SFC</p><p>Every Markdown file is first compiled to HTML and then converted to a Vue Single File Component (SFC). In other words, you can write Markdown files like Vue SFC:</p><p><code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> tags are directly treated as tags in Vue SFC. In other words, they are promoted from the <code>&lt;template&gt;</code> tag to the top level of the SFC. All content other than <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> tags will be compiled to HTML and then treated as <code>&lt;template&gt;</code> tags in Vue SFC.</p><p>Since Vue single-file components can only contain one <code>&lt;script&gt;</code> tag, you should avoid using more than one <code>&lt;script&gt;</code> tag in VuePress Markdown.</p><p>In addition, since Markdown will be converted to Vue single-file components in the cache directory, any relative path import will be invalid in Vue SFC.</p></div><p>In order to import your own components correctly, you need to create aliases for them, you can do this with the <code>alias</code> option:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// .vuepress/config.ts</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">getDirname</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;@vuepress/utils&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">__dirname</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getDirname</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">alias</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;@MyComponent&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">__dirname</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;components/MyComponent.vue&quot;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;MyComponent /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">import MyComponent from &quot;@MyComponent&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div><p>It&#39;s a bit more complicated, but if the component is only used in one page, importing like this has advantages:</p><ul><li>Global import means that the component code needs to be loaded when VuePress is initialized, that is, when visiting the first page</li><li>Importing in Markdown causes the component code to be included in the page code so that it will only be loaded when visiting the page</li></ul>`,7);function C(A,f){const t=o("ExternalLinkIcon"),l=o("RouterLink");return r(),c("div",null,[y,i(" more "),u,m,h,s("p",null,[n("For details about how to use the plugin, see "),s("a",g,[n("Official Documentation"),e(t)]),n(".")]),F,s("p",null,[n("You can use Vue syntax directly in Markdown, for details see "),e(l,{to:"/cookbook/vuepress/markdown.html#using-vue-in-markdown"},{default:d(()=>[n("VuePress → Markdown")]),_:1}),n(".")]),v])}const k=p(B,[["render",C],["__file","component.html.vue"]]);export{k as default};
