<template>
  <div class="bg-slate-950 min-h-dvh w-full p-20">

    <div class="filters bg-zinc-600 w-fit mx-auto">
      <button
        class="button button__all"
        @click="switchFilter($event)"
      >
        All
      </button>
      <button
        class="button button__comets"
        @click="switchFilter($event)"
      >
        Comets
      </button>
      <button
        class="button button__eros"
        @click="switchFilter($event)"
      >
        433 Eros
      </button>
    </div>

    <KeepAlive>
      <Table :fields="fields" v-model:list="data" :count="+count"/>
    </KeepAlive>

  </div>
</template>

<script setup lang="ts">
import { SBRadarService } from '~/components/layout/main-page/Home/solar-system-dynamics/sb-radar/services/SB-Radar.services';
let {data, fields, count} = await SBRadarService.get()
.getAll()

const obj = reactive({
  all: true,
  comets: false,
  eros: false,
})

async function request(item: any) {
  item === 'all' ?
  {data, fields, count} = await SBRadarService.get().getAll() :
  item === 'comets' ?
  {data, fields, count} = await SBRadarService.get().getComets() :
  await  SBRadarService.get().getEros()
  console.log(data)
}

function switchFilter($event: any) {
  const item = $event.target.textContent.toLowerCase().trim()
  if(item === '433 eros') {
    obj.eros = true
    obj.all = false
    obj.comets = false
  }
  else {
    for(const i in obj) {
      i === item ? obj[i] = true : obj[i] = false
    }
  }
  console.log(obj)
  request(item)
}

</script>

<style scoped lang="scss">
* {
  color: white;
}
.button {
  appearance: button;
  background-color: rgb(12 10 9);
  background-image: none;
  border: 1px solid rgb(12 10 9);
  border-radius: 4px;
  box-shadow: rgb(73, 79, 87) 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  margin: 10px;
}

.button:focus {
  text-decoration: none;
}

.button:hover {
  text-decoration: none;
}

.active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}

.active:not([disabled]):active {
  box-shadow: rgb(134, 145, 160) 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
}
</style>