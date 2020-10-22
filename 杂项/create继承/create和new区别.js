// new Object() 通过构造函数来创建对象, 添加的属性是在自身实例下。
// Object.create() es6创建对象的另一种方式，可以理解为继承一个对象, 添加的属性是在原型下
// new Object() 方式创建
var a = {  rep : 'apple' }
var b = new Object(a)
console.log(b) // {rep: "apple"}
console.log(b.__proto__) // {}
console.log(b.rep) // {rep: "apple"}

// Object.create() 方式创建
var a = { rep: 'apple' }
var b = Object.create(a)
console.log(b)  // {}
console.log(b.__proto__) // {rep: "apple"}
console.log(b.rep) // {rep: "apple"}


// 2）创建对象属性的性质不同
// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } })

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p
//42

o.q = 12
for (var prop in o) {
   console.log(prop)
}
//"q"

delete o.p
//false



// 当用构造函数或对象字面量方法创建空对象时，对象时有原型属性的，即有_proto_;
// 当用Object.create()方法创建空对象时，对象是没有原型属性的。

// 4）__proto__ 属性
// JavaScript 的对象继承是通过原型链实现的。ES6 提供了更多原型对象的操作方法。
// __proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象。目前只有浏览器环境必须部署有这个属性，其他运行环境不一定要部署，因此不建议使用这个属性，而是使用下面这些来 Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。
