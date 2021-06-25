import { Tracks, tracks, trackRotates } from '../data'

export const shuffle = (data: any[]) => data.sort(() => Math.random() - 0.6)
export const random = (data: any[]) => Math.floor(Math.random() * data.length)

export const getRandomTracks = (arr: Tracks, n: number): Tracks => {
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

export const arrangedHexagons = (amount: number) => {
  let incrementValue: number = 200
  let currentValue: number = 0

  const arr: Tracks = []

  for (let i = 0; i < getRandomTracks(tracks, amount).length; i++) {
    const display = ['none', 'block']

    arr.push(
      Object.assign(tracks[i], {
        style: {
          left: i === 0 ? 0 : (currentValue += incrementValue),
          display: display[random(display)],
          rotate: trackRotates[random(trackRotates)],
        },
      })
    )
  }

  return arr
}
