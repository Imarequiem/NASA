import { useSenrtyStore } from "../stores"


class SentryService {
  private constructor () {}

  public static get() {
    return {
      getAll: async function getSBRadar() {
        const {data, count} = await useSenrtyStore().getAll()
        const fields = Object.keys(data[0])
        return { data,count, fields }
      },
    }
  }
}
export { SentryService }