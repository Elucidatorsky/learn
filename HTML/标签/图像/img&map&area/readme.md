### img
## alt
text	规定图像的替代文本。
## crossorigin [New]
设置图像的跨域属性
# anonymous
对此元素的 CORS 请求将不设置凭据标志。 默认
# use-credentials
对此元素的CORS请求将设置凭证标志；这意味着请求将提供凭据。
## hight/width
pixels 定义宽高
## ismap
ismap
ismap 属性是一个布尔属性。
ismap 属性将图像定义为服务器端图像映射（图像映射指的是带有可点击区域的图像）。
当点击一个服务器端图像映射时，点击坐标（x,y）会以 URL 查询字符串的形式发送到服务器。
注意：只有当 <img> 元素属于带有有效 href 属性的 <a> 元素的后代时，才允许使用 ismap 属性。
## usemap
#mapname
usemap 属性将图像定义为客户端图像映射（图像映射指的是带有可点击区域的图像）。
usemap 属性与 <map> 元素的 name 或 id 属性相关联，以建立 <img> 与 <map> 之间的关系。
注意：只有当 <img> 元素不属于 <a> 或 <button> 元素的后代时，才允许使用 usemap 属性。
## src
URL	规定显示图像的 URL。
## loading
lazy:懒惰装载。懒加载
eager:立即装载。
auto: 浏览器将决定是否延迟加载。

### area
## alt	
text	规定区域的替代文本。如果使用 href 属性，则该属性是必需的。
## coords	
coordinates	规定区域的坐标。
## href	
URL	规定区域的目标 URL。
## hreflang [New]	
language_code	规定目标 URL 的语言。
## media [New]	
media query	规定目标 URL 是为何种媒介/设备优化的。默认：all。
## rel [New]	
规定当前文档与目标 URL 之间的关系
alternate	文档的替代版本（比如打印页、翻译或镜像）。
author	链接到文档的作者。
bookmark	用于书签的永久网址
help	链接到帮助文档
license	链接到文档的版权信息。
next	选项中的下一个文档
nofollow	nofollow 是一个HTML标签的属性值。这个标签的意义是告诉搜索引擎"不要追踪此网页上的链接"或"不要追踪此特定链接。
noreferrer	如果用户点击链接指定浏览不要发送 HTTP referer 头部信息。
prefetch	指定的目标文件应该被缓存
prev	选项中的前一个文档
search	文档链接到搜索工具
tag	当前文档的标签(关键词)
## shape
default
rect
circle
poly	规定区域的形状。
# target
_blank
_parent
_self
_top
framename	规定在何处打开目标 URL。
# type [New]
MIME_type	规定目标 URL 的 MIME 类型。
注：MIME = Multipurpose Internet Mail Extensions。