// let i = 5;
// function a(i) {
// i *= 2;
// }
// a(i);
// console.log(i)
let i = 0;
var a = [1,2,3,4]
new Array(10).forEach(() => {
i++;
});
// forEach方法在数组元素为空时会跳过执行回调函数
a.forEach(()=>{i++})
console.log(i);