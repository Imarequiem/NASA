<template>
  <div
    class="content bg-slate-950 min-h-dvh w-full p-20"
    v-if="data"
    >
    <Table :fields="fields" :list="data" :count="+count" @sortRow="sortRow"/>
    <NuxtPage/>

  </div>
</template>
<script setup lang="ts">
import { FireballService } from '~/components/layout/main-page/Home/solar-system-dynamics/fireballs/services/Fireball.service';

let {count, data, fields} = await FireballService.get()
.fireball()

function sortRow($event: any) {
  const filterItem = $event.target.textContent
  const filterIndex = fields.indexOf(filterItem)

  data = FireballService.get().sortBy(data)
  console.log(data)
}
</script>

<style scoped lang="scss">
</style>