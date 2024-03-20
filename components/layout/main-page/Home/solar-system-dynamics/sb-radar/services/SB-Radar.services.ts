import { useSBRadarStore } from "../stores"


class SBRadarService {
  private constructor () {}

  public static get() {
    return {
      getAll: async function getSBRadar() {
        const res = await useSBRadarStore().getAll()
        console.log(res)
        return res
      },

      getComets: async function getSBRadar() {
        const res = await useSBRadarStore().getComets()
        console.log(res)
        return res
      },

      getEros: async function getSBRadar() {
        const res = await useSBRadarStore().getEros()
        console.log(res)
        return res
      }
    }
  }
}
export { SBRadarService }