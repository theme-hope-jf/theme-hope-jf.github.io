import{a3 as s,Z as n,_ as e,a4 as a,a1 as l,a5 as i}from"./framework-61fc4e0a.js";const o={},c=l("p",null,"This tutorial will introduce VuePress project structure.",-1),t=i(`<h2 id="vuepress-project-structure" tabindex="-1"><a class="header-anchor" href="#vuepress-project-structure" aria-hidden="true">#</a> VuePress project structure</h2><p>VuePress only controls the files in the VuePress project folder, that is, the parameters in the previous chapter.Other files in project are not used by VuePress.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>If you used <code>docs</code> as instructed in the previous tutorial, then <code>docs</code> is your VuePress project folder.</p></div><p>A basic project structure is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">.</span></span>
<span class="line"><span style="color:#abb2bf;">├── .github (optional) → GitHub config file storage path</span></span>
<span class="line"><span style="color:#abb2bf;">│     └── workflow → GitHub workflow configuration</span></span>
<span class="line"><span style="color:#abb2bf;">│          └── docs-deploy.yml → Workflow for automatic deployment of documents</span></span>
<span class="line"><span style="color:#abb2bf;">|</span></span>
<span class="line"><span style="color:#abb2bf;">├── src → docs folder</span></span>
<span class="line"><span style="color:#abb2bf;">│    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    ├── .vuepress (optional) → VuePress config folder</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    ├── dist (default) → build output directory</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    ├── public (optional) → static resource directory</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    ├── styles (optional) → style-related files</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    ├── config.{js,ts} (optional) → the entry file of the configuration file</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    └── client.{js,ts} (optional) → client application file</span></span>
<span class="line"><span style="color:#abb2bf;">│    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    ├── ... → Other project documentation</span></span>
<span class="line"><span style="color:#abb2bf;">│    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    └── README.md → Project Homepage</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">└── package.json → Nodejs configuration file</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function r(p,b){return n(),e("div",null,[c,a(" more "),t])}const u=s(o,[["render",r],["__file","structure.html.vue"]]);export{u as default};
