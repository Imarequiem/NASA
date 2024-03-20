import { useWeatherStore } from "../store"

class FireballService {
  private constructor () {}

  public static get() {
    return {
      fireball: async function getFireball () {
        const res = await useWeatherStore().getFireball()
        return res
      },
      sortBy: function sortBy(data: Array<any>) {
        return [...data].reverse()
      }
    }
  }
}
export { FireballService }
