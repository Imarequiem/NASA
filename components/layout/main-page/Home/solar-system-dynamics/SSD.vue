<template>
  <div class="main" id="main__ssd">
    <h1><a href="#main__ssd">SSD/CNEOS ></a></h1>

    <div class="ssd grid grid-cols-6 col-span-4 grid-flow-row mt-5 mb-5">

      <p
        v-for="option in SSD__DATA"
        :key="option.name"
        class="ssd_item m-4"
      >
      <NuxtLink :to="option.url" class="text-cyan-700 underline italic link">
          {{ option.name }}
        </NuxtLink>
        <br>
        <span class="description">
          {{ option.description }}
        </span>
      </p>

    </div>

    <div class="cards">
      <Card />
    </div>

  </div>
</template>

<script setup lang="ts">
import { SSD__DATA } from './constants/SSD.data';
import Card from '~/components/UI/Card.vue'
</script>

<style lang="scss" scoped>
h1,
span {
  color: white;
}
h1 {
  font-size: x-large;
}
.link {
  text-decoration: underline;
}
</style>~/components/layout/main-page/Home/solar-system-dynamics/constants/SSD.data