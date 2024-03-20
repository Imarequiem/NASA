<template>
  <div class="bg-slate-950 min-h-dvh w-full p-20">
    <div class="form">
      <Input
        :type="'date'"
        :maxLength="8"
        :label="'Day Start: '"
        v-model="fromDate"
        class="form__input"
      />
      <Input
        :type="'date'"
        :maxLength="8"
        :label="'Day End:'"
        v-model="toDate"
        class="form__input"
      />
    </div>
    <div class="content">
      <!-- <Table :list="res"/> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '~/components/UI/Input.vue';
import { CMEService } from '~/components/layout/space-weather/components/cme/services/cme.service';
const fromDate: Ref<string> = ref(new Date().toISOString().slice(0, 10))
const toDate: Ref<string> = ref(new Date().toISOString().slice(0, 10))

const res = await CMEService.get().fromServer(fromDate, toDate)
console.log(res)
</script>

<style scoped lang="scss">
.form {
  display: flex;
  .form__input {
    margin: 10px;
  }
}
</style>