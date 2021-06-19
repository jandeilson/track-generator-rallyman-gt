import React from 'react';
import './App.css';

import { HexagonShape } from './component/hexagon';
import { tracks } from './data';
import { arrangedHexagons } from './logic';

function App() {
  return (
    <div className='App test'>
      {arrangedHexagons().map((track) => {
        return (
          <HexagonShape
            key={track.trackId}
            id={track.trackId}
            arrange={{
              left: track.arrange?.left ? track.arrange.left : 0,
              display: track.arrange?.display,
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
