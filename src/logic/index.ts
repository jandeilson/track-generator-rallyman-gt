import { lanes, Lanes, laneRotates } from '../data'

export const shuffle = (data: any[]) => data.sort(() => Math.random() - 0.6)
export const random = (data: any[]) => Math.floor(Math.random() * data.length)

export const getRandomlanes = (arr: Lanes, n: number): Lanes => {
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

  const arr: Lanes = []

  for (let i = 0; i < getRandomlanes(lanes, amount).length; i++) {
    const display = ['none', 'block']

    arr.push(
      Object.assign(lanes[i], {
        style: {
          left: i === 0 ? 0 : (currentValue += incrementValue),
          display: display[random(display)],
          rotate: laneRotates[random(laneRotates)],
        },
      })
    )
  }

  return arr
}
