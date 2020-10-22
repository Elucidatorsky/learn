var a = 'foo' == new function(){return String('foo')};
var b = 'foo' == new function(){return new String('foo')};
console.log(a,b);

var a1 = function(){
  return String('foo')
}
var a2 = function(){
  return new String('foo')
}
var a3 = new function(){
  return String('foo')
}
var a4 = new function(){
  return new String('foo')
}
var a11 = new a1(); // a11 = a3?
var a21 = new a2(); // a21 = a4?
var b1 = String('foo') // b1 = log a1
var b2 = new String('foo') // b2 = log a2
console.log(a1,a1(),a2,a2(),a3,a4," a11: ",a11," a21: ",a21,b1,b2);
console.log(typeof(a1()),typeof(a2()),typeof(a3),typeof(a4),typeof(a11),typeof(a21),typeof(b1),typeof(b2));
console.log(a11==a3,a21==a4);
// console.log(new new String('foo'));

// // new function(){xxx} 等同于 var a = new funcion(){xxx}

// // 对于 new function()
// // 构造器constructor中,返回的是一个原始类型"foo",则new表达式创建一个匿名对象,等同于var
// // foo1=new function(){/* something */}，如下：
// var foo1= new function() {
//     return String('foo')   //String('foo') 相当于 'foo'
// };
// alert(foo1);  //[object Object]

// // 构造器constructor中,返回了一个对象
// // 那么new String(‘foo’)将会覆盖整个new function(){/* */}
// // 即等同于var foo2=new String(“foo”);如下：
// var foo2= new function() {
//   return new String('foo')   //new String('foo') 返回的是String {"foo"}对象
// };
// alert(foo2);  //'foo'

// 'foo' == new function() { return String('foo') };
// //相当于
// 'foo' == new function() { return 'foo' } 
// // 'foo' ==  [object Object]  //false
// 'foo' == new function() { return new String('foo') };
// //相当于
// 'foo' == new String('foo')  //true
// //这里因为是 == ；所以会先进行类型的转换，再比较 所以返回的是true
