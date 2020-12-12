<template>
<div class="">
  <input type="text" 
         placeholder="Country..." 
         class="form=control my-3 p-2 w-50" 
         v-model="text"
         @keyup="processInput">
</div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex';
export default {
    setup() {
        const text = ref('');
        const store = useStore();
        const processInput = () => {
            store.dispatch('filterdCountries', text.value)
        }
        return { text, processInput }
    }
}
</script>
