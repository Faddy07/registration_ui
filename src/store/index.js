import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    checkboxData:[
      {
        label: 'croma',
        value: false,
      },
      {
        label: 'Tommy Hilfigure',
        value: false,
      },
      {
        label: 'Ampere Greeves',
        value: false,
      },
      {
        label: 'Licious',
        value: false,
      },
      {
        label: 'Levis',
        value: false,
      },
      {
        label: 'Eureka Forbes',
        value: false,
      },
      {
        label: 'CHG Meridian',
        value: false,
      },
    ],
    terms: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
