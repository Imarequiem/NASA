<template>
  <div class="content bg-slate-950 min-h-dvh w-full p-20">
    <Table :list="data" :fields="fields" :count="+count"/>
  </div>
</template>

<script setup lang="ts">
import { NhatsService } from '~/components/layout/main-page/Home/solar-system-dynamics/nhats/services/NHATS.service';
const {count, data, fields} = await NhatsService.get()
.nhats()
</script>

<style scoped lang="scss">
* {
  color: white;
}
</style>