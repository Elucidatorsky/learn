// function Fn(){
//   this.user = "追梦子";
// }
// const b = function fn1(){
//   this.name = "林翔宇"
// }
// var a = new Fn();
// console.log(a);
// console.log(Fn());
// console.log(a.user); //追梦子

// console.log(b.user);
// console.log(b);

// proptype
function A() {}//在A的原型上绑定sayA()方法
A.prototype.sayA = function(){
    console.log("from A")
}
function B(){}//让B的原型对象指向A的一个实例
B.prototype = new A();
//在B的原型上绑定sayB()方法
B.prototype.sayB = function(){
    console.log("from B")
}
//生成一个B的实例
var a1 = new A();
var b1 = new B();
//b1可以调用sayB和sayA
b1.sayB();//'from B'
b1.sayA();//'from A'