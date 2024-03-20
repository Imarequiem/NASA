import { useNhatsStore } from "../stores"

class NhatsService {
  private constructor () {}

  public static get() {
    return {
      nhats: async function getNhats() {
        const { count, data } = await useNhatsStore().getNhats()
        let fields:any = []

        const someFields = data.sort((a:any ,b: any) => {
          a - b
        })

        for(let el of someFields) {
          const res = []

          for(let i in el) {
            i == 'min_dv' || i == 'min_dur' ? res.push(Object.keys(el[i])) : res.push(i)
          }
          fields = res.flat()
        }
        return {data, count, fields}
      }
    }
  }
}
export { NhatsService }
