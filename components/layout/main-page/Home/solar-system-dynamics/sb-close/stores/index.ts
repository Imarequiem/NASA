import { defineStore } from "pinia";
import type { SbCloseInterface } from "../types/sb-close.interface";

export const useSBCloseStore = defineStore("useSBCloseStore", () => {
  async function getSBClose (): Promise<any> {
    try {
      const api = await fetch(`https://ssd-api.jpl.nasa.gov/cad.api`)
      const data: SbCloseInterface = await api.json()
      return data
    }
    catch (err) {
      console.log(err)
    }
  }
  return { getSBClose }
})