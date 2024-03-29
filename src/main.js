import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import VueScrollTo from 'vue-scrollto'
import VueTyperPlugin from 'vue-typer'
import VCalendar from 'v-calendar';
import YmapPlugin from 'vue-yandex-maps'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
// import VueLazyload from 'vue-lazyload'

import 'swiper/css/swiper.css'


const lang = JSON.parse(localStorage.getItem("lang"))
if(!lang){
  store.dispatch("info/changeLang", 'ru');
}else{
  store.dispatch("info/changeLang", lang);
}

const settings = {
  apiKey: 'e422ee4c-d64b-4823-81cd-e3460e50f7d4',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(VueTyperPlugin)
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(require('vue-cookies'))
Vue.use(VueAwesomeSwiper)
Vue.use(VueScrollTo)
Vue.use(VueTheMask)

Vue.use(VCalendar)
Vue.use(YmapPlugin, settings)
Vue.use(CoolLightBox)


// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: '/wp-content/uploads/2021/05/zagl.jpg',
//   loading: '/wp-content/uploads/2021/05/zagl.jpg',
//   attempt: 1,
//   listenEvents: [ 'scroll' ]
// })



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
