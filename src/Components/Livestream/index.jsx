import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'

const Livestream = () => (
    <div className="livestream">
        <div className="mu-hero-featured-area">
            <div className="logo">
                <a href="index.html"><img src="https://asucis.com/assets/logo.png" alt="logo img"/></a>
            </div>
            <div className="title">
                <h1>International Night 2018</h1>
                <h2>See the world at ASU #INTLNIGHT</h2>
            </div>
            <div className="embed">
                <ResponsiveEmbed ratio="16:9" src='//iframe.dacast.com/b/101744/c/455858' allowFullScreen />
            </div>
            <div className="time"> 
                <h3>Live video will begin at 7 pm MST.</h3>
            </div>
        </div>
    </div>
)

export default Livestream