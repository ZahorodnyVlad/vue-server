import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3000/'

Vue.http.interceptors.push(request => {

  request.headers.set('Auth', 'Rand Token' + Math.random())

})

new Vue({
  el: '#app',
  render: function(h){
    return h(App)
  }
})
