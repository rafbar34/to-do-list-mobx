import React from 'react';
import {HomePage} from './Pages/HomePage/HomePage';
import {HomeStore} from './Pages/HomePage/HomeStore';

function App() {
  return (
    <div>
      <HomePage homeStore={HomeStore} />
    </div>
  );
}

export default App;
