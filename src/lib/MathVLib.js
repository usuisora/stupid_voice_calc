
export const allSigns = ['+','-','x','/', 'х','plus','minus','divide','multiply','÷', 'умножить', 'поделить','плюс', 'минус']

export const mathIt = {
    '+':function (a,b) {return Number(a+b)},
    'плюс':function (a,b) {return Number(a+b)},
    'plus':function (a,b) {return Number(a+b)},

    '-':function (a,b) {return Number(a-b)},
    'минус':function (a,b) {return Number(a-b)},
    'minus':function (a,b) {return Number(a-b)},

    'x':function (a,b) {return Number(a*b)},
    'х':function (a,b) {return Number(a*b)},
    'умножить':function (a,b) {return Number(a*b)},
    'multiply':function (a,b) {return Number(a*b)},
    'by':function (a,b) {return Number(a*b)},
    
    '/':function (a,b) {return Number(a/b)},
     '÷':function (a,b) {return Number(a/b)},
     'divide':function (a,b) {return Number(a/b)},
    'поделить':function (a,b) {return Number(a/b)},

}


export function RandomFrom(len){
    return  Math.round(Math.random()*len)
}


export function getResult(words,s){
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