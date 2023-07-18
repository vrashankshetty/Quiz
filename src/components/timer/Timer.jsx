import React, { useEffect, useState } from 'react'
import './timer.css'
import useSound from 'use-sound'
import wrong from "../../sounds/wrong.mp3"
export default function Timer({setStop,questionNumber,setPausetime,pausetime}) {
    const [timer,setTimer]=useState(30)
    const [wrongans]=useSound(wrong)
    useEffect(()=>{
        if(timer === 0){
           setStop(true) 
           wrongans()
           setTimeout(()=>{
            localStorage.removeItem("userreg")
        },5000)   
        };
        const interval=setInterval(()=>{
         // eslint-disable-next-line no-lone-blocks
         {(!pausetime)?setTimer((prev)=>prev-1):setTimer((prev)=>prev)}
        },1000)
        return ()=>clearInterval(interval)
    },[pausetime, setStop, timer, wrongans])
    useEffect(()=>{
        setPausetime(false)
        if(questionNumber>=6){
         setTimer(45)
        }
        else{
        setTimer(30)
        }
    },[questionNumber, setPausetime])
  return (
    <div className={timer>=10?'present':'danger'}>{timer}</div>
  )
}
