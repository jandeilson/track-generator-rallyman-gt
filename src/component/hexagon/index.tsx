import React, { FunctionComponent } from 'react'
import { circuitsCreator } from '../../logic'
import { tiles } from '../../data'
import './styles/smart.scss'
import './styles/lanes.scss'

import Draggable from 'react-draggable'

type HexagonProps = {}

export const Hexagon: FunctionComponent<HexagonProps> = () => {
  const circuit = circuitsCreator(tiles)

  console.log(circuit)

  return (
    <ul
      className="hex-grid__list"
      style={{ '--amount': circuit.length } as React.CSSProperties}
    >
      {circuit.tiles.map(({ id, style }) => {
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
