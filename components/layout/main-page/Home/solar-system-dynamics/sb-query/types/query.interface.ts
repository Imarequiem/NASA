interface QueryInterface {
  count: number | string,
  data: Array<any>,
  fields: Array<string>,
  signature?: Object,
}

export type { QueryInterface }