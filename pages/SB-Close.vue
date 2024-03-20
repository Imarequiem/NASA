<template>
  <div class="content bg-slate-950 min-h-dvh w-full p-20">
    <form class="form">

      <Input :type="'date'" :label="'Date from'" v-model="fromDate" />
      <span class="description">exclude data earlier than this date YYYY-MM-DD</span>
      <Input :type="'date'" :label="'Date to'" v-model="toDate" />
      <span class="description">exclude data later than this date YYYY-MM-DD</span>

      <Input :type="'number'" :label="'Distance from'" v-model="fromDistance" />
      <span class="description">exclude data with an approach distance less than this, e.g., 0.05, 10LD (default units: au)</span>
      <Input :type="'number'" :label="'Distance to'" v-model="toDistance" />
      <span class="description">exclude data with an approach distance greater than this (see dist-min)</span>

      <Input :type="'number'" :label="'H-min'" :max-length="5" v-model="H_min" />
      <span class="description">exclude data from objects with H-values less than this (e.g., 22 meaning objects smaller than this)</span>
      <Input :type="'number'" :label="'H-max'" :max-length="5" v-model="H_max" />
      <span class="description">exclude data from objects with H-value greater than this (e.g., 17.75 meaning objects larger than this)</span>

      <Input :type="'number'" :label="'v-inf-min'" :max-length="5" v-model="V_Inf_Min" />
      <span class="description">exclude data with V-infinity less than this positive value in km/s (e.g., 18.5)</span>
      <Input :type="'number'" :label="'v-inf-max'" :max-length="5"  v-model="V_Inf_Max" />
      <span class="description">exclude data with V-infinity greater than this positive value in km/s (e.g., 20)</span>

      <Select :label="'Class'" :options="SBDB_Class" v-model="SBDB_class" />
      <span class="description">limit data to objects with the specified orbit-class (e.g., ATE;)</span>

      <Select :label="'Body'" :options="SBDB_Bodies" v-model="SBDB_bodies" />
      <span class="description">limit data to close-approaches to the specified body (e.g., Earth) or allow all bodies with ALL or *</span>

      <Input :type="''" :label="'FullName'" :max-length="20" v-model="fullName" />
      <span class="description">include the full-format object name/designation</span>

      <SendBtn class="form__send" @click.prevent="request" />
    </form>

    <div class="table">
      <Table :list="data" :fields="fields" :count="+count" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SBCloseService } from '~/components/layout/main-page/Home/solar-system-dynamics/sb-close/services/SB-close.service';
import { SBDB_Bodies } from '~/components/layout/main-page/Home/solar-system-dynamics/sb-close/constants/SBDB-bodies.data';
import { SBDB_Class } from '~/components/layout/main-page/Home/solar-system-dynamics/sb-close/constants/SBDB-class.data';

let { data, fields, count } = await SBCloseService.get()
.SBClose()
console.log(data, fields, count)


const fromDate: Ref<String> = ref("")
const toDate: Ref<String> = ref("")
const fromDistance: Ref<String> = ref("")
const toDistance: Ref<String> = ref("")
const H_min: Ref<number> = ref(0)
const H_max: Ref<number> = ref(0)
const V_Inf_Min: Ref<number> = ref(0)
const V_Inf_Max: Ref<number> = ref(0)
const SBDB_class: Ref<String> = ref("")
const SBDB_bodies: Ref<String> = ref("")
const fullName: Ref<String> = ref("")

function request() {

}
</script>

<style scoped lang="scss">
* {
  color: white;
}
.form {
  display: grid;
  flex-direction: column;
  align-items: center;
}
.form__send {
  margin-top: 20px;
}
.description {
  text-align: left;
}
.table {
  margin-top: 80px;
}
</style>