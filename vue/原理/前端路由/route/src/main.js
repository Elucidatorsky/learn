import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({ //vuerouter的根组件 因为install才分发到子组件才能用
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
