<template>
  <div class="main_header text-black">
    <h1 class="text_header text-white">
      Astronomy picture of the day
    </h1>

    <img
      v-if="picture.media_type === 'image'"
      :src="picture.url"
      class="picDay picture"
    >
    <iframe
      v-if="picture.media_type === 'video'"
      width="420"
      height="315"
      :src="picture.url"
      class="picDay"
    />

    <div class="text_content m-5 text-white">

      <h3 class="pic_title">
        {{ picture.title }}
      </h3>

      <p class="pic_description">
        {{ picture.explanation }}
      </p>

      <p class="pic_date text-right text-gray-500">
        {{ picture.date }}
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePictureStore } from './store/main'


const main: any = usePictureStore()
const { picture } = storeToRefs(main)
</script>

<style lang="scss" scoped>
.pic_title {
  font-size: x-large;
  font-style: italic;
}
.pic_description {
  margin: 15px 0 10px 0;
}
.picture:hover {
  height: 800px;
}
.main_header {
  border-radius: 20px;
  border: 3px solid;
  border-color: rgb(110, 110, 110);
}
.text_header {
  text-align: center;
  font-size: xx-large;
  font-style: italic;
  margin: 10px 0;
}
.picDay {
  width:90%;
  margin-left: auto;
  margin-right: auto;
  height: 350px;
  object-fit:cover;
  transition: height 2s;
  border-radius: 35px;
}
</style>
./store/main