import App from './App.vue'
import Vue from 'vue'



new Vue({
  render: h => h(App),
}).$mount('#app')


import EmblaCarousel from 'embla-carousel'
const emblaNode = document.getElementById('embla')

const embla = EmblaCarousel(emblaNode)
