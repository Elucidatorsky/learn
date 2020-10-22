// apply方法使用数组指定参数，而call方法每个参数单独需要指定：

// apply(thisArg, [argsArray])
// call(thisArg, arg1, arg2, …)
// this.Arg表示指向的对象，arg1表示_proto_的方法传的形参
var user = {
  name : 'qinhuansky',
  say : function(yaya){
      console.log(this.name +'-'+ yaya)
  }
}
user.say()    //qinhuansky-undefined
var user2 = {
  name: "qin"
}
user.say.call(user2, 'haha')    //qin-haha
user.say.apply(user2,['haha']) //qin-haha

// 使用bind方法，可以为函数绑定this值，然后作为一个新的函数返回：
var newfn = user.say.bind({name: "lxy"})
newfn("haha")