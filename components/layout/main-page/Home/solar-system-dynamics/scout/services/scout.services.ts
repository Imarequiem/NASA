import { useScoutStore } from "../stores"


class ScoutService {
  private constructor () {}

  public static get() {
    return {
      getAll: async function getSBRadar() {
        const {data, count} = await useScoutStore().getAll()
        const fields = Object.keys(data[0])
        return { data,count, fields }
      },
    }
  }
}
export { ScoutService }