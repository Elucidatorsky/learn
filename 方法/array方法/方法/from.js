var arrFrom = Array.from([1,2,3],(val,index) => val*index)
console.log(arrFrom); // [0, 2, 6]
// 对数组进行浅拷贝
var arr = [1,2,3]
Array.from(arr)
// 深拷贝
var deepClone = (arr) => {
  return Array.isArray(arr) ? Array.from(arr, deepClone) : arr
}

// 填充数组
var init = 0
var length = 5
Array.from([{length}],(val,index) => init);
// Array(length).fill(init)

// 序列生成器（指定范围）
const range = (start, stop, step) => 
  Array.from([{length:(stop-start)/step+1}],(_, i)=>
    start+(i*step)
)
// range(1,10,2) // [1,3,5,7,9]

// 数组查重合并
function combine(){
  // let arr = [].concat.apply([],arguments) // 合并 将arguments绑定到[].concat方法上
  let arr = [].concat(...arguments)
  console.log(arr);
  return Array.from(new Set(arr))
}
var m = [1,2,2], n = [2,2,3,3]
console.log(combine(m, n)); // [1,2,3]
