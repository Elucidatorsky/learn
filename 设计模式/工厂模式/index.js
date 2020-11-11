const lin = {
  name: '林',
  age: '21',
  career: 'coder'
}
const su = {
  name: '苏',
  age: '22',
  career: 'manager'
}

function User(name, age, career){
  this.name = name
  this.age = age
  this.career = career
  this.work = work
}
// const user = new User(name,age,career)

// 变的属性 不变的属性
function Coder(name, age){
  this.name = name
  this.age = age
  this.career = 'coder'
  this.work = ['写代码','写系统','修bug']
}

function ProductManager(name,age){
  this.name = name
  this.age = age
  this.career = 'Product Manager'
  this.work = ['订会议室','写ppt','催更']
}
// 要写很多实例化对象 利用工厂模式无脑传参
function Factory(name,age,career){
  let work
  switch (canner) {
    case 'coder':
      work = ['写代码','写系统','修bug']
      break;
    case 'Product Manager':
      work = ['订会议室','写ppt','催更']
      break;
    case 'boss':
      work = []
      break;
    default:
      break;
  }
  return new User(name,age,career,work)
}