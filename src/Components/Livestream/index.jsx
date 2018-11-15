import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'
import Countdown from '../Countdown'

const Livestream = () => (
    <div className="livestream">
        <div className="logo">
            <a href="index.html"><img src="https://asucis.com/assets/logo.png" alt="logo img"/></a>
        </div>
        <div className="title">
            <h1>International Night</h1>
            <h2>See the world at ASU</h2>
            <div className="hashtag"><a href="https://www.instagram.com/explore/tags/asuintlnight/"> #ASUINTLNIGHT</a></div>
        </div>
        <div className="video">
            <ResponsiveEmbed src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FASUCIS%2Fvideos%2F215470096035138%2F&show_text=0&width=560' allowFullScreen />
        </div>
        
        <div className="time"> 
            
            <h3><span role="img" aria-label="red-circle">🔴</span> Live video will begin at 6 pm MST.</h3>
        </div>
    </div>
)

export default Livestream