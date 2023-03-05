import{a3 as s,Z as n,_ as a,a4 as e,a1 as l,a5 as i}from"./framework-61fc4e0a.js";const p={},c=l("p",null,"Мы всегда рады каждому внести свой вклад! Вот руководство для вас.",-1),o=i(`<h2 id="клонировать-и-установить-проект" tabindex="-1"><a class="header-anchor" href="#клонировать-и-установить-проект" aria-hidden="true">#</a> Клонировать и установить проект</h2><p>Используйте Git для клонирования проекта на локальный сервер и используйте pnpm для установки зависимостей.</p><div class="language-bash" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">clone</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">git@github.com:vuepress-theme-hope/vuepress-theme-hope.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">pnpm </span><span style="color:#98C379;">i</span></span>
<span class="line"></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Если вы не установили pnpm, установите его с помощью следующей команды.</p><div class="language-bash" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">corepack </span><span style="color:#98C379;">enable</span></span>
<span class="line"><span style="color:#ABB2BF;">corepack </span><span style="color:#98C379;">prepare</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">pnpm@7.28.0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--activate</span></span>
<span class="line"></span></code></pre></div></div><h2 id="структура-фаилов-проекта" tabindex="-1"><a class="header-anchor" href="#структура-фаилов-проекта" aria-hidden="true">#</a> Структура файлов проекта</h2><p>Проект представляет собой монорепозиторий, управляемый pnpm.</p><ul><li><code>docs</code>: размещение документации каждого плагина и темы, каждый подкаталог является проектом</li><li><code>demo</code>: демонстрационный проект темы</li><li><code>packages</code>: размещение кода каждого плагина и темы, каждый подкаталог является проектом</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">.</span></span>
<span class="line"><span style="color:#abb2bf;">├── .github → GitHub config</span></span>
<span class="line"><span style="color:#abb2bf;">├── .husky → husky config</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── demo → Demo projects</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── docs → document directory</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── auto-catalog → auto-catalog plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── blog → blog2 plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── comment → comment2 plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── components → components plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── copy-code → copy-code2 plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── feed → feed2 plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── lightgallery → lightgallery plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── md-enhance → md-enhance plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── photo-swipe → photo-swipe document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── pwa → pwa2 plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── reading-time → reading-time2 plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── rtl → rtl plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── remove-pwa → remove-pwa plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── sass-palette → sass-palette plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── search-pro → search-pro plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── seo → seo2 plugin document</span></span>
<span class="line"><span style="color:#abb2bf;">│ └── theme → theme document</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── packages → project source code</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── auto-catalog → auto-catalog plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── blog2 → blog2 plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── comment2 → comment2 plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── components → components plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── copy-code2 → copy-code2 plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── create → create-vuepress-theme-hope helper</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── feed2 → feed2 plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── lightgallery → lightgallery plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── md-enhance → md-enhance plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── photo-swipe → photo-swipe plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── pwa2 → pwa2 plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── reading-time2 → reading-time2 plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── remove-pwa → remove-pwa plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── rtl → rtl plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── sass-palette → sass-palette plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── search-pro → search-pro plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── seo2 → seo2 plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── shared → shared file</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── sitemap2 → sitemap2 plugin</span></span>
<span class="line"><span style="color:#abb2bf;">│ └── theme → vuepress-theme-hope theme</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── scripts → command scripts</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── ... → some config files</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">├── LICENSE → License</span></span>
<span class="line"><span style="color:#abb2bf;">├── package.json → root package.json</span></span>
<span class="line"><span style="color:#abb2bf;">├── README.md → project intro</span></span>
<span class="line"><span style="color:#abb2bf;">├── SECURITY.md → Security Policy</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">└── tsconfig.* → TypeScript config file</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="модификация-документации" tabindex="-1"><a class="header-anchor" href="#модификация-документации" aria-hidden="true">#</a> Модификация документации</h2><p>Вы можете найти соответствующий проект в каталоге документации, чтобы вы могли напрямую изменить соответствующий Markdown.</p><p>Убедившись, что команды <code>pnpm lint</code> и <code>pnpm lint:md</code> не выдают ошибок, вы можете зафиксировать на GitHub открытие PR.</p><div class="hint-container tip"><p class="hint-container-title">Предпросмотр документации</p><p>Поскольку в документации используются локальные темы и плагины, вам необходимо сначала собрать локальный проект с помощью <code>pnpm build</code>.</p><p>Чтобы начать предварительный просмотр, перейдите к нужному проекту в каталоге <code>docs</code>, затем запустите <code>pnpm docs:vite-dev</code> (используя vite) или <code>pnpm docs:webpack-dev</code> (используя webpack).</p></div><h2 id="модификация-проекта" tabindex="-1"><a class="header-anchor" href="#модификация-проекта" aria-hidden="true">#</a> Модификация проекта</h2><p>Структура каждого проекта следующая:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">.</span></span>
<span class="line"><span style="color:#abb2bf;">├── lib → compiled output file</span></span>
<span class="line"><span style="color:#abb2bf;">│ │</span></span>
<span class="line"><span style="color:#abb2bf;">│ ├── client → client-side compiled code</span></span>
<span class="line"><span style="color:#abb2bf;">│ │</span></span>
<span class="line"><span style="color:#abb2bf;">│ └── node → Node.js side compiled code</span></span>
<span class="line"><span style="color:#abb2bf;">│</span></span>
<span class="line"><span style="color:#abb2bf;">└── src → source file</span></span>
<span class="line"><span style="color:#abb2bf;">  │</span></span>
<span class="line"><span style="color:#abb2bf;">  ├── client → client-side source code</span></span>
<span class="line"><span style="color:#abb2bf;">  │</span></span>
<span class="line"><span style="color:#abb2bf;">  ├── node → Node.js side source code</span></span>
<span class="line"><span style="color:#abb2bf;">  │</span></span>
<span class="line"><span style="color:#abb2bf;">  └── shared → Shared files between node and client</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Поскольку на стороне клиента используется модуль ES (import/export), а на стороне Node.js используются commonjs (require/exports), код в каталогах node и client не может иметь перекрестных ссылок.</p><ul><li>каталог <code>client</code> хранит клиентский код, скомпилированный в формате esm</li><li>каталог <code>node</code> хранит код Node.js, скомпилированный в формате cjs</li><li>каталог <code>shared</code> в основном хранит типы TypeScript и скомпилирован в формате cjs. На него могут ссылаться каталоги client и node.</li></ul><p>Для повышения производительности все плагины упаковываются и минимизируются с помощью накопительного пакета при их публикации.</p><h2 id="разработка-проекта" tabindex="-1"><a class="header-anchor" href="#разработка-проекта" aria-hidden="true">#</a> Разработка проекта</h2><h3 id="как-собрать" tabindex="-1"><a class="header-anchor" href="#как-собрать" aria-hidden="true">#</a> Как собрать</h3><ul><li>Для лучшей производительности все плагины упаковываются и минимизируются с помощью <code>rollup</code> при их публикации.</li><li>Используйте пакет <code>cpx</code> для копирования и просмотра файлов других форматов из исходного файла в каталог вывода.</li></ul><h3 id="команда" tabindex="-1"><a class="header-anchor" href="#команда" aria-hidden="true">#</a> Команда</h3><ol><li><p>Сборка проекта: <code>pnpm build</code></p><ul><li>Используйте rollup пакет для объединения исходных файлов и их минимизации, а также вывод результатов в папку <code>lib</code></li><li>Используйте <code>rollup-plugin-copy</code>, чтобы скопировать другие файлы в папку <code>lib</code></li></ul></li><li><p>Разработка проекта: <code>pnpm dev</code></p><ul><li>Используйте <code>tsc</code> для компиляции файла ts в папку <code>lib</code></li><li>Используйте <code>cpx</code>, чтобы скопировать другие файлы в папку <code>lib</code></li></ul></li><li><p>Форматирование проекта: <code>pnpm lint</code></p><p>Он отформатирует проект, используя prettier, eslint и stylelint.</p><p>Если вы изменяете Markdown, вам также необходимо запустить команду <code>pnpm lint:md</code>.</p></li></ol><div class="hint-container warning"><p class="hint-container-title">Примечание</p><p>Пожалуйста, не смешивайте команды <code>build</code> и <code>dev</code>, так как они компилируются совершенно по-разному.</p><p>Возможно, вам потребуется выполнить команду <code>pnpm clean</code>, чтобы очистить предыдущие результаты сборки.</p></div><h2 id="фиксация" tabindex="-1"><a class="header-anchor" href="#фиксация" aria-hidden="true">#</a> Фиксация</h2><p>Проект использует <code>husky</code> для добавления Git Hooks для проверки:</p><ul><li><p>На этапе <code>precommit</code>: мы используем <code>lint-staged</code> для проверки измененного кода с помощью соответствующего линтера</p><p>Это означает, что вам нужно убедиться, что ваш код отформатирован в соответствии с требованиями проекта и может пройти ЛИНТЕР-тесты.</p></li><li><p>На этапе <code>commit-msg</code>: мы используем <code>commitlint</code> для проверки комментария фиксации.</p><p>Это означает, что вам необходимо убедиться, что ваши комментарии к фиксации соответствуют семантическим</p></li></ul><div class="hint-container tip"><p class="hint-container-title">Совет</p><p>Если вы не можете пройти указанные выше Git Hooks, вы не сможете выполнить <code>git commit</code>.</p><p>Если вы уже что-то внесли, но не можете сделать коммит и не знаете, как это исправить, вы можете добавить флаг <code>--no-verify</code> при коммите, чтобы обойти Git Hooks.</p></div>`,28);function d(b,r){return n(),a("div",null,[c,e(" more "),o])}const u=s(p,[["render",d],["__file","contribution.html.vue"]]);export{u as default};
