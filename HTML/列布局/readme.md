##  列布局
# 一：左定宽，右适应
  1. float+margin-left
  2. float+margin(fix) // 不是很懂作者意思
  3. float+overflow
    通过触发bfc达到自适应
    脱离文档流
    需手动清除浮动 否则会产生高度塌陷
  4. table-cell
    dispaly:table-cell
    利用单元格自动分配宽度
  5. 绝对定位
  6. flex
  7. grid
# 二：左适应，右定宽
  1. float+margin-left
  2. float+overflow
  3. table-cell
  4. 绝对定位
  5. flex
  6. grid
# 三：一列不定宽，一列自适应
  1. float+overflow
  2. flex
  3. grid
# 四：中间自适应，左右定宽
  1. 双飞翼布局
    左右两侧飞起来
  2. 圣杯布局
    双飞翼把翅膀拉开变成把手
    圣杯：两侧是从多出来的把手
    父元素padding提供放把手的位置
    父元素宽度即杯子宽度（中间）
    把手通过相对定位向‘左’移动
  3. grid
  4. table-cell 说实话不是很懂table系列的
    缺点：margin失效，采用border-spacing表格两边的间隔无法消除
  5. flex
  6. 绝对定位
    左右绝对定位，中间自动拉伸
# 五：等宽多列
  1. float
  2. table-cell
  3. flex
  4. grid
# 六：九宫格布局
  1. table
  2. flex
  3. grid
