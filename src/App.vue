<template>
  <div>
    <h1 class="text-center">Countries API</h1>
    <card-list />
  </div>
  <router-view/>
</template>

<script>
import CardList from './components/CardList.vue'
export default {
  components: {
    CardList
  }
}
</script>CardList