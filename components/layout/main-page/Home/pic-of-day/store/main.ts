import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Ipic } from '../types/picOfDay.interface'

export const usePictureStore = defineStore('usePictureStore', () => {
  const picture: Ref<object> = ref({})

  async function getDayPic (): Promise<void> {
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=BkVx47ZIJjcDOa62QYhXGaHE5rXNVzLgcbQeXcbM')
    const data: Ipic = await res.json()
    picture.value = data
  }

  getDayPic()
  return { picture }
})
