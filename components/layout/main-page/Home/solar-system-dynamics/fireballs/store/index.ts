import { defineStore } from 'pinia'
import { FireballService } from '../services/Fireball.service'

export const useWeatherStore = defineStore('useExStore', () => {
  async function getFireball (): Promise<any> {
    try {
      const api = await fetch('https://ssd-api.jpl.nasa.gov/fireball.api')
      const fireball: FireballService = await api.json()
      return fireball
    }
    catch (err) {
      console.log(err)
    }
  }
  getFireball()

  return { getFireball }
})
