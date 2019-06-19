
import React,{useState} from 'react'
import IntroContent from './IntroContent';
import IntroButton from './IntroButton';

function Intro() {
    const [opacity, setOpacity] = useState(1);
    const toggleOpacity =()=>{
        setOpacity((opacity===1)? 0:1)
    }
    return (
        <>
           <IntroButton toggleOpacity={toggleOpacity}/>
            <IntroContent opacity={opacity} setOpacity={setOpacity}/>

        </>
    )
}

export default Intro
