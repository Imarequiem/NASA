<template>
  <div class="bg-slate-950 min-h-dvh w-full p-20">
    <Table :list="data" :count="+count" :fields="fields" />
  </div>
</template>

<script setup lang="ts">
import { QueryService } from '~/components/layout/main-page/Home/solar-system-dynamics/sb-query/services/query.services';

const {data, fields, count} = await QueryService.get()
  .getAll()
</script>

<style scoped lang="scss">
* {
  color: white;
}
</style>