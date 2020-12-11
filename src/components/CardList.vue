<template>
  <div class="row">
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
export default {
  components: { Card },
    setup() {
        const store = useStore();
        const countries = computed(() => {
            return store.getters.topCountries;
        })
        onMounted(() => {
            store.dispatch('getCountries');
        })
        return { countries }
    }
}
</script>

<style>

</style>