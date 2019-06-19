
import {lan} from './Config.js'
import {RandomFrom} from './MathVLib'

const introMsgs = ['Hello, I...am',"I am a stupid voice calccccdot",
"Purpose of existing in recognition your freacking voice","yuo are shold check it manually",
"aaaaassssssskk" ]
const resultMsgs =['Seems it is equal','Hmmm.. aa','Maybe it is ..','Result is.. ','amm is' ];

var synth = window.speechSynthesis;





// var utterance1 = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');
// var utterance2 = new SpeechSynthesisUtterance('We should say another sentence too, just to be on the safe side.');

// synth.speak(utterance1);
// synth.speak(utterance2);

// synth.pause(); // pauses utterances being spoken


 export function speakBack(msg){
synth.resume() // resumes speaking
   let utterance =  new SpeechSynthesisUtterance(msg)
   synth.speak(utterance)
  }


  export function speakResult(res){
      let index = RandomFrom(resultMsgs.length);
      let msg = resultMsgs[index] +' ' + res.toString()
      console.log(msg)
        speakBack(msg)


  }

  export function introToApp(){
    let index = RandomFrom(introMsgs.length)
    speakBack(introMsgs[index])
    // introMsgs.forEach((m,i) => setTimeout(()=>{speakBack(m)},1+i*2000))
}
