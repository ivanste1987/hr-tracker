import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import moment from 'moment'
import VCalendar from 'v-calendar';




axios.defaults.baseURL = process.env.VUE_APP_URL

Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD. MMMM YYYY. hh:mm')
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VCalendar, 
  render: h => h(App)
}).$mount('#app')
