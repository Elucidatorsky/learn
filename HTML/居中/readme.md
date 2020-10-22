# 1.行内/行内块级/图片
  text-align:center
  line-height和vertical-align:center
  font-size：0
# 2.table-cell
  display:table-cell
  vertical-align
  行内元素:text-align:center;(父元素)
  块级元素:margin 0 auto;(子元素)
  不感知margin，float和position会造成布局破坏
# 3.button作为父元素
  需要清除样式
  只适用于行内内容,ie下点击有凹陷效果
# 4.绝对定位
  top:50% left:50% translate(-50%,-50%)
  脱离文档流
# 5.绝对居中
  position: absolute;
  margin:auto;
  top:0; bottom:0; left:0; right:0
  脱离文档流
# 6.flex
  display:flex
  justify-content:center
  align-item:center
# 7.视窗居中
  使用vh
  margin:50vh auto 0 // 去掉0会出现滚动条，去掉得给body加overflow:hidden
  transformY(-50%)