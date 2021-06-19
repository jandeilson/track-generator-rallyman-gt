import { Tracks, tracks } from '../data';

export const shuffleTracks = tracks.sort(() => Math.random() - 0.6);

export const getRandomTracks = (arr: Tracks, n: number): Tracks => {
  let result = new Array(n),
    len: number = arr.length,
    taken: number[] = new Array(len);

  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');

  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }

  return result;
};

export const arrangedHexagons = () => {
  let incrementValue: number = 200;
  let currentValue: number = 0;

  const arr: Tracks = [];

  for (let i = 0; i < getRandomTracks(tracks, 6).length; i++) {
    const display = ['none', 'block'];
    const randomDisplay = Math.floor(Math.random() * display.length);

    arr.push(
      Object.assign(tracks[i], {
        style: {
          left: i === 0 ? 0 : (currentValue += incrementValue),
          display: display[randomDisplay],
        },
      })
    );
  }

  return arr;
};
