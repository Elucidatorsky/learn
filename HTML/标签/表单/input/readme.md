# accept	
audio/* video/* image/* MIME_type	规定通过文件上传来提交的文件的类型。 (只针对type="file")
# alt	
text	图片无法加载时的替代文本。 (只针对type="image")
# autocomplete  [New]
on off	autocomplete 属性规定 <input> 元素输入字段是否应该启用自动完成功能。
# autofocus [New]
autofocus	属性规定当页面加载时 <input> 元素应该自动获得焦点。
# checked	
checked 属性规定在页面加载时应该被预先选定的 <input> 元素。 (只针对 type="checkbox" 或者 type="radio")
# disabled
disabled 属性规定应该禁用的 <input> 元素(灰框)。
# form [New]
form="form_id"	form 属性规定 <input> 元素所属的一个或多个表单。
# formaction [New]
URL	属性规定当表单提交时处理输入控件的文件的 URL。(只针对 type="submit" 和 type="image")
formaction 属性覆盖 <form> 元素的 action 属性
# formenctype [New]	
application/x-www-form-urlencoded multipart/form-data text/plain	属性规定当表单数据提交到服务器时如何编码(只适合 type="submit" 和 type="image" method="post")。
formenctype 属性覆盖 <form> 元素的 enctype 属性。
# formmethod [New]	
get post	定义发送表单数据到 action URL 的 HTTP 方法。 (只适合 type="submit" 和 type="image")
# formnovalidate [New]
formnovalidate 属性覆盖 <form> 元素的 novalidate 属性。不验证输入格式
# formtarget [New]
_blank _self _parent _top framename	规定表示提交表单后在哪里显示接收到响应的名称或关键词。(只适合 type="submit" 和 type="image")
# height [New]	
pixels	规定 <input>元素的高度。(只针对type="image")
# width [New]	
pixels	width 属性规定 <input> 元素的宽度。 (只针对type="image")
# list [New]	
list="datalist_id"	属性引用 <datalist> 元素，其中包含 <input> 元素的预定义选项。
# max [New]	
number/date	属性规定 <input> 元素的最大值。
# min [New]	
number date	属性规定 <input>元素的最小值。
# maxlength	
number	属性规定 <input> 元素中允许的最大字符数。
# multiple [New]	
multiple	属性规定允许用户输入到 <input> 元素的多个值。
注意：multiple 属性适用于以下 input 类型：email 和 file
# name	
text	name 属性规定 <input> 元素的名称。
# pattern [New]	
regexp	pattern 属性规定用于验证 <input> 元素的值的正则表达式。
# placeholder [New]	
text	placeholder 属性规定可描述输入 <input> 字段预期值的简短的提示信息 。
# readonly
readonly 属性规定输入字段是只读的,不可修改。
# required [New]	
required	属性规定必需在提交表单之前填写输入字段。
# size	
number	size 属性规定以字符数计的 <input> 元素的可见宽度。
# src
URL	src 属性规定显示为提交按钮的图像的 URL。 (只针对 type="image")
# step [New]
number	step 属性规定 <input> 元素的合法数字间隔。通过点击上下符号增减数字
# type	
button 按钮
checkbox 复选框
color 拾色器
date 定义日期控件
datetime [New]	定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，基于 UTC 时区）。
datetime-local [New]	定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，不带时区）。
email [New]	定义用于 e-mail 地址的字段。
file	定义文件选择字段和 "浏览..." 按钮，供文件上传。
hidden	定义隐藏输入字段。
image	定义图像作为提交按钮。
month [New]	定义 month 和 year 控件（不带时区）。
number [New]	定义用于输入数字的字段。
password	定义密码字段（字段中的字符会被遮蔽）。
radio	定义单选按钮。
range [New]	定义用于精确值不重要的输入数字的控件（比如 slider 控件）。
reset	定义重置按钮（重置所有的表单值为默认值）。
search [New]	定义用于输入搜索字符串的文本字段。
submit	定义提交按钮。
tel [New]	定义用于输入电话号码的字段。
text	默认。定义一个单行的文本字段（默认宽度为 20 个字符）。
time [New]	定义用于输入时间的控件（不带时区）。
url [New]	定义用于输入 URL 的字段。
week [New]	定义 week 和 year 控件（不带时区）。
# value	
text	指定 <input> 元素 value 的值。