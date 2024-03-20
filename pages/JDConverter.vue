<template>
  <div class="content bg-slate-950 min-h-dvh w-full p-20">

    <div class="form">
      <Input
        :type="'number'"
        :label="'Julian Date: YYYY-MM-DD'"
        :maxLength="8"
        v-model="value"
      />
    </div>
    <div class="description">
      <p class="description__p">The specified calendar date/time (cd) may specify the date only or both a date and time.
        The date must be specified in year, month, day order as in <span class="description__accent">YYYY-MM-DD.</span>
        The month may be specified using the 3-character (case-insensitive) month abbreviations as defined in the USA
        <span class="description__accent">(Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec).</span>
      </p>
    </div>
    <div
      class="result"
      v-if="julianConverted !== undefined"
    >
      <h1>Result: </h1>
      <p>Year: {{ julianConverted.year }}</p>
      <p>Month: {{ julianConverted.month_name }}</p>
      <p>Day of the year: {{ julianConverted.doy }}</p>
      <p>Day of the week: {{ julianConverted.dow_name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchDebounced } from '@vueuse/core'
import { JDConverterService } from '~/components/layout/main-page/Home/solar-system-dynamics/jd-converter/services/JD-converter.service';
import type { JDCoverter } from '~/components/layout/main-page/Home/solar-system-dynamics/jd-converter/types/jd-converter.interface';

const value = ref()
const julianConverted: Ref<JDCoverter> = ref()
  watchDebounced(
  value,
  () => { getConvert(value.value) },
  { debounce: 1500, maxWait: 2000 },
)
async function getConvert(value: Number) {
  julianConverted.value = await JDConverterService.get().convert(value)
  console.log(julianConverted.value)
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}
.send {
  margin-left: 40px;
}
.description__p {
  color: wheat;
  margin-top: 20px;
}
.description__accent {
  color: red;
}
.result {
  color: wheat;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
}
</style>