import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import MyFriends from './components/MyFriends.vue'
import NewFriend from './components/NewFriend.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

Vue.component('my-friends', MyFriends)
Vue.component('new-friend', NewFriend)

new Vue({
  el: '#app',
  render: h => h(App)
})
