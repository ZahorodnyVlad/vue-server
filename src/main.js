import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)



new Vue({
  el: '#app',
  render: function(h){
    return h(App)
  }
})
