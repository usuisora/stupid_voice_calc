import React,{useState,createContext} from 'react'
import {allSigns,mathIt} from './MathVLib'
// import {speakBack,speakResult, introToApp} from './SpeechSynt'
import {lan} from './Config'
export const MyContext =createContext();
export function MyProvider (props){

var s = ''
var final_transcript =''
const [response, setResponse] = useState({res: '', exp:''});
const [isRecording, setIsRecording] = useState(true);

    // eslint-disable-next-line no-undef
    var recognition = new webkitSpeechRecognition();
          recognition.continuous = true;
             recognition.interimResults = true;
//onstart
    recognition.onstart = function() {
        console.log('record start...');
    //  speakBack('started recording')
    }
    
    function getResult(words){
    return words.reduce((prev,next)=>{
                        if(isNaN(next)){
                            console.log(next,'is NaN ')
                                    allSigns.forEach( sign =>{
                                console.log('el of forEach:', sign);
                                if(sign == next){
                                    s = sign
                                } 
                            })
                            console.log('s=',s);
                        return Number(prev)
                    }else{
                        console.log(next,'is not nun',Number(next) )
                        return mathIt[s](Number(prev),Number(next))
                        }
                        }
                    )
}

//onresult
    recognition.onresult = function(event) {
        var interim_transcript = '';
    
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal ) {
                final_transcript = event.results[i][0].transcript;
                // eslint-disable-next-line no-loop-func
                s =  allSigns.map(el =>{
                     let r =  event.results[i][0].transcript.indexOf(el)
                     return (r > 0)? el : undefined
                      }).find(el=> el !==  undefined)
                     console.log('s=',s);
                if(s !==  undefined){
                         console.log(s ,'is defined')
                       let words = event.results[i][0].transcript.trim().split(' ')
                         console.log('words: ', words)
                        // eslint-disable-next-line no-loop-func
                          let newRes =  getResult(words) 
                        console.log('Result (Резутьтат) = ' ,newRes)
                         setResponse({exp : words.join(' ') , res :newRes})
                 }
                } else {
                    // interim_transcript = event.results[i][0].transcript;
                }
        console.log(final_transcript);
      };

    }

  
//onerr
    recognition.onerror = function(event) 
    { 
        console.log('error...',event);

    }
//onend
    recognition.onend = function()
     { 
         console.log('end...')


     }
    

   function startRecognition (){

        final_transcript = '';
        recognition.lang = lan;
        console.log('recording started')
        setIsRecording(true)
        recognition.start();


    }
 
 
    function stopRecognition( ) {

        setIsRecording(false)
        recognition.stop();

    
    }
    return(
        <MyContext.Provider value = {{ isRecording, startRecognition,stopRecognition, response, setResponse}}>
            {props.children}
        </MyContext.Provider>
    )
}

