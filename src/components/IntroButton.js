import React from 'react'

function IntroButton({toggleOpacity}) {
    const butStyle = { position: 'absolute', right: '10px', top: '10px'}

    return (
        <button className = 'btn btn-flat btn-large blue-text'  onClick={()=>{toggleOpacity()}}
            style ={butStyle}>
                            <i className="material-icons">
                            description
                        </i>
            </button>
    )
}

export default IntroButton
