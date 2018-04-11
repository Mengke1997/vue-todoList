import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 注册一个全局自定义指令
Vue.directive('focus', {
  componentUpdated:function(el){
    el.focus()
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
