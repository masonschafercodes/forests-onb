import React from 'react'
import '../Styles/ForestIntro.css'

const ForestIntro = ({ forest_type }) => {
    return (
        <div>
            <div className='intro__container'>
                <h1 id="span__the">THE</h1>
                <h1 id="span__forest">{forest_type}</h1>
                <h1 id="span__planet">FOREST,</h1>
            </div>
        </div>
    )
}

export default ForestIntro