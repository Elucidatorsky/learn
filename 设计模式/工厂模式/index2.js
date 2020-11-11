// 抽象工厂
// 一个公司每个员工 权限 工种不一样 index.js只能逐个添加
// 要有可拓展性

// 创建 锤子手机 类 继承 手机 函数
class HammerPhoneFactory extends MobilePhoneFactory {
  // 提供手机操作系统的接口 多种操作系统
  createOS(){
    return new AndroidOS()
  }
  // 提供手机硬件的系统
  createHardWare(){
    return new QulcommHardWare()
  }
}
// 单独把创建系统的函数抽出来 抽象方法
class OS{
  // 控制硬件 抽象方法不允许直接调用
  controlOS(){
    throw new Error('需要重写')
  }
}
// 生产系统
class AndroidOS extends OS{
  controlOS(){
    console.log('我会用安卓的操作系统');
  }
}
class AppleOS extends OS{
  controlOS(){
    console.log('我会用苹果的操作系统');
  }
}
class HardWare{
  operateByOrder(){
    throw new Error('需要重写')
  }
}
// 生产硬件
class QulcommHardWare extends HardWare{
  operateByOrder(){
    console.log('我会用高通硬件');
  }
}
class MiHardWare extends HardWare{
  operateByOrder(){
    console.log('我会用小米硬件');
  }
}
// 想生产新型手机 只需要继承原生产线 (可拓展性)
class newPhoneFactory extends MobilePhoneFactory{
  createOS(){
    //...
  }
  createHardWare(){
    //...
  }
}

// 生产手机
const myPhone = new HammerPhoneFactory()
const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()
// 可以看到使用什么系统 硬件
myOS.controlOS()
myHardWare.operateByOrder()

