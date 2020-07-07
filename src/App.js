import React from 'react';
import OmButton from './component/OmButton';

function App() {

  return (
    <div className="">
      <header className="om-bg-blue-200">
        Component
      </header>
      <span  className="om-bg-red-200">123</span>
      <div>
        <OmButton name="Omega Button Test" onClick={function() { console.log('out click'); }}/>
      </div>
    </div>
  );
}

export default App;
