import React, { FunctionComponent } from 'react';
import './styles/base.scss';

type HexagonShapeProps = {
  id: string;
  style: {
    display?: string;
  };
};

export const HexagonShape: FunctionComponent<HexagonShapeProps> = ({
  id,
  style,
}) => (
  <li>
    <div className={`hexagon ${id}`} style={{ display: style.display }} />
  </li>
);
