<textarea> 标签定义一个多行的文本输入控件。
文本区域中可容纳无限数量的文本

# autofocus [New]	
autofocus	规定当页面加载时，文本区域自动获得焦点。
# cols
number	规定文本区域内可见的宽度。
# rows	
number	规定文本区域内可见的行数。
# disabled	
disabled	规定禁用文本区域。
# form [New]	
form_id	定义文本区域所属的一个或多个表单。
# maxlength [New]	
number	规定文本区域允许的最大字符数。
# name	
text	规定文本区域的名称。
# placeholder [New]	
text	规定一个简短的提示，描述文本区域期望的输入值。
# readonly	
readonly	规定文本区域为只读。
# required [New]	
required	规定文本区域是必需的/必填的。
# wrap [New]	
soft	默认，在到达元素最大宽度的时候，换行显示，但不会自动插入换行符，也就是提交表单时没有换行符。
hard	在文本到达元素最大宽度的时候，浏览器自动插入换行符(CR+LF) 。在也就是提交表单也提交了换行符。当使用 "hard" 时，需要指定 cols 属性。
规定当提交表单时，文本区域中的文本应该怎样换行。