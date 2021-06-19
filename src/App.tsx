import React from 'react';
import './App.scss';
import './shared.scss';

import { HexagonShape } from './component/hexagon';
import { arrangedHexagons } from './logic';

function App() {
  return (
    <div className='App'>
      <ul className='hexagons'>
        {arrangedHexagons().map((track) => {
          return (
            <HexagonShape
              key={track.trackId}
              id={track.trackId}
              style={{
                display: track.style?.display,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
