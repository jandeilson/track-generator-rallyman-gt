export type Tile = {
  id: string
  lanes: number
  straight: boolean
  curve?: {
    corner: boolean
    number?: number
  }
  style?: {
    left: string
    display: string
    rotate: string
  }
}[]
export type tileRotates = number[]
export type tileSize = number[]
