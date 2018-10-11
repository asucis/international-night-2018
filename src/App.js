import React, { Component } from 'react'
import logo from './globe.png'
import './App.css'
import Countdown from './Components/Countdown'
import Button from '@material-ui/core/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="countdown-title">
            <h1>International Night</h1>
            <Countdown 
              date='Fri, 16 Nov 2018 18:00'
            />
          </div>
          
          <div className="countdown-details">
            Friday, November 16 (6-10pm)
            <br/>
            SDFC Fields, ASU Tempe
            <br/>
            <div className="action-button">
            <Button size="small" variant="contained" color="default">
            <a
            className="App-link"
            href="https://asucis.com"
            target="_blank"
            rel="noopener noreferrer"
            >
              Learn more
            </a>
            </Button>
            </div>
          </div>
          <div className="credits">
            ©️ 2018
            <a
            className="credits-link"
            href="https://asucis.com"
            target="_blank"
            rel="noopener noreferrer"
            >
              asucis
            </a>
            &amp;
            <a
            className="credits-link"
            href="https://dickwyn.xyz"
            target="_blank"
            rel="noopener noreferrer"
            >
              dickwyn
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
