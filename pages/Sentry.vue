<template>
  <div class="bg-slate-950 min-h-dvh w-full p-20">
    <Table
      :fields="fields"
      :count="+count"
      :list="data"
    />
  </div>
</template>

<script setup lang="ts">
import { SentryService } from '~/components/layout/main-page/Home/solar-system-dynamics/sentry/services/sentry.services';
import Table from '~/components/UI/Table.vue';

const {data, fields, count} = await SentryService.get()
  .getAll()

</script>

<style scoped lang="scss">
* {
  color: white;
}
.list_button {
  margin: 5px;
}
</style>