import{a3 as s,Z as n,_ as a,a4 as e,a1 as l,a5 as i}from"./framework-61fc4e0a.js";const p={},c=l("p",null,"本教程将介绍 VuePress 项目结构。",-1),b=i(`<h2 id="vuepress-项目结构" tabindex="-1"><a class="header-anchor" href="#vuepress-项目结构" aria-hidden="true">#</a> VuePress 项目结构</h2><p>VuePress 只控制 VuePress 项目文件夹中的文件，也就是默认模板生成的 <code>src</code> 文件夹，项目下的其他文件不受 VuePress 控制。</p><p>一个基本的项目结构如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">.</span></span>
<span class="line"><span style="color:#abb2bf;">├── .github (可选的) → GitHub 配置文件存放路径</span></span>
<span class="line"><span style="color:#abb2bf;">│    └── workflow → GitHub 工作流配置</span></span>
<span class="line"><span style="color:#abb2bf;">│         └── docs-deploy.yml → 自动部署文档的工作流</span></span>
<span class="line"><span style="color:#abb2bf;">|</span></span>
<span class="line"><span style="color:#abb2bf;">├── src → 文档文件夹</span></span>
<span class="line"><span style="color:#abb2bf;">│    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    ├── .vuepress (可选的) → VuePress 配置文件夹</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    ├── dist (默认的) → 构建输出目录</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    ├── public (可选的) → 静态资源目录</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    ├── styles (可选的) → 用于存放样式相关的文件</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    │    └── client.{js,ts} (可选的) → 客户端文件</span></span>
<span class="line"><span style="color:#abb2bf;">│    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    ├── ... → 其他项目文档</span></span>
<span class="line"><span style="color:#abb2bf;">│    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    └── README.md → 项目主页</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">└── package.json → Nodejs 配置文件</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function r(o,d){return n(),a("div",null,[c,e(" more "),b])}const v=s(p,[["render",r],["__file","structure.html.vue"]]);export{v as default};
