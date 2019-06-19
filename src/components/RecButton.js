
import React from 'react'
const RecButton = ({isRecording, toggleRecording}) =>{
       let classes= `btn-floating btn-large waves-effect waves-light ${isRecording? ' red ': ' black '}`

      return <button  onClick = {toggleRecording} className= {classes}><i className="material-icons">
         keyboard_voice
         </i></button>

}
     

export default RecButton