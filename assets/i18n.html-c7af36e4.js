import{a3 as p,Z as i,_ as o,a1 as n,$ as a,a0 as e,a2 as s,a5 as c,D as t}from"./framework-61fc4e0a.js";const r={},B=c(`<p>You can add the following options to <code>locales[localePath]</code> in theme options to customize the theme&#39;s multilingual options.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ThemeLocaleData</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Current lang code</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">lang</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Outlook</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">outlookLocales</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Theme Color</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">themeColor</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Theme mode</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">darkmode</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Fullscreen text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">fullscreen</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Blog</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">blogLocales</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 文章文字 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">article</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 文章列表文字 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">articleList</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 分类文字 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">category</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 标签文字 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">tag</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 时间轴文字 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">timeline</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 时间轴标题文字 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">timelineTitle</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 全部文字 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">all</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 个人介绍 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">intro</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 搜藏文字 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">star</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 幻灯片 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">slides</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 加密 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">encrypt</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Pagination</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">paginationLocales</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Previous page button label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">prev</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Next page button label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Navigation hint label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">navigate</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Navigation button label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">action</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Error text when invalid page number</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;">@description</span><span style="color:#7F848E;font-style:italic;"> \`$page\` will be replaced by total page number automatically</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">errorText</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Encrypt</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">encryptLocales</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Aria label for encrypt icon</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">iconLabel</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Password placeholder</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">placeholder</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Whether remember password</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">remember</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Password error hint</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">errorHint</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Navbar</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">navbarLocales</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Aria label of of the language selection dropdown</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">selectLangAriaLabel</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Language name of current locale</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">langName</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Page meta</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">metaLocales</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Author label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">author</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Writing date label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">date</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Label text marked as original</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">origin</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Page views label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">views</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Tag label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">tag</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Category label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">category</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Expect reading time label text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">readingTime</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Words label Text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">words</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Table of contents</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">toc</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Previous link</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">prev</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Next link</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">next</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * last updated text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">lastUpdated</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Contributors text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">contributors</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Edit link text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">editLink</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">routeLocales</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Skip to main content</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">skipToContent</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * 404 page title</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">notFoundTitle</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * 404 page msgs</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">notFoundMsg</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">[];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Back to homepage</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">home</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Back to last page</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">back</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * screen reader only message in \`&lt;ExternalLinkIcon&gt;\`</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">openInNewWindow</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Meanwhile, some i18n options are controlled by plugins, including:</p>`,3);function y(d,v){const l=t("ProjectLink");return i(),o("div",null,[B,n("ul",null,[n("li",null,[a(l,{name:"comment2",path:"/config/waline.html#walinelocales"},{default:e(()=>[s("plugins.comment.walineLocales")]),_:1}),s(": Waline Comment Service")]),n("li",null,[a(l,{name:"components",path:"/config.html#locales-backtotop"},{default:e(()=>[s("plugins.components.locales")]),_:1}),s(": Component locales")]),n("li",null,[a(l,{name:"copy-code2",path:"/config.html#locales"},{default:e(()=>[s("plugins.copyCode.locales")]),_:1}),s(": Code block copy button")]),n("li",null,[a(l,{name:"copyright2",path:"/config.html#locales"},{default:e(()=>[s("plugins.copyright.locales")]),_:1}),s(": Copyright information")]),n("li",null,[a(l,{name:"md-enhance",path:"/config.html#locales"},{default:e(()=>[s("plugins.mdEnhance.locales")]),_:1}),s(": Markdown enhance")]),n("li",null,[a(l,{name:"photo-swipe",path:"/config.html#locales"},{default:e(()=>[s("plugins.photoSwipe.locales")]),_:1}),s(": Photo preview")]),n("li",null,[a(l,{name:"pwa2",path:"/config.html#locales"},{default:e(()=>[s("plugins.pwa.locales")]),_:1}),s(": PWA")])])])}const m=p(r,[["render",y],["__file","i18n.html.vue"]]);export{m as default};
