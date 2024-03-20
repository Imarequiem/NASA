import { defineStore } from "pinia";
import type { SBSatInterface } from "../types/satellites.interface";

export const useSatellitesStore = defineStore("useSatellitesStore", () => {
  async function getAll (): Promise<any> {
    try {
      const api = await fetch(`https://ssd-api.jpl.nasa.gov/sb_sat.api`)
      const data: SBSatInterface = await api.json()
      return {...data}
    }
    catch (err) {
      console.log(err)
    }
  }
  return { getAll }
})