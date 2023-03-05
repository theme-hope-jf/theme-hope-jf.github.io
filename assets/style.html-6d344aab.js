import{a3 as e,Z as o,_ as d,a5 as c}from"./framework-61fc4e0a.js";const l={},i=c('<h2 id="изменения-препроцессора" tabindex="-1"><a class="header-anchor" href="#изменения-препроцессора" aria-hidden="true">#</a> Изменения препроцессора</h2><p>Вся система стилей была перенесена из Stylus в Scss, что принесло следующие изменения:</p><ul><li><code>palette.styl</code> разделен на <code>config.scss</code> и <code>palette.scss</code></li><li><code>index.styl</code> изменен на <code>index.scss</code></li></ul><h2 id="изменения-стиля" tabindex="-1"><a class="header-anchor" href="#изменения-стиля" aria-hidden="true">#</a> Изменения стиля</h2><h3 id="контрольные-точки-адаптивного-макета" tabindex="-1"><a class="header-anchor" href="#контрольные-точки-адаптивного-макета" aria-hidden="true">#</a> Контрольные точки адаптивного макета</h3><p>Перемещено в <code>config.scss</code>.</p><ul><li><code>$MQWide</code> переименован в <code>$pc</code></li><li><code>$MQNormal</code> переименован в <code>$laptop</code></li><li><code>$MQNarrow</code> переименован в <code>$pad</code></li><li><code>$MQMobile</code> переименован в <code>$tablet</code></li><li><code>$MQMobileNarrow</code> переименован в <code>$mobile</code></li></ul><h3 id="макет" tabindex="-1"><a class="header-anchor" href="#макет" aria-hidden="true">#</a> Макет</h3><p>Перемещено в <code>palette.scss</code>.</p><ul><li><code>$mobileSidebarWidth</code> переименован в <code>$sidebar-mobile-width</code></li><li><code>$lineNumbersWrapperWidth</code> переименован в <code>$line-numbers-width</code></li></ul><h3 id="цвета" tabindex="-1"><a class="header-anchor" href="#цвета" aria-hidden="true">#</a> Цвета</h3><p>Перемещено в <code>palette.scss</code>.</p><ul><li><p>Добавлено <code>$bg-color-secondary</code>, <code>$bg-color-tertiary</code></p></li><li><p><code>$accentColor</code> переименован в <code>$theme-color</code></p></li><li><p><code>$textColor</code>, <code>$darkTextColor</code> объединены в <code>$text-color</code></p></li><li><p><code>$bgColor</code>, <code>$darkBgColor</code> объединены в <code>$bg-color</code></p></li><li><p><code>$bgColorLight</code>, <code>$darkBgColorLight</code> удалено</p></li><li><p><code>$bgColorBlur</code>, <code>darkBgColorBlur</code> удалено</p></li><li><p><code>$cardShadowColor</code>, <code>$darkCardShadowColor</code> объединены в <code>$card-shadow</code></p></li><li><p><code>$boxShadowColor</code>, <code>$darkBoxShadowColor</code> объединены в <code>$box-shadow</code></p></li><li><p><code>$arrowBgColor</code> удалено</p></li><li><p><code>$colorPicker</code> удалено</p><p>Теперь вам просто нужно установить цвет темы в настройках темы</p></li><li><p><code>$codeBgColor</code>, <code>$darkCodeBgColor</code> removed, please set <code>plugins.prismjs</code> (prismjs) in theme options, or configure <code>$code-bg-color</code> (shiki) in <code>config.scss</code>.</p></li></ul><h3 id="шрифт" tabindex="-1"><a class="header-anchor" href="#шрифт" aria-hidden="true">#</a> Шрифт</h3><ul><li>Добавлено <code>$font-family</code>, <code>$font-family-fancy</code> и <code>$font-family-code</code></li></ul><h3 id="переход" tabindex="-1"><a class="header-anchor" href="#переход" aria-hidden="true">#</a> Переход</h3><ul><li>Добавлено <code>$color-transition</code> и <code>$transform-transition</code></li></ul>',17),a=[i];function r(t,s){return o(),d("div",null,a)}const n=e(l,[["render",r],["__file","style.html.vue"]]);export{n as default};