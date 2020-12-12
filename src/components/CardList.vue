<template>
  <div class="row">
         <div class="d-flex flex-row align-items-center">
             <div class="p-2 col-sm"><searcher /></div>
             <div class="p-2"><continents /></div>
         </div>
      <div 
      class="col d-flex"
      v-for="country in countries" :key="country.name">
      <card :country="country"/>
      </div>
  </div>
</template>

<script>

import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Card from './Card.vue';
import Continents from './Continents.vue';
import Searcher from './Searcher.vue';
export default {
  components: { Card, Continents, Searcher },
    setup() {
        const store = useStore();
        const countries = computed(() => {
            return store.getters.topCountries;
        })
        onMounted(async () => {
            await store.dispatch('getCountries');
            await store.dispatch('filterRegion', 'Americas')
        })
        return { countries }
    }
}
</script>

<style>

</style>