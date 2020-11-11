let arr = [[1,2,3],[3,4,5,5],[6,7,8,9,[11,12,[12,13]]]]
// 

// function flat() {
//   let stack = [...a], res = []    
//   while (stack.length) {
//       let item = stack.pop()
//       if(Array.isArray(item)) {
//           stack.push(...item)
//       } else {
//           res.unshift(item)
//       }
//   }
//   return res
// }
var arrNew = arr.reduce(function (a, b) { return a.concat(b)} )
var arrReal = Array.isArray(new Set(arrNew))
