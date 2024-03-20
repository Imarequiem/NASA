import { useSatellitesStore } from "../stores"


class SatellitesServices {
  private constructor () {}

  public static get() {
    return {
      getAll: async function getSBQuery() {
        const {data, count} = await useSatellitesStore().getAll()

        const fields:Array<string> = Object.keys({...data[0].sat})
        const list: Array<any> = []

        data.forEach((element:any) => {
          let res: Array<Object> | any = []
          for (const i in element) {
            res.push((Object.values(element[i])))
          }
          list.push(...res)
        });

        return {list, count, fields}
      },
    }
  }
}
export { SatellitesServices }