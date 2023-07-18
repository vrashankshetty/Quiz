import React, { useEffect, useState } from 'react'
import Timer from '../timer/Timer'
import useSound from "use-sound"
import correct from "../../sounds/correct.mp3"
import play from "../../sounds/start.mp3"
import wrong from "../../sounds/wrong.mp3"
import audio from "../../sounds/audio2.mp3"
import "./Question.css"
export default function Question({data,
    setStop,
    setQuestionNumber,
    questionNumber,
     start,
    hint,
    setHint,
    pausetime,
    setPausetime
    }
    ) {

    const [prob,setProb]=useState(null)
    const [ans1,setAns1]=useState('answer')
    const [ans2,setAns2]=useState('answer')
    const [ans3,setAns3]=useState('answer')
    const [ans4,setAns4]=useState('answer')
    const [letsplay]=useSound(play)
    const [audioplay]=useSound(audio)
    const [correctans]=useSound(correct)
    const [wrongans]=useSound(wrong)
    const [aq,setAq]=useState(true)
    useEffect(()=>{
        letsplay();
    },[letsplay])
    useEffect(()=>{
        setProb(data[questionNumber-1])
        setHint(true)
    },[data, questionNumber, setHint])
    if(questionNumber>12){
        setStop(true)
        setTimeout(()=>{
            localStorage.removeItem("userreg")
        },5000)   
    }
    const delay=(duration,callback)=>{
        setTimeout(()=>{
            callback()
        },duration)
    }
    
    if(aq&&questionNumber===8){
       setTimeout(()=>{
         audioplay()
       },6000)
       setAq(false)
    }

    const handle=(e,x)=>{
        setPausetime(true)
        x('answer active');
        delay(1000,()=>{
            x(e?'answer correct':'answer wrong')
        });
        delay(6000,()=>{
            x('answer')
        })
        delay(5000,()=>{
          if(e){
            correctans()
            delay(1000,()=>{
                setQuestionNumber((prev)=>prev+1)
            })
           
          }
          else{
            wrongans()
            delay(1000,()=>{
                setStop(true)
                setTimeout(()=>{
                    localStorage.removeItem("userreg")
                },5000)   
            })
          
          }
        })
     
}
   
    
      return (
        <>
        {prob && 
         <div>
            <div className="timer">
               {(questionNumber!==8)?(questionNumber<10)?<>{start&&<Timer  setStop={setStop} questionNumber={questionNumber} setPausetime={setPausetime} pausetime={pausetime}/>}</>:<div>No time Limit</div>:<div>Audio will be played only once.Listen Carefully!!</div>}
            </div>

            <div className="question">
                {prob.question}
            </div>
            <ul className="answers">
                <div className="firstblock">
                <li className={ans1} onClick={()=>{handle(prob.answers[0].correct,setAns1)}}>
                    <span>{hint?prob.answers[0].text:prob.answers[0].hinttext}</span>
                    </li>
                <li className={ans2} onClick={()=>{handle(prob.answers[1].correct,setAns2)}}>
        
                    <span>{hint?prob.answers[1].text:prob.answers[1].hinttext}</span>
                    </li>
                </div>
                <div className="secondblock">
                <li className={ans3} onClick={()=>{handle(prob.answers[2].correct,setAns3)}}>
                
                    <span>{hint?prob.answers[2].text:prob.answers[2].hinttext}</span>
                    </li>
                <li className={ans4} onClick={()=>{handle(prob.answers[3].correct,setAns4)}}>
               
                    <span>{hint?prob.answers[3].text:prob.answers[3].hinttext}</span>
                    </li>
                </div>
            </ul>
        </div>
}
           </> 
      )
}
