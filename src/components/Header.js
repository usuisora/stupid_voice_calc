
import React from 'react'
import logo from '../calculator.svg';
import Interface from './Interface'
const Header = () =>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Stupid <span className='red-text'>voice</span> calc</code>
        </p>
         <Interface/>
      </header>

      export default Header