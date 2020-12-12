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
    },
    filterRegion({commit, state}, region){
      const filter = state.countries.filter((country) => {
        return country.region.includes(region)
      })
      commit('setFilteredCountries', filter)
    },
    filterdCountries({commit, state}, text){
      const textClient = text.toLowerCase();
      const filter = state.countries.filter(country => {
        const textApi = country.name.toLowerCase();
        if (textApi.includes(textClient)) {
          return country 
        }
      })
      commit('setFilteredCountries', filter)
    }
  },
  getters: {
    topCountries(state){
      return state.filteredCountries.sort((a, b) => {
        return a.population < b.population ? 1 : -1
      })
    }
  },
  modules: {
  }
})
