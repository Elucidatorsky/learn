// 数据劫持
// 将整个对象作为响应式
var data = {
  name: "abc",
  age: 18,
  like: {
    fruit: apple,
    game: "300"
  }
}
observe(data)
  // 取
  let name = data.name
  // 设置
  data.name = 'qwe'
function observe(obj){
  // 遍历每个对象并拿到属性
  Object.keys(obj).forEach((key)=>{
    defineReactive(obj, key, obj[key])
  })
}
function defineReactive(obj, key, val){
  if(val!==null&&typeof val === 'object'){
    observe(val)
  }
  Object.defineProperty(obj,key,{
    get: function(){
      return val
    },
    set: function(newval){
      val = newval
    }
  })
}