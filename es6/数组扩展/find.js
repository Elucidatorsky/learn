var arr = [1,2,5,7,9]
// find方法
// 找出第一个符合条件的数组成员并返回，没有返回undefined
let arrFind = arr.find((x)=>{
  return x>4
}) // arrFind === 5

// findIndex 顾名思义 找出第一个符合条件的数组成员返回下标值 没有返回-1
let arrFindIndex = arr.findIndex(x=>x>4) // arrFindIndex === 2

// 这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 4};
arr.find(f, person);    // 5

// 这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足
[NaN].indexOf(NaN)
// -1
[NaN].findIndex(y => Object.is(NaN, y))
// 0