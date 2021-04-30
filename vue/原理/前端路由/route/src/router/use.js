class Vue {
  constructor(){
    _installedPlugins: ''
  }
}
// use 帮助组件执行 1.只认install，vue想办法将Vue作为实参传给组件
Vue.use = function(plugin){ // 装到Vue的constructor里 
  // 判断插件是否生效 有值赋值 没值赋给空数组 保证组件只能用一次 vue内有一个数组专门存放插件
  const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
  if(installedPlugins.indexOf(plugin)>-1){ // 组件被使用
    return this // Vue
  }
  const args = toArray(arguments, 1) // 类数组转换为数组 // plugin可能是函数或对象
  args.unshift(this)
  if(typeof plugin.install === 'function'){
    plugin.install.apply(plugin,args)
  }else if(typeof plugin === 'function'){
    plugin.apply(null, plugin, args) // plugin是函数，apply第一个参数接收对象，第二个没要求
  }
  installedPlugins.push(plugin)
  return this
}