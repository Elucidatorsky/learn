## action	
URL	规定当提交表单时向何处发送表单数据。

## autocompleteNew	
on/off	输入过的内容会有提示

## method 方法
规定如何发送表单数据（form-data）（表单数据会被发送到在 action 属性中规定的页面中）。
get	默认。将表单数据（form-data）以名称/值对的形式附加到 URL 中：URL?name=value&name=value。
post	以 HTTP post 事务的形式发送表单数据（form-data）。 本地文件不支持post请求
# GET
将表单数据以名称/值对的形式附加到 URL 中
URL 的长度是有限的（大约 3000 字符）
绝不要使用 GET 来发送敏感数据！（在 URL 中是可见的）
对于用户希望加入书签的表单提交很有用
GET 更适用于非安全数据，比如在 Google 中查询字符串
# POST
将表单数据附加到 HTTP 请求的 body 内（数据不显示在 URL 中）
没有长度限制
通过 POST 提交的表单不能加入书签

## enctype 属性
规定在将表单数据发送到服务器之前如何对其进行编码。
注意：只有 method="post" 时才使用 enctype 属性。
# application/x-www-form-urlencoded	默认。
在发送前对所有字符进行编码（将空格转换为 "+" 符号，特殊字符转换为 ASCII HEX 值）。
# multipart/form-data	
不对字符编码。当使用有文件上传控件的表单时，该值是必需的。
# text/plain	
将空格转换为 "+" 符号，但不编码特殊字符。

## novalidate [New]
novalidate	如果使用该属性，则提交表单时不进行验证。

## target 
规定在何处打开 action URL
# _blank	
在新窗口/选项卡中打开。
# _self	
在同一框架中打开。（默认）
# _parent	
在父框架中打开。
# _top	
在整个窗口中打开。