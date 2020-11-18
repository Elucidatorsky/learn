// Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值
// includes(item ,index) item: 需要寻找的值 index: 开始查找位置
[1,2,3,4].includes(3, 1) // true
[1,2,3,4].includes(3,3) // false

// es5: indexOf() 有则返回下标 无则返回-1 无法判断NaN

// 使用遍历方法可以实现类似效果
[1,2,3,4].some(e => e==3)
