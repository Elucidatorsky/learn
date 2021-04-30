# 如何实现前端路由
1. url改变不引起页面刷新
2. 如何检测url变化

# hash实现
使用hash，监听hash变化
改变url操作
1. 浏览器前进后退按钮
2. a标签
3. window.location (原生js跳转)

# history实现
H5的api，自带两个方法不会引起页面刷新
pushState和replaceState 改变url的path部分
popState可以监听当前url变了

# 基于vue实现vue-router

页面每次刷新代码重新渲染，效率低
vue好处单页应用效率高，性能开销小，更新指定区域