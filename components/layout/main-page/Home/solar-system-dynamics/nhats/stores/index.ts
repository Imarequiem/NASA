import { defineStore } from "pinia";
import type { NHATS } from "../types/nhats.interface"

export const useNhatsStore = defineStore("useNhatsStore", () => {
  async function getNhats (): Promise<any> {
    try {
      const api = await fetch('https://ssd-api.jpl.nasa.gov/nhats.api?dv=6&dur=360&stay=8&launch=2020-2045&h=26&occ=7')
      const data: NHATS = await api.json()
      return data
    }
    catch (err) {
      console.log(err)
    }
  }
  getNhats()

  return { getNhats }
})