import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    filteredCountries: []
  },
  mutations: {
    setCountries(state, payload){
      state.countries = payload
    },
    setFilteredCountries(state, payload){
      state.filteredCountries = payload
    }
  },
  actions: {
    async getCountries({commit}){
      try {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await response.json();
        commit('setCountries', data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    topCountries(state){
      return state.countries.sort((a, b) => {
        return a.population < b.population ? 1 : -1
      })
    }
  },
  modules: {
  }
})
