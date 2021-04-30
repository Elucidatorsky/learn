// 1.创建一个空对象，这个对象将会是new Person( )返
// 回的对象实例;
// 2.将这个空对象的原型指向构造函数的原型;
// 3.将构造函数的this指向该对象，并运行构造函数;
// 4.判断构造函数返回的是不是对象，是的话返回默认对
// 象,不是的话返回之前创建的空对象,没有返回值默
// 认返回空对象
// res 是当函数有返回值时 返回值为对象时会改变作用域 new返回 函数的返回值
function _new(p,...rest){
  var obj={};
  obj.__proto__=p.prototype;
  var res = p.apply(obj,rest);
  return (typeof res === 'object' && res!= null)?res:obj;
}

// var a = new function(){
//   return String('foo3');
// }
// var b = new function(){
  // return new String('foo4')
// }
function fn(){
  return String('foo3')
}
var a = _new(fn)
function fn1(){
  return new String('foo4')
}
var b = _new(fn1)
function Per(x,y){
  this.x = x;
  this.y = y;
  return String('foo');
}
var c = _new(Per,5)
console.log(a);
console.log(b);
console.log(c);