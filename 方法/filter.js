var a = [
  {name: 1, isLive: false},
  {name: 2, isLive: true},
  {name: 2, isLive: true},
  {name: 4, isLive: false},
]
var b = a.filter(c => c.isLive)
// var c = a.filter(function(currentValue,index,arr) {
//   // console.log("currentValue",currentValue);//当前遍历的元素
//   // console.log("index",index); //当前下标
//   // console.log("arr",arr); //该数组
//   console.log(this); // 2
//   return this+currentValue.name > 4
// }, 2)
// var str = ['a','a','c','a']
// // indexOf总是返回第一个元素的位置
// var d = str.filter((currentValue,index,arr) => {
//   console.log(arr.indexOf(currentValue)," ",index);
//   return arr.indexOf(currentValue)===index}
//   ) // 去重 无法对对象进行操作
// // console.log(a);
// // console.log(b);
// // console.log(c);
// console.log(d);
// console.log(a[2]===a[3]); // false

// 对基本类型是深拷贝 对象类型不是
// var str1 = [{a:1},{b:2},3,4,5,6]
// var strF = str1.filter(()=>true)
// str1[1].a=2
// console.log(strF,str1,str1===strF);
