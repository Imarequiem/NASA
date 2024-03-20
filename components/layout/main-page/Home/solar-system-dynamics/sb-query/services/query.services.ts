import { useQueryStore } from "../stores"

class QueryService {
  private constructor () {}

  public static get() {
    return {
      getAll: async function getSBQuery() {
        const {data, count, fields} = await useQueryStore().getAll()
        return { data,count, fields }
      },
    }
  }
}
export { QueryService }