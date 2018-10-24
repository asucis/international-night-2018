import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'

const Location = () => (
    <div className="location">
        <div className="map">
            <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-111.93393894648729%2C33.41469372486827%2C-111.92876764750659%2C33.418625070063946&amp;layer=mapnik&amp;marker=33.416659419713504%2C-111.93135329699692"></iframe>
        </div>
        <div className="details">
         SDFC West Fields
        </div>
        
    </div>
)

export default Location