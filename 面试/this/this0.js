// var obj = {
//   a: 1,
//   b: this.a
// }
// console.log(obj.b);
var d = function () {
  return this.a;
}
var o = {
  a:1,  b:function(){ return this.a },
  c: d
}

var fun = o.b
var fun1 = o.b()
console.log(fun(),fun1);
var f = o.c
var f1 = o.c()
console.log(f(),f1,d());
// 对象内调用 调用对象里的 key 不意味着调用 对象里的 value 
// 若 key 对应的是方法 可以通过调用key加上()即通过对象调用value方法