import{a3 as s,Z as n,_ as a,a4 as e,a1 as l,a5 as i}from"./framework-61fc4e0a.js";const o={},c=l("p",null,"В этом руководстве будет представлена структура проекта VuePress.",-1),p=i(`<h2 id="структура-проекта-vuepress" tabindex="-1"><a class="header-anchor" href="#структура-проекта-vuepress" aria-hidden="true">#</a> Структура проекта VuePress</h2><p>VuePress управляет только файлами в папке проекта VuePress, то есть параметрами из предыдущей главы. Другие файлы в проекте не используются VuePress.</p><div class="hint-container note"><p class="hint-container-title">Заметка</p><p>Если вы использовали <code>docs</code>, как указано в предыдущем уроке, <code>docs</code> — это папка вашего проекта VuePress.</p></div><p>Базовая структура проекта выглядит следующим образом:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">.</span></span>
<span class="line"><span style="color:#abb2bf;">├── .github (optional) → GitHub config file storage path</span></span>
<span class="line"><span style="color:#abb2bf;">│     └── workflow → GitHub workflow configuration</span></span>
<span class="line"><span style="color:#abb2bf;">│          └── docs-deploy.yml → Workflow for automatic deployment of documents</span></span>
<span class="line"><span style="color:#abb2bf;">|</span></span>
<span class="line"><span style="color:#abb2bf;">├── docs → project folder specified by you</span></span>
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
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function r(t,b){return n(),a("div",null,[c,e(" more "),p])}const u=s(o,[["render",r],["__file","structure.html.vue"]]);export{u as default};
