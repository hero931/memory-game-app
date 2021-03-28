import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import MyQuest from './components/MyQuest.vue'
import MyFriends from './components/MyFriends.vue'
import NewFriend from './components/NewFriend.vue'
import PersonCard from './components/PersonCard.vue'
import MyAnswers from './components/MyAnswers.vue'
import WelCome from './components/WelCome.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.component('my-quest', MyQuest)
Vue.component('my-friends', MyFriends)
Vue.component('new-friend', NewFriend)
Vue.component('person-card', PersonCard)
Vue.component('my-answers', MyAnswers)
Vue.component('wel-come', WelCome)

new Vue({
  el: '#app',    
  render: h => h(App)
})
