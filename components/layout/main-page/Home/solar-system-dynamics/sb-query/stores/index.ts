import { defineStore } from "pinia";
import type { QueryInterface } from "../types/query.interface";

export const useQueryStore = defineStore("useQueryStore", () => {
  async function getAll (): Promise<any> {
    try {
      const api = await fetch(`https://ssd-api.jpl.nasa.gov/sbdb_query.api?fields=full_name,epoch,e,a,q,i,om,w&sb-class=IEO`)
      const data: QueryInterface = await api.json()
      return data
    }
    catch (err) {
      console.log(err)
    }
  }
  return { getAll }
})