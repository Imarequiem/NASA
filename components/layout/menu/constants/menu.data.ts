import type { ImenuItem } from "../types/menu.interface"

export const MENU_DATA: ImenuItem[] = [
  {
    name: 'HOME',
    url: '/',
    icon: 'uil:home'
  },
  {
    name: 'SPACE WEATHER',
    url: '/SpaceWeather',
    icon: 'arcticons:fmiweather'
  },
  {
    name: 'EARTH',
    url: '/Earth',
    icon: 'gis:earth-atlantic-o'
  },
  {
    name: 'MARS',
    url: '/Mars',
    icon: 'majesticons:planet-line'
  },
  {
    name: 'IMAGE & VIDEO LIBRARY',
    url: '/Library',
    icon: 'fa-solid:photo-video'
  }
]
