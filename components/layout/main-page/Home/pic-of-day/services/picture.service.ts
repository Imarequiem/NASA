import type { Ipic } from '../types/picOfDay.interface'
import { usePictureStore } from '../store/main'

class PictureService {
  public constructor () {}

  public static get () {
    return {
      fromServer () {
        async function getDayPic (): Promise<any> {
          const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=BkVx47ZIJjcDOa62QYhXGaHE5rXNVzLgcbQeXcbM')
          const data: Ipic = await res.json()
          console.log(data)
          console.log(usePictureStore)
        }
        getDayPic()
      },
    }
  }
}

export { PictureService }
