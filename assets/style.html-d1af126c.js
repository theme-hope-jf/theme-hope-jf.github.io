import{a3 as a,Z as l,_ as e,a4 as o,a1 as s,a2 as n,a5 as p}from"./framework-61fc4e0a.js";const c={},i=s("p",null,[n("Вы можете изменить стили темы в "),s("code",null,".vuepress/styles"),n(", установив значения переменных в файлах "),s("code",null,"config.scss"),n(" и "),s("code",null,"palette.scss"),n(".")],-1),t=s("p",null,[n("Также вы можете добавить свои собственные стили в "),s("code",null,".vuepress/styles/index.scss"),n(".")],-1),r=p(`<h2 id="config-scss" tabindex="-1"><a class="header-anchor" href="#config-scss" aria-hidden="true">#</a> config.scss</h2><p><code>config.scss</code> используется для чистой конфигурации переменных, ниже перечислены поддерживаемые переменные и значения по умолчанию.</p><p>Отзывчивые контрольные точки:</p><ul><li><code>$pc</code></li><li><code>$laptop</code></li><li><code>$pad</code></li><li><code>$tablet</code></li><li><code>$mobile</code></li></ul><p>Блок кода (shiki only):</p><ul><li><code>$code-bg-color</code>: background color for code blocks</li><li><code>$code-color</code>: font color for code blocks</li></ul><p>Список цветов: <code>$colors</code></p><details class="hint-container details"><summary>Демо</summary><div class="language-scss" data-ext="scss"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// update pc breakpoint</span></span>
<span class="line"><span style="color:#E06C75;">$pc</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1920</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre></div></details><details class="hint-container details"><summary>Значение по умолчанию</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Content Class */</span></span>
<span class="line"><span style="color:#E06C75;">$content-class</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;.theme-hope-content&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* responsive breakpoints */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// wide screen</span></span>
<span class="line"><span style="color:#E06C75;">$pc</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1440</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// desktop</span></span>
<span class="line"><span style="color:#E06C75;">$laptop</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1280</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// narrow desktop / iPad</span></span>
<span class="line"><span style="color:#E06C75;">$pad</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">959</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// wide mobile</span></span>
<span class="line"><span style="color:#E06C75;">$tablet</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">719</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// narrow mobile</span></span>
<span class="line"><span style="color:#E06C75;">$mobile</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">419</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Color list */</span></span>
<span class="line"><span style="color:#E06C75;">$colors</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#cf1322</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">#fa541c</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">#f39c12</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">#2ecc71</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">#25a55b</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">#10a5a5</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">#096dd9</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">#aa6fe9</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">#eb2f96</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Code Block */</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// only available with shiki highlighter</span></span>
<span class="line"><span style="color:#E06C75;">$code-color</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#383a42</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#abb2bf</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$code-bg-color</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#ecf4fa</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#282c34</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="palette-scss" tabindex="-1"><a class="header-anchor" href="#palette-scss" aria-hidden="true">#</a> palette.scss</h2><p><code>palette.scss</code> используется для вставки переменных CSS, ниже приведены поддерживаемые конфигурации и значения по умолчанию.</p><div class="hint-container info"><p class="hint-container-title">Инфо</p><p>Все переменные здесь (включая недавно добавленные переменные) будут преобразованы в формат kebab-case и введены как переменные CSS.</p><p>Например, <code>$theme-color</code> будет введено как <code>--theme-color</code>, а <code>$backgroundColor</code> будет введено как <code>--$background-color</code>.</p></div><h3 id="конфигурация-цвета" tabindex="-1"><a class="header-anchor" href="#конфигурация-цвета" aria-hidden="true">#</a> Конфигурация цвета</h3><p>Для всех цветов, если они одинаковы в светлом и темном режимах, вы можете установить их напрямую; в противном случае установите переменную Sass типа Map, чтобы задать значения цвета в светлом и темном режимах соответственно.</p><p>Доступные цветовые переменные:</p><ul><li><code>$theme-color</code>: цвет темы</li><li><code>$text-color</code>: цвет текста</li><li><code>$bg-color</code>: цвет фона</li><li><code>$bg-color-secondary</code>: более светлый цвет фона</li><li><code>$bg-color-tertiary</code>: более светлый цвет фона</li><li><code>$border-color</code>: цвет границы</li><li><code>$box-shadow</code>: использование цвета тени для элементов</li><li><code>$card-shadow</code>: использование цвета тени на картах</li></ul><details class="hint-container details"><summary>Демо</summary><div class="language-scss" data-ext="scss"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// set theme color to red</span></span>
<span class="line"><span style="color:#E06C75;">$theme-color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// setting border color with a darker value</span></span>
<span class="line"><span style="color:#E06C75;">$border-color</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#ddd</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#444</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre></div></details><details class="hint-container details"><summary>Значение по умолчанию</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">$theme-color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#3eaf7c</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$text-color</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#2c3e50</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#9e9e9e</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$bg-color</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#0d1117</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$bg-color-secondary</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#f8f8f8</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#161b22</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$bg-color-tertiary</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#efeef4</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#21262c</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$border-color</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#eaecef</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#30363d</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// shadow</span></span>
<span class="line"><span style="color:#E06C75;">$box-shadow</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#f0f1f2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#282a32</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$card-shadow</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#56B6C2;">rgb</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">15</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#56B6C2;">rgb</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">30</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// constants</span></span>
<span class="line"><span style="color:#E06C75;">$black</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#000</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">$dark-grey</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#666</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#999</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">$light-grey</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#999</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#666</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">$white</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#000</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">$grey3</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#333</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#bbb</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">$grey12</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  light: </span><span style="color:#D19A66;">#bbb</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  dark: </span><span style="color:#D19A66;">#333</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="конфигурация-макета" tabindex="-1"><a class="header-anchor" href="#конфигурация-макета" aria-hidden="true">#</a> Конфигурация макета</h3><p>Доступные переменные макета:</p><p>Панель навигации:</p><ul><li><code>$navbar-height</code>: высота панели навигации</li><li><code>$navbar-horizontal-padding</code>: горизонтальное заполнение навигационной панели</li><li><code>$navbar-vertical-padding</code>: вертикальное заполнение навигационной панели</li><li><code>$navbar-mobile-height</code>: высота панели навигации на мобильных устройствах</li><li><code>$navbar-mobile-horizontal-padding</code>: горизонтальное заполнение панели навигации на мобильных устройствах</li><li><code>$navbar-mobile-vertical-padding</code>: вертикальное заполнение панели навигации на мобильных устройствах</li></ul><p>Боковая панель:</p><ul><li><code>$sidebar-width</code>: ширина боковой панели</li><li><code>$sidebar-mobile-width</code>: ширина боковой панели на мобильных устройствах</li></ul><p>Содержание:</p><ul><li><code>$content-width</code>: ширина основного содержимого</li><li><code>$home-page-width</code>: ширина содержимого главной страницы</li></ul><p>Шрифты:</p><ul><li><code>$font-family</code>: семейство шрифтов, используемое для обычного текста</li><li><code>$font-family-fancy:</code> семейство шрифтов, используемое в причудливых элементах</li></ul><p>Код:</p><ul><li><code>$font-family-code</code>: семейство шрифтов, используемое в коде</li><li><code>$line-numbers-width</code>: ширина номера строки в кодовых блоках</li></ul><p>Переход:</p><ul><li><code>$color-transition</code>: переход, используемый для цветов</li><li><code>$transform-transition</code>: переход, используемый при анимации преобразования</li></ul><details class="hint-container details"><summary>Демо</summary><div class="language-scss" data-ext="scss"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// update navbar height on mobile</span></span>
<span class="line"><span style="color:#E06C75;">$navbar-mobile-height</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3.5</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Override default font</span></span>
<span class="line"><span style="color:#E06C75;">$font-family</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Georgia, -apple-system, &quot;Nimbus Roman No9 L&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, sans-serif&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre></div></details><details class="hint-container details"><summary>Значение по умолчанию</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/* layout */</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// navbar</span></span>
<span class="line"><span style="color:#E06C75;">$navbar-height</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3.75</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$navbar-horizontal-padding</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1.5</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$navbar-vertical-padding</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0.7</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$navbar-mobile-height</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3.25</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$navbar-mobile-horizontal-padding</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$navbar-mobile-vertical-padding</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0.5</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// sidebar</span></span>
<span class="line"><span style="color:#E06C75;">$sidebar-width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">18</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$sidebar-mobile-width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">16</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// content</span></span>
<span class="line"><span style="color:#E06C75;">$content-width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">780</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$home-page-width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1160</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// font</span></span>
<span class="line"><span style="color:#E06C75;">$font-family</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, STHeiti, &quot;Microsoft YaHei&quot;, SimSun, sans-serif&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$font-family-fancy</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Georgia Pro, Crimson, Georgia, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, STHeiti, &quot;Microsoft YaHei&quot;, SimSun, sans-serif&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// code</span></span>
<span class="line"><span style="color:#E06C75;">$font-family-code</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$line-numbers-width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2.5</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// transition</span></span>
<span class="line"><span style="color:#E06C75;">$color-transition</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;0.3s ease&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$transform-transition</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;0.3s ease&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">!default</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="index-scss" tabindex="-1"><a class="header-anchor" href="#index-scss" aria-hidden="true">#</a> index.scss</h2><p>Все, что заполняет это, будет проанализировано до стандартного CSS, а затем вставлено после стилей темы и плагинов.</p><p>Таким образом, вы можете добавить новые стили или переопределить стили здесь:</p><details class="hint-container details"><summary>Демо</summary><div class="language-scss" data-ext="scss"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// make site name in navbar italic</span></span>
<span class="line"><span style="color:#D19A66;">.site-name</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-style: </span><span style="color:#D19A66;">italic</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div></details>`,38);function B(d,y){return l(),e("div",null,[i,t,o(" more "),r])}const u=a(c,[["render",B],["__file","style.html.vue"]]);export{u as default};
