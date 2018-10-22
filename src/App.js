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
            <Countdown 
              date='Fri, 16 Nov 2018 18:00'
            />
          </div>
          <div className="event-details">
            <div className="date">
              Friday, November 16 (6-10pm)
            </div>
            <div className="location">
              SDFC Fields, ASU Tempe
            </div>
            <div className="action-button">
              <Button size="small" variant="contained" color="default">
                <a
                className="App-link"
                href="https://www.facebook.com/events/2108742422677762/"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </Button>
            </div>
          </div>
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
