import React from 'react'


let rules =['Say 2+2 ! ','Use english', 'You can say (+ - * /)','+ : plus','- : minus','* : multiply or by','/ : divide']
function IntroContent({opacity,setOpacity}) {

    const cardStyle = {opacity: opacity, position:'absolute',zIndex:4}
    return (
        
            <div className="card black-text" style={cardStyle} >
                <div className="card-content">
                    <h3>Intro</h3>
                    <ul className='left' style ={{textAlign:'left', fontSize: '18px'}}>
                        {rules.map(r => <li ley={r}>{r}</li>)}
                    </ul>
                    <br/>
                    <button className='btn btn-flat' onClick={()=>{setOpacity(0)}}>Close</button>
                </div>
            </div>
    )
}

export default IntroContent
