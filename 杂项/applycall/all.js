// call/apply 绑定后是立即执行，而 bind 绑定后是返回引用待调用 bind 返回的是一个新的函数，你必须调用它才会被执行
// 连续绑定.bind().bind()...无作用
// bind绑定后this后没法改变
// 当我们用一个函数调用 bind 的时候，返回的函数中会保存这三个参数。
// 所以最后调用 call 的时候执行的函数是目标函数，也就是调用了 bind 的函数，
// 传入的 this 也是 bind 调用时传入的，这些都是无法被修改的了，
// 但是参数是调用 bind 和 call 时的叠加，这是我们唯一可以修改的地方。
// 后续bind改变的this是bind内部函数的this
Function.prototype.imitateApply = function (context) {
  // 赋值作用域参数，如果没有则默认为 window，即访问全局作用域对象
  context = context || window
  // 绑定调用函数（.call之前的方法即this，前面提到过调用call方法会调用一遍自身，所以这里要存下来）
  context.invokFn = this
  // 执行调用函数，需要对是否有参数做判断，记录拿取返回值
  let result
  if (arguments[1]) {
      result = context.invokFn(...arguments[1])
  } else {
      result = context.invokFn()
  }
  // 销毁调用函数，以免作用域污染
  Reflect.deleteProperty(context, 'invokFn')
  return result
}

Function.prototype.imitateCall = function (context) {
  // 赋值作用域参数，如果没有则默认为 window，即访问全局作用域对象
  context = context || window    
  // 绑定调用函数（.call之前的方法即this，前面提到过调用call方法会调用一遍自身，所以这里要存下来）
  context.invokFn = this    
  // 截取作用域对象参数后面的参数
  let args = [...arguments].slice(1)
  // 执行调用函数，记录拿取返回值
  let result = context.invokFn(...args)
  // 销毁调用函数，以免作用域污染
  Reflect.deleteProperty(context, 'invokFn')
  return result
}

Function.prototype.imitateBind = function (context) {
  // 获取绑定时的传参
  console.log('bind this',this);
let args = [...arguments].slice(1),
      // 定义中转构造函数，用于通过原型连接绑定后的函数和调用bind的函数
      F = function () {},
      // 记录调用函数，生成闭包，用于返回函数被调用时执行
      self = this,
      // 定义返回(绑定)函数
      bound = function () {
          // 合并参数，绑定时和调用时分别传入的
          let finalArgs = [...args, ...arguments]
          
          // 改变作用域，注:aplly/call是立即执行函数，即绑定会直接调用
          // 这里之所以要使用instanceof做判断，是要区分是不是new xxx()调用的bind方法(new xxx()是对象)
          return self.call((this instanceof F ? this : context), ...finalArgs)
      }
  
  // 将调用函数的原型赋值到中转函数的原型上
  F.prototype = self.prototype
  // 通过原型的方式继承调用函数的原型
  bound.prototype = new F()
  
  return bound
}

const people = {
  names: '渣渣逆天',
  getName: function (surname) {
      return surname + this.names
  }
}

const temp = people.getName,
context = temp.imitateBind(people)
// context 里面函数是getname name:bound 使用context()方法时会执行bound
console.log('输出：' + context('屌丝'))