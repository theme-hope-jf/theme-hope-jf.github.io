import{a3 as s,Z as n,_ as a,a5 as e}from"./framework-61fc4e0a.js";const l={},i=e(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="устаревшее" tabindex="-1"><a class="header-anchor" href="#устаревшее" aria-hidden="true">#</a> Устаревшее</h3><ul><li><p>помечено <code>time</code> как устаревшее, вместо этого использовать <code>date</code></p></li><li><p>помечено <code>categories</code> как устаревшее, вместо этого использовать <code>category</code></p></li><li><p>помечено <code>tags</code> как устаревшее, вместо этого использовать <code>tag</code></p></li></ul><h3 id="изменения" tabindex="-1"><a class="header-anchor" href="#изменения" aria-hidden="true">#</a> Изменения</h3><ul><li><p>изменен тип <code>author</code> с <code>string | undefined</code> на <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">AuthorInfo</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Author name</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Author website</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">url</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Author email</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">email</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Это изменение позволяет вам добавлять нескольких авторов и настраивать для них сайты.</p></li><li><p><code>date</code> поддерживает только стандартную метку DateString с <code>-</code></p></li><li><p>изменен тип <code>category</code> с <code>string | undefined</code> на <code>string[] | string | undefined</code></p><p>Тема поддерживает несколько категорий.</p></li><li><p>изменен тип <code>pageInfo</code> с <code>PageInfo[] | false</code> на <code>ArticleInfo[] | false</code>.</p><p>Доступные значения изменяются с <code>&quot;author&quot;</code>, <code>&quot;time&quot;</code>, <code>&quot;category&quot;</code>, <code>&quot;tag&quot;</code>, <code>&quot;reading-time&quot;</code>, <code>&quot;word&quot;</code>, <code>&quot;visitor&quot;</code> на <code>&quot;Author&quot;</code>, <code>&quot;Date&quot;</code>, <code>&quot;Original&quot;</code>, <code>&quot;Category&quot;</code>, <code>&quot;Tag&quot;</code>, <code>&quot;ReadingTime&quot;</code>, <code>&quot;Word&quot;</code>, <code>&quot;Visitor&quot;</code></p></li><li><p>переименовано <code>sidebarDepth</code> в <code>headerDepth</code></p></li><li><p>переименовано <code>copyrightText</code> в <code>copyright</code></p></li><li><p>переименовано <code>anchorDisplay</code> в <code>toc</code></p></li><li><p>переименовано <code>updateTime</code> в <code>lastUpdated</code></p></li><li><p>изменены типы <code>prev</code> и <code>next</code> с <code>string | false</code> на <code>AutoLinkOptions | string | false</code></p><div class="language-typescript" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">AutoLinkOptions</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">icon</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><h3 id="удаления" tabindex="-1"><a class="header-anchor" href="#удаления" aria-hidden="true">#</a> Удаления</h3><ul><li><p>удалено <code>password</code></p><p>Из соображений безопасности V2 убирает этот метод шифрования исходного текста шифра.</p></li><li><p>удалено <code>copyright</code></p><p>Связанный плагин еще не совместим с V2.</p></li><li><p>удалено <code>mediaLink</code></p><p>Футер больше не отображает медиа-ссылки.</p></li></ul><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><ul><li><p>Изменен синтаксис демо-кода</p><p>До:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: demo [</span><span style="color:#61AFEF;">vue</span><span style="color:#ABB2BF;">] Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: demo [</span><span style="color:#61AFEF;">react</span><span style="color:#ABB2BF;">] Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>После:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: normal-demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: vue-demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: react-demo Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- demo content --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Группа кодов изменена на вкладку кода</p><p>До:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">:::: code-group</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: code-group-item pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">pnpm </span><span style="color:#98C379;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: code-group-item npm:active</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">npm </span><span style="color:#98C379;">init</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>После:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: code-tabs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@tab pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">pnpm </span><span style="color:#98C379;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">@tab:active npm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`bash</span></span>
<span class="line"><span style="color:#ABB2BF;">npm </span><span style="color:#98C379;">init</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vuepress-theme-hope</span><span style="color:#ABB2BF;"> [dir]</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="макет" tabindex="-1"><a class="header-anchor" href="#макет" aria-hidden="true">#</a> Макет</h2><h3 id="домашняя-страница-проекта" tabindex="-1"><a class="header-anchor" href="#домашняя-страница-проекта" aria-hidden="true">#</a> Домашняя страница проекта</h3><p>Изменены параметры frontmatter главной страницы проекта.</p><ul><li>переименовано <code>title</code> в <code>heroText</code></li><li>переименовано <code>darkHeroImage</code> в <code>heroImageDark</code></li><li>переименовано <code>action</code> в <code>actions</code></li></ul>`,13),p=[i];function o(c,d){return n(),a("div",null,p)}const t=s(l,[["render",o],["__file","page.html.vue"]]);export{t as default};
