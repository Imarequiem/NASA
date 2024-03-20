<template>
  <div class="bg-slate-950 min-h-dvh w-full p-20">
    <Table :list="data" :count="+count" :fields="fields" />
  </div>
</template>

<script setup lang="ts">
import { ScoutService } from '~/components/layout/main-page/Home/solar-system-dynamics/scout/services/scout.services';

const {data, fields, count} = await ScoutService.get()
  .getAll()
console.log(fields)
</script>

<style scoped lang="scss">
* {
  color: white;
}
</style>