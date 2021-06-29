import { tileRotate } from '../data'
import { Tile } from '../data/types'

// Generic data generators
export const shuffle = (data: any[]) => data.sort(() => Math.random() - 0.6)
export const random = (data: any[]) => Math.floor(Math.random() * data.length)
export const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (v, k) => k + start)

// Random data
export const getRandomLanes = (arr: Tile, n: number): Tile => {
  let result = new Array(n),
    len: number = arr.length,
    taken: number[] = new Array(len)

  if (n > len)
    throw new RangeError('getRandom: more elements taken than available')

  while (n--) {
    let x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }

  return result
}

export const circuitStructureRandom = (corners: any[], straights: any[]) => {
  const amountCorners = corners[random(corners)]
  const amountStraights = straights[random(straights)]

  return {
    corners: amountCorners,
    straights: amountStraights,
    circuitSize: amountCorners + amountStraights,
  }
}

export const circuitsCreator = (data: Tile) => {
  const circuitStructure = circuitStructureRandom(cornersRange, straightsRange)
  let cornerTile = cornersAndStraightsFilter(data, 'corner')
  let straightTile = cornersAndStraightsFilter(data, 'straight')

  let incrementValue: number = 200
  let currentValue: number = 0

  cornerTile = getRandomLanes(cornerTile, circuitStructure.corners)
  straightTile = getRandomLanes(straightTile, circuitStructure.straights)

  limitsCornersAndStraights(cornerTile, circuitStructure.corners)
  limitsCornersAndStraights(straightTile, circuitStructure.straights)

  const cornerAndStraightTiles = [...cornerTile, ...straightTile]

  const arr: Tile = []

  for (let i = 0; i < cornerAndStraightTiles.length; i++) {
    const display = ['none', 'block']

    arr.push(
      Object.assign(cornerAndStraightTiles[i], {
        style: {
          left: i === 0 ? 0 : (currentValue += incrementValue),
          display: display[random(display)],
          rotate: tileRotate[random(tileRotate)],
        },
      })
    )
  }

  return { tiles: arr, length: circuitStructure.circuitSize }
}

// Data filters
const cornersAndStraightsFilter = (arr: any[], type: string) =>
  arr.filter((item) =>
    type === 'corner'
      ? !item.straight && item.curve?.corner
      : type === 'straight'
      ? item.straight && !item.curve?.corner
      : null
  )

// Data filters > Limits
const limitsCornersAndStraights = (arr: any[], max: number) => {
  if (arr.length > max) {
    return arr.splice(0, arr.length - max)
  }
}

// Data filters > Ranges
const cornersRange = range(7, 10)
const straightsRange = range(6, 10)
// const circuitRange = range(13, 20)
