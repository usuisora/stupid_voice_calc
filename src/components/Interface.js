
import React,{useState, useEffect} from 'react'
import RecButton from './RecButton';
import {MyContext} from '../lib/VRecogn'

const Interface = () =>{
    
    const [isRecording, setIsRecording] = useState(false);


    return <MyContext.Consumer>
        {({response,stopRecognition,startRecognition,setResponse})=>{
            const  toggleRecording = () =>{
                if(isRecording) {
                    stopRecognition()
                }
                else {
                    startRecognition()
                }
            setIsRecording(!isRecording)
            }
    return(    <>
    <input value = {response.exp} className='white-text align'  style = {{minWidth: '100px', width: '40%', margin:'40px auto 20px'}}placeholder='Expression you said' type="text"/>
    <br/>
    <RecButton isRecording ={isRecording} toggleRecording={()=>toggleRecording()}/>
    <sub className='grey-text'>{(!isRecording)? 'Tab to math': 'Recording...'}</sub>
    <br/>
    <div   style = {{minWidth: '100px', width: '30%',margin:'40px auto 20px'}}>
            <code>{(response.res == '')? 'Result': response.res }</code> 
    </div>
    </>)
        }

       
        }
   
    </MyContext.Consumer>
}

export default Interface