import { defineStore } from "pinia";
import type { ScoutInterface } from "../types/scout.interface";

export const useScoutStore = defineStore("useScoutStore", () => {
  async function getAll (): Promise<any> {
    try {
      const api = await fetch(`https://ssd-api.jpl.nasa.gov/scout.api`)
      const data: ScoutInterface = await api.json()
      return data
    }
    catch (err) {
      console.log(err)
    }
  }
  return { getAll }
})