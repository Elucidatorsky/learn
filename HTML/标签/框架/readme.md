## height	
pixels	规定 <iframe> 的高度。
## width 
pixels 规定<iframe> 的宽度
## name	
name	规定 <iframe> 的名称。
## sandbox [New]
如果指定了空字符串（sandbox=""），该属性对呈现在iframe框架中的内容启用一些额外的限制条件。
sandbox 属性的值既可以是一个空字符串（将会启用所有的限制），也可以是用空格分隔的一系列指定的字符串。
HTML 5通过sandbox属性提升iFrame的安全性。sandbox属性可以防止不信任的Web页面执行某些操作。
HTML 5规范的编辑Ian Hickson谈到了sandbox的好处，它可以防止如下操作：
访问父页面的DOM（从技术角度来说，这是因为相对于父页面iframe已经成为不同的源了）
执行脚本
通过脚本嵌入自己的表单或是操纵表单
对cookie、本地存储或本地SQL数据库的读写
# ""
启用所有限制条件
# allow-forms
允许表单提交
# allow-same-origin
允许将内容作为普通来源对待。如果未使用该关键字，嵌入的内容将被视为一个独立的源
# allow-scripts
允许脚本执行。
# allow-top-navigation	
嵌入的页面的上下文可以导航（加载）内容到顶级的浏览上下文环境（browsing context）。如果未使用该关键字，这个操作将不可用
## seamless [New]	
seamless	规定 <iframe> 看起来像是父文档中的一部分。(没有边框和滚动条)
## src	
URL	规定在 <iframe> 中显示的文档的 URL。
## srcdoc [New]	
HTML_code	规定页面中的 HTML 内容显示在 <iframe> 中。
srcdoc 属性规定要显示在内联框架中的页面的 HTML 内容。
提示：该属性应该与 sandbox 和 seamless 属性一起使用。
如果浏览器支持 srcdoc 属性，且指定了 srcdoc 属性，它将覆盖在 src 属性中规定的内容。
如果浏览器不支持 srcdoc 属性，且指定了 srcdoc 属性，它将显示在 src 属性中规定的文件