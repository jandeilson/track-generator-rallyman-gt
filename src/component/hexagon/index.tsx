import React, { FunctionComponent } from 'react';
import { arrangedHexagons } from '../../logic';
import './styles/smart.scss';

type HexagonProps = {};

export const Hexagon: FunctionComponent<HexagonProps> = () => (
  <ul className='hex-grid__list'>
    {arrangedHexagons().map(({ trackId, imageId }) => {
      return (
        <li className='hex-grid__item'>
          <div className='hex-grid__content'>{trackId}</div>
        </li>
      );
    })}
  </ul>
);
