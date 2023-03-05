import{a3 as s,Z as n,_ as a,a4 as e,a1 as l,a5 as p}from"./framework-61fc4e0a.js";const i={},c=l("p",null,"我们永远欢迎你对项目进行贡献! 这里是一份相关指南。",-1),o=p(`<h2 id="克隆并安装项目" tabindex="-1"><a class="header-anchor" href="#克隆并安装项目" aria-hidden="true">#</a> 克隆并安装项目</h2><p>使用 Git 克隆项目到本地，并使用 <code>pnpm</code> 进行依赖的安装。</p><div class="language-bash" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">clone</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">git@github.com:vuepress-theme-hope/vuepress-theme-hope.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">pnpm </span><span style="color:#98C379;">i</span></span>
<span class="line"></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你并未安装 pnpm，请使用下列命令安装它:</p><div class="language-bash" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">corepack </span><span style="color:#98C379;">enable</span></span>
<span class="line"><span style="color:#ABB2BF;">corepack </span><span style="color:#98C379;">prepare</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">pnpm@7.28.0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--activate</span></span>
<span class="line"></span></code></pre></div></div><h2 id="项目文件结构" tabindex="-1"><a class="header-anchor" href="#项目文件结构" aria-hidden="true">#</a> 项目文件结构</h2><p>本项目是一个 monorepo，使用 pnpm 管理。</p><ul><li>docs: 放置各插件与主题的文档，每个子文件夹为一个项目</li><li>demo: 主题演示项目</li><li>packages: 放置各插件与主题的代码，每个子文件夹为一个项目</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">.</span></span>
<span class="line"><span style="color:#abb2bf;">├── .github → GitHub 配置</span></span>
<span class="line"><span style="color:#abb2bf;">├── .husky → husky 配置</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── demo → 演示项目</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── docs → 文档目录</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── auto-catalog → auto-catalog 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── blog → blog2 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── comment → comment2 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── components → components 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── copy-code → copy-code2 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── feed → feed2 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── lightgallery → lightgallery 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── md-enhance → md-enhance 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── photo-swipe → photo-swipe 文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── pwa → pwa2 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── reading-time → reading-time2 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── remove-pwa → remove-pwa 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── rtl → rtl 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── sass-palette → sass-palette 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── shared → vuepress-shared 文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── search-pro → search-pro 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── seo → seo2 插件文档</span></span>
<span class="line"><span style="color:#abb2bf;">│ └── theme → 主题文档</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── docs-shared → 文档的通用文件</span></span>
<span class="line"><span style="color:#abb2bf;">|</span></span>
<span class="line"><span style="color:#abb2bf;">├── packages → 项目源代码</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── auto-catalog → auto-catalog 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── blog2 → blog2 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── comment2 → comment2 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── components → components 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── copy-code2 → copy-code2 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── create → create-vuepress-theme-hope 助手</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── feed2 → feed2 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── lightgallery → lightgallery 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── md-enhance → md-enhance 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── photo-swipe → photo-swipe 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── pwa2 → pwa2 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── reading-time2 → reading-time2 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── remove-pwa → remove-pwa 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── rtl → rtl 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── sass-palette → sass-palette 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── search-pro → search-pro 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── seo2 → seo2 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── shared → 共享文件</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── sitemap2 → sitemap2 插件</span></span>
<span class="line"><span style="color:#abb2bf;">│ └── theme → vuepress-theme-hope 主题</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── scripts → 命令脚本</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── ... → 一些配置文件</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── LICENSE → 协议</span></span>
<span class="line"><span style="color:#abb2bf;">├── package.json → 项目根 package.json</span></span>
<span class="line"><span style="color:#abb2bf;">├── README.md → 项目介绍</span></span>
<span class="line"><span style="color:#abb2bf;">├── SECURITY.md → 安全政策文件</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">└── tsconfig.* → TypeScript 配置文件</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文档修改" tabindex="-1"><a class="header-anchor" href="#文档修改" aria-hidden="true">#</a> 文档修改</h2><p>你可以直接在 docs 文件夹内找到对应项目，并修改对应的 Markdown。</p><p>确保 <code>pnpm lint</code> 与 <code>pnpm lint:md</code> 命令没有错误后，即可提交到 GitHub 发起 PR。</p><div class="hint-container tip"><p class="hint-container-title">预览文档</p><p>由于文档使用的是本地主题和插件，因此你需要先通过 <code>pnpm build</code> 构建本地项目。</p><p>之后在 <code>docs</code> 目录下的正确文档项目文件夹打开终端，运行 <code>pnpm docs:vite-dev</code> (使用 vite) 或 <code>pnpm docs:webpack-dev</code> (使用 webpack)。</p></div><h2 id="项目修改" tabindex="-1"><a class="header-anchor" href="#项目修改" aria-hidden="true">#</a> 项目修改</h2><p>每个项目的结构都大致如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">.</span></span>
<span class="line"><span style="color:#abb2bf;">├── lib → 编译后的输出文件</span></span>
<span class="line"><span style="color:#abb2bf;">│    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    ├── client → 客户端侧代码</span></span>
<span class="line"><span style="color:#abb2bf;">│    │</span></span>
<span class="line"><span style="color:#abb2bf;">│    └── node → Node.js 侧代码</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">└── src → 源文件</span></span>
<span class="line"><span style="color:#abb2bf;">     │</span></span>
<span class="line"><span style="color:#abb2bf;">     ├── client → 客户端侧代码</span></span>
<span class="line"><span style="color:#abb2bf;">     │</span></span>
<span class="line"><span style="color:#abb2bf;">     ├── node → Node.js 侧代码</span></span>
<span class="line"><span style="color:#abb2bf;">     │</span></span>
<span class="line"><span style="color:#abb2bf;">     └── shared → 客户端和 Node.js 的共享文件</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VuePress 同时运行在客户端和 Node 端。 Node 侧有像 <code>fs</code> 这样的 node 模块，而客户端运行在有<code>document\`\`windows\`\`navigator</code>等全局变量的浏览器中，你应该清楚一段代码运行在哪里。</p><ul><li><code>client</code> 目录存储在浏览器中运行的代码</li><li><code>node</code> 目录存储在 Node.js 中运行的代码</li><li><code>shared</code> 目录存储在客户端和 Node 中使用的文件，因此代码不应引用任何浏览器全局变量或 node 模块。</li></ul><p>为了更好的性能，所有插件在发布时都会使用 rollup 进行打包并压缩。</p><h2 id="项目的运行与开发" tabindex="-1"><a class="header-anchor" href="#项目的运行与开发" aria-hidden="true">#</a> 项目的运行与开发</h2><ol><li><p>构建项目: <code>pnpm build</code></p><ul><li>使用 rollup 打包并压缩代码，并输出到 <code>lib</code> 文件夹</li><li>使用 <code>rollup-plugin-copy</code> 复制其他文件到 <code>lib</code> 文件夹</li></ul></li><li><p>开发项目: <code>pnpm dev</code></p><ul><li>使用 <code>tsc</code> 编译 TypeScript 文件到 <code>lib</code> 文件夹</li><li>Use <code>cpx</code> 复制其他文件到 <code>lib</code> 文件夹</li></ul></li><li><p>格式化项目: <code>pnpm lint</code></p><p>它将使用 prettier、eslint 和 stylelint 格式化项目。</p><p>如果你修改了 Markdown，你还需要运行 <code>pnpm lint:md</code> 命令。</p></li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请不要混用构建和开发命令，因为它们的构建方式完全不同。</p><p>你可能需要执行 <code>pnpm clean</code> 命令来清除上一次的命令结果。</p></div><h2 id="提交" tabindex="-1"><a class="header-anchor" href="#提交" aria-hidden="true">#</a> 提交</h2><p>项目使用 <code>husky</code> 添加了额外的 Git Hooks 进行验证:</p><ul><li><p>在 <code>precommit</code> 阶段我们使用 <code>lint-staged</code> 配合对应 Linter 对改动的代码进行检验</p><p>这意味着你需要保证你的代码按照项目要求进行格式化，可以通过 Linter。</p></li><li><p>在 <code>commit-msg</code> 阶段我们使用 <code>commitlint</code> 对提交备注进行校验。</p><p>这意味着你需要保证你的提交注释符合语义化提交 (Semantic)</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你不能通过上述 Git Hooks，你将无法完成 <code>git commit</code>。</p><p>如果你已经进行贡献了一些内容，但无法完成提交且不会修复，你可以在提交时添加 <code>--no-verify</code> Flag 绕过 Git Hooks。</p></div>`,25);function d(b,r){return n(),a("div",null,[c,e(" more "),o])}const v=s(i,[["render",d],["__file","contribution.html.vue"]]);export{v as default};
