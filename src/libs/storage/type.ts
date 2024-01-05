export type LoadString = (key: string) => string | null
export type SaveString = (key: string, value: string) => boolean
export type Load = (key: string) => object | null
export type Save = (key: string, value: object) => boolean
export type Remove = (key: string) => void
export type Clear = () => void

export type Storage = {
  loadString: LoadString
  saveString: SaveString
  load: Load
  save: Save
  remove: Remove
  clear: Clear
}
