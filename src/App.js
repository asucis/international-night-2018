import React, { Component } from 'react'
import logo from './in-globe.png'
import Countdown from './Components/Countdown'
import Button from '@material-ui/core/Button'
import Footer from './Components/Footer'

class App extends Component {

  populateDate() {
    console.log('test')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" background="#fff">
          <img src={logo} className="App-logo" alt="logo" onClick={this.populateDate} />
          <div className="countdown-title">
            <h1>International Night</h1>
            <p>Fri, Nov 16 (6pm onwards) - SDFC Fields Tempe</p>
          </div>
          <div className="event-details">
          <h5>See you in </h5>
            <Countdown 
              date='Fri, 16 Nov 2018 18:00'
            />
            <div className="action-button">
              <Button size="small" variant="contained" color="blue">
                <a
                className="App-link"
                href="/event"
                rel="noopener noreferrer"
                >
                  Check out a Sneak Preview
                </a>
              </Button>
            </div>
          </div>
          <div className="credits">

          <Footer />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
