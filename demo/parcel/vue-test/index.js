import Vue from 'vue/dist/vue.esm.js';
import Index from './index.vue';
new Vue({
  render: h => h(Index),
  components: {
    Index
  },
  data () {
    return {
      name: 'outer'
    }
  }
}).$mount("#index");