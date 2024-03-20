import { defineStore } from "pinia";
import type { SBRadarInterface } from "../types/sb-radar.interface";

export const useSBRadarStore = defineStore("useSBRadarStore", () => {
  async function getAll (): Promise<any> {
    try {
      const api = await fetch(`https://ssd-api.jpl.nasa.gov/cad.api`)
      const data: SBRadarInterface = await api.json()
      return data
    }
    catch (err) {
      console.log(err)
    }
  }

  async function getComets (): Promise<any> {
    try {
      const api = await fetch(`https://ssd-api.jpl.nasa.gov/sb_radar.api?kind=c`)
      const data: SBRadarInterface = await api.json()
      return data
    }
    catch (err) {
      console.log(err)
    }
  }

  async function getEros (): Promise<any> {
    try {
      const api = await fetch(`https://ssd-api.jpl.nasa.gov/sb_radar.api?des=433`)
      const data: SBRadarInterface = await api.json()
      return data
    }
    catch (err) {
      console.log(err)
    }
  }
  return { getAll, getComets, getEros }
})