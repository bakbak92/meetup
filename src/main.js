import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDMynF_PFdDZHlRcCmI9lvZtEqtntwlhNo',
      authDomain: 'meetup-eec2f.firebaseapp.com',
      databaseURL: 'https://meetup-eec2f.firebaseio.com',
      projectId: 'meetup-eec2f',
      storageBucket: ''
    })
    this.$store.dispatch('loadMeetups')
  }
})
