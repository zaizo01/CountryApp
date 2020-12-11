<template>
  <div>
    <h1>Countries API</h1>
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