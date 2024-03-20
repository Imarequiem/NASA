<template>
  <div class="main" id="main_weather">
    <h1 class="title text-white">Fireballs</h1>

    <div class="weather grid grid-cols-6 col-span-4 grid-flow-row mt-5 mb-5">

      <p
        v-for="option in LISTWEATHER__DATA"
        :key="option.name"
        class="weather_item m-4"
      >
        <NuxtLink :to="option.url" class="text-cyan-700 underline italic">
          {{ option.name }}
        </NuxtLink>
      </p>

    </div>

  </div>
</template>
<script setup lang="ts">
import { LISTWEATHER__DATA } from './constants/list.data';
</script>
<style lang="scss" scoped>
h1,
span {
  color: white;
}
.title {
  font-size: xx-large;
  text-align: center;
}
.weather {
  margin-top: 100px;
}
</style>