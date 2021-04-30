// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
// 深拷贝一层 arr1.concat(arr2,arr3...)
const array1 = ['a', [1,2], 'c'];
const array2 = ['d', [3,4], 'f'];
const array3 = array1.concat(array2);

console.log(array3);
array1[1][0]=222
array2[1][0]=999
console.log(array3);