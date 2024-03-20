<template>
  <div class="content bg-slate-950 min-h-dvh w-full p-20">
    <div class="main_header">

      <suspense>
        <PicOfDay />
        <template #fallback>
          Loading...
        </template>
      </suspense>

    </div>

    <div class="main">
      <SSD />
    </div>
  </div>
</template>

<script setup lang="ts">
import PicOfDay from '~/components/layout/main-page/Home/pic-of-day/PicOfDay.vue'
import SSD from '~/components/layout/main-page/Home/solar-system-dynamics/SSD.vue'

useHead({
  title: 'NASA'
})
</script>

<style scoped lang="scss">
.main {
  margin-top: 150px;
}
</style>
