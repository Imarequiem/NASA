import { useJulianConverterStore } from "../stores"

class JDConverterService {
  private constructor () {}

  public static get() {
    return {
      convert: async function getConvert(julianDate:Number) {
        const date = await useJulianConverterStore().getConvert(julianDate)
        return date
      }
    }
  }
}
export { JDConverterService }