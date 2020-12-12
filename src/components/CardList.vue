<template>
  <div class="container row">
      <continents />
      <searcher />
      <div 
      class="col-12"
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