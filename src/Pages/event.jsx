import React, { Component } from 'react'
import Livestream from '../Components/Livestream'
import Directory from '../Components/Directory'
import Food from '../Components/Food'
import Performances from '../Components/Performances'
import Footer from '../Components/Footer'

const event = () => (
    <div className="event">
        <Livestream />
        <div className="item">
            <Directory />
        </div>
        <div className="item">
            <Food />
        </div>
        <div className="item">
            <Performances />
        </div>
        <Footer />
    </div>
)

export default event;