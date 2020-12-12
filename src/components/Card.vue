<template>
  <div class="card" style="width: 300px;">
      <div class="card-body">
          <div class="card-title text-center">{{ country.name}}</div>
          <p class="text-center"><img :src="country.flag" :alt="`Bandera de ${country.name}`" class="img-fluid"></p>
          <div class="card-text row">
              <span class="">Name: {{ country.nativeName}}</span>
              <span class="">Population: {{ formatNumber(country.population) }}</span>
              <span class="">Capital: {{ country.capital}}</span>
              <span class="">Region: {{ country.region}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['country'],
    setup() {
        const formatNumber = ((num) => {
            return new Intl.NumberFormat("de-DE").format(num)
        })

        return { formatNumber }
    }

}
</script>

<style>

</style>