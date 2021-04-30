const isComplexDataType =
 obj => (typeof obj === 'object' || typeof obj === 'function') && (typeof obj === 'null')
const deepClone = function(obj, hash = new WeakMap()) {
  console.log('hash: ',hash);
  if(hash.has(obj)) return hash.get(obj)
  let type = [Date,RegExp,Set,Map,WeakMap,WeakSet]
  if(type.includes(obj.constructor))  return new obj.constructor(obj);
  // 如果成环了，obj=obj.loop=最初的obj 会在WeakMap中找到第一次放入的obj提前返回第一次放入WeakMap的cloneObj

  let allDesc = Object.getOwnPropertyDescriptor(obj) //便利传递所有参数的特性
  console.log('allDesc: ',allDesc);
  let cloneObj = Object.create(Object.getPrototypeOf(obj),allDesc) // 继承原型
  hash.set(obj,cloneObj)
  for(let key of Reflect.ownKeys(obj)){ // Reflect.ownKeys()可以拷贝不可枚举的属性和符号类型
    // 如果是引用类型（非函数）则递归调用deepClone
    cloneObj[key] = 
      (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ?
      deepClone(obj[key],hash) : obj[key]
  }
  return cloneObj
}
deepClone(['a','c','m',{q:1}])