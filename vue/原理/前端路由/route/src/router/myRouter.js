let Vue = null;
// 当前路由状态 拿到当前路由路径是什么
class HistoryRoute{
  constructor(){
    this.current = null
  }
}
class VueRouter {
  constructor(options){
    this.mode = options.mode || 'hash';
    this.routes = options.routes || [];
    this.routesMap = this.createMap(this.routes)

    this.history = new HistoryRoute()
    this.init()
  }
  // 初始化 判断hash historay
  init(){
    if(this.mode === 'hash'){
      location.hash ? '' : location.hash='/'
      window.addEventListener('load',()=>{
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange',()=>{
        this.history.current = location.hash.slice(1)
      })
    } else {
      location.pathname ? '' : location.pathname='/'; // 有 不动 无 定位根页面
      window.addEventListener('load', ()=>{
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', ()=>{
        this.history.current = location.pathname
      })
    }
  }
  createMap(routes){
    return routes.reduce((pre,current)=>{
      pre[current.path] = current.component
      return pre
    }, {})
  }
}

VueRouter.install = function(v){
  Vue = v;
  Vue.mixin({
    beforeCreate(){
      // 取当前组件 当前组件存在且具备router $options当前实例的初始化选项
      if(this.$options && this.$options.router){ // 如果是根组件
        this._root = this // 设置属性
        this._router = this.$options.router
        // 跳转页面
        Vue.util.defineReactive(this, 'xxx', this._router.history) // 让某个对象作为响应式的
      }else{ // 若为子组件
        this._root = this.$parent && this.$parent._root // 父组件实例 若存在则赋值父组件的_root 保证相同
      }
      // 数据劫持
      Object.defineProperty(this, '$router', {
        get () {
          return this._root._router
        }
      })
      Object.defineProperty(this, '$route', {
        get () {
          return this._root._router.history.current
        }
      })
    }
  })
  Vue.component('router-link',{
    props: {
      to: String
    },
    render(h) { // 希望能够被编译成'a'标签 vue的render高阶函数
      // return h('a',{},'首页')
      let mode = this._self._root._router.mode
      let to = mode === 'hash' ? '#' + this.to : this.to
      return h('a',{attrs:{href: to}},this.$slots.default)
    }
  })
  Vue.component('router-view', {
    render(h){
      // return h('h1',{},'首页视图')
      // this.self拿到vue._router
      let current = this._self._root._router.history.current // 拿到对应的键值对
      let routeMap = this._self._root._router.routesMap
      return h(routeMap[current])
    }
  })
}

export default VueRouter