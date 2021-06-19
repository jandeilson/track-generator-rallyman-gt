import React, { FunctionComponent } from 'react';
import './styles/base.scss';

type HexagonShapeProps = {
  id: string;
  arrange: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    display?: string;
  };
};

export const HexagonShape: FunctionComponent<HexagonShapeProps> = ({
  id,
  arrange,
}) => (
  <div
    className={`hexagon ${id}`}
    style={{ left: arrange.left, display: arrange.display }}
  />
);
