import { defineStore } from 'pinia'
import type { JDCoverter } from '../types/jd-converter.interface'

export const useJulianConverterStore = defineStore('useJulianConverterStore', () => {
  async function getConvert(julianDate:Number): Promise<any> {
    try {
      const api = await fetch(`https://ssd-api.jpl.nasa.gov/jd_cal.api?jd=${julianDate}`)
      const gregorian: JDCoverter = await api.json()
      return gregorian
    }
    catch(err) {
      console.log(err)
    }
  }
  return {getConvert}
})