import { defineStore } from "pinia";
import type { Sentry } from "../types/sentry.interface";

export const useSenrtyStore = defineStore("useSenrtyStore", () => {
  async function getAll (): Promise<any> {
    try {
      const api = await fetch(`https://ssd-api.jpl.nasa.gov/sentry.api`)
      const data: Sentry = await api.json()
      return data
    }
    catch (err) {
      console.log(err)
    }
  }
  return { getAll }
})