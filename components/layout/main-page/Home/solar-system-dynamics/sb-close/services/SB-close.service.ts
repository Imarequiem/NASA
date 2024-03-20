import { useSBCloseStore } from "../stores"

class SBCloseService {
  private constructor () {}

  public static get() {
    return {
      SBClose: async function getSBClose() {
        const { data, fields, count } = await useSBCloseStore().getSBClose()
        return { data, fields, count }
      },
    }
  }
}
export { SBCloseService }