interface NHATS {
  count: string | number,
  data: Array<dataObj>,
  signature?: object,
}
interface dataObj {
  des: string,
  fullname: string,
  h: string,
  max_size: string,
  min_dur: object,
  min_dv: object,
  min_size: string,
  n_via_traj: number,
  obs_end: string,
  obs_flag: string,
  obs_mag: string,
  obs_start: string,
  occ: string,
  orbit_id: string,
  radar_obs_a?: any,
  radar_obs_g?: any,
  radar_snr_a?: any,
  radar_snr_g?: any,
}
export type { NHATS }