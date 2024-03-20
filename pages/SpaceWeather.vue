<template>
  <div class="bg-slate-950 min-h-dvh w-full p-20" id="main__ssd">
    <h1 class="title text-white">Space Weather ></h1>

    <div class="weather grid grid-cols-6 col-span-4 grid-flow-row mt-5 mb-5">

      <p
        v-for="option in LISTWEATHER__DATA"
        :key="option.name"
        class="weather_item m-4"
      >
        <NuxtLink :to="option.url" class="text-cyan-700 underline italic link">
          {{ option.name }}
        </NuxtLink>
      </p>

    </div>

  </div>
</template>
<script setup lang="ts">
import { LISTWEATHER__DATA } from '~/components/layout/space-weather/constants/list.data';

useHead({
  title: 'Space Weather'
})
</script>

<style scoped lang="scss">
* {
  color: white;
}
.main {
  margin-top: 150px;
}
h1 {
  font-size: x-large;
}
.link {
  text-decoration: underline;
}
</style>
