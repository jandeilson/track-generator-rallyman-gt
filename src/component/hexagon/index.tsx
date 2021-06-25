import React, { FunctionComponent } from 'react'
import { arrangedHexagons, random } from '../../logic'
import { trackSize } from '../../data'
import './styles/smart.scss'
import './styles/tracks.scss'

type HexagonProps = {}

export const Hexagon: FunctionComponent<HexagonProps> = () => {
  const randomTrackSize = trackSize[random(trackSize)]

  return (
    <ul
      className="hex-grid__list"
      style={{ '--amount': randomTrackSize } as React.CSSProperties}
    >
      {arrangedHexagons(randomTrackSize).map(({ trackId, style }) => {
        return (
          <li className="hex-grid__item">
            <div className={`hex-grid__content`}>
              <div
                className={`track id${trackId}`}
                style={
                  {
                    '--rotateDeg': `${style?.rotate}deg`,
                  } as React.CSSProperties
                }
              />
              {trackId}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
