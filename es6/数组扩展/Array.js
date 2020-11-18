// Array.from将类数组对象和可迭代对象转换为数组
// ES5的写法
arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c'
}
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); 

// Array.from还可以接受第二个参数，作用类似于数组的map方法
// 用来对每个元素进行处理，将处理后的值放入返回的数组。
Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);
Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]


// Array.of() 用于将一组值，转换为数组
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
// 这个方法的主要目的，是弥补数组构造函数Array()的不足
// 因为参数个数的不同，会导致Array()的行为有差异
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
// 实现方法
function ArrayOf(){
  return [].slice.call(arguments);
}