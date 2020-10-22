function b(){this.c = 1}
function b1(){this.c = 2}
var a2 = function(){
  b1.call(this)
}
a2.call(b)

a1 = new b()
console.log(a2.c,a2.c,a1.c);
function bar() {
  var testValue = 'inner';
  
  var innser = function() {
     return testValue;
  };
  
  return innser();
}

console.log(bar()); // 没有人调用innser方法
// 只有对象才能 xxx.xxx 方法不能 
// 访问方法内变量需要return
// 调用方法内的this.xxx属性需要将方法绑定到对象上通过对象调用（this绑定） 
// b里的this指向a1 a1通过new创建了一个实例b，相当于复制了一份b到a里