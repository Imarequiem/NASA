import { useCMEStore } from "../stores"

class CMEService {
  private constructor () {}

  public static get() {
    return {
      fromServer: async function getCME(fromDate?: Ref<string>, toDate?: Ref<string>) {
        const data = await useCMEStore().getCME(fromDate, toDate)
        console.log(data)
        const list: Array<any> = []
        let fields: Array<any> = []
          function getList(data:any) {
            for(let prop in data) {
              if(typeof(data[prop]) === 'object') {
                getList(data[prop]);
              } else {
                list.push(data[prop])
              }
            }
          }
          function getFields(obj: any) {
            for (let key in {...obj}) {
              fields.push(key);
              if (typeof obj[key] === 'object') {
                fields = fields.concat(getFields(obj[key]));
              }
            }
          }
        getList(data)
        getFields(data)
        return list
      },
    }
  }
}
export { CMEService }