// Array.prototype.copyWithin(target, start = 0, end = this.length)
// 数组内复制（会覆盖原有成员），然后返回当前数组
// 会修改当前数组
// target: 被替换位置 start: 复制开始位置 end：复制结束位置 均可为负数
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]
