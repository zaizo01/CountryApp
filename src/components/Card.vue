<template>
  <div class="card">
      <div class="card-body">
          <div class="card-title text-center">{{ country.name}}</div>
          <p class="text-center"><img :src="country.flag" :alt="`Bandera de ${country.name}`" class="img-fluid"></p>
          <div class="card-text">
              <span class="badge bg-dark d-block mb-1">{{ country.nativeName}}</span>
              <span class="badge bg-dark d-block mb-1">{{ formatNumber(country.population) }}</span>
              <span class="badge bg-dark d-block mb-1">{{ country.capital}}</span>
              <span class="badge bg-dark d-block mb-1">{{ country.region}}</span>
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