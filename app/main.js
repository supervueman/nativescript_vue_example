import Vue from 'nativescript-vue'
import App from './App'
import store from './store';
import apolloProvider from './plugins/apolloProvider';

import VueDevtools from 'nativescript-vue-devtools'

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools, {
    host: '192.168.1.42'
  })
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)

Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel)
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem)

new Vue({
  store,
  apolloProvider,
  render: h => h('frame', [h(App)])
}).$start()
