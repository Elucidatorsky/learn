// 保证一个类只有一个实例,并提供一个全局的访问点
// 让一个函数知道自己被new过了
class SingleDog {
  show() {
    console.log("我是一个单例对象");
  }
  static getInstance(){
    // 用静态方法判断是否被new过了
    // 将new实例赋值给 函数属性 不让你new 只让你拿 
    // 通过函数属性是否纯在判断
    let instance = null
    return !function(){
      // if错误 instance存在 且instance是实例变量 则instance无声明阶段 向外寻找变量instance
      // if正确 instance不存在 var声明instance 返回
      if(!instance){
        instance = new SingleDog()
      }
      return instance
    }()
  }
}
const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()
console.log(s1===s2);
