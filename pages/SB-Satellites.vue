<template>
  <div class="bg-slate-950 min-h-dvh w-full p-20">
    <Table :list="list" :count="+count" :fields="fields" />
  </div>
</template>

<script setup lang="ts">
import { SatellitesServices } from '~/components/layout/main-page/Home/solar-system-dynamics/sb-sat/services/satellites.service';

const {list, fields, count} = await SatellitesServices.get()
  .getAll()
</script>

<style scoped lang="scss">
* {
  color: white;
}
</style>