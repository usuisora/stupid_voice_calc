import React from 'react';
import './App.css';
import Header from './components/Header'
import { MyProvider, MyContext } from './lib/VRecogn'
function App() {
  return (
    <div className="App">
      <MyProvider>
        <Header />
      </MyProvider>
    </div>
  );
}

export default App;
