import React from 'react'
import '../Styles/ForestAbout.css'

const ForestAbout = ({ about, link }) => {
    return (
        <div>
            <div className="about__container">
                <div className="about__text">
                    <img src={link} alt={link} />
                    <p>{about}</p>
                </div>
            </div>
        </div>
    )
}

export default ForestAbout