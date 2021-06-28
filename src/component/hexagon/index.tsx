import React, { FunctionComponent } from 'react'
import { arrangedHexagons, random } from '../../logic'
import { laneSize } from '../../data'
import './styles/smart.scss'
import './styles/lanes.scss'

import Draggable from 'react-draggable'

type HexagonProps = {}

export const Hexagon: FunctionComponent<HexagonProps> = () => {
  const randomlaneSize = laneSize[random(laneSize)]

  return (
    <ul
      className="hex-grid__list"
      style={{ '--amount': randomlaneSize } as React.CSSProperties}
    >
      {arrangedHexagons(randomlaneSize).map(({ id, style }) => {
        return (
          <Draggable axis="both">
            <li className="hex-grid__item">
              <div className={`hex-grid__content`}>
                <div
                  className={`lane id${id}`}
                  style={
                    {
                      '--rotateDeg': `${style?.rotate}deg`,
                    } as React.CSSProperties
                  }
                />
                {id}
              </div>
            </li>
          </Draggable>
        )
      })}
    </ul>
  )
}
