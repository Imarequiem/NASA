import { defineStore } from "pinia";

export const useCMEStore = defineStore("useCMEStore", () => {
  async function getCME (fromDate?: Ref<string>, toDate?: Ref<string>): Promise<any> {
    try {
      const api = await fetch(`https://api.nasa.gov/DONKI/CME?startDate=${fromDate}&endDate=${toDate}&api_key=BkVx47ZIJjcDOa62QYhXGaHE5rXNVzLgcbQeXcbM`)
      const data = await api.json()
      return data
    }
    catch (err) {
      console.log(err)
    }
  }
  return { getCME }
})
