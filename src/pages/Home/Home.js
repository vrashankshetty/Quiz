import React, { useState,useEffect, useMemo } from 'react'
import Question from '../../components/Question/Question';
import "./Home.css"
import { data } from '../../components/data/Data';
import Typewriter from"typewriter-effect"
import Topbar from '../../components/Topbar/Topbar';
import Audiencepool from '../../lifelines/audiencepool/Audiencepool';
export default function Home() {
 useEffect(()=>{
  setTimeout(()=>{
    setStart(true)
  },32000)
 },[])



const amount=useMemo(()=>
  [
    { id:12,amount:"7 CRORE"},
    { id:11,amount:"1 CRORE"},
    { id:10,amount:"50 L"},
    { id:9,amount:"25 L"},
    { id:8,amount:"10 L"},
    { id:7,amount:"1 L"},
    { id:6,amount:"75,000"},
    { id:5,amount:"50,000"},
    { id:4,amount:"25,000"},
    { id:3,amount:"10,000"},
    { id:2,amount:"5,000"},
    { id:1,amount:"2,000"},
    {id:0,amount:"0"}
],[])
const [pausetime,setPausetime]=useState(false)
const [hint,setHint]=useState(true)
const [pool,setPool]=useState(false)
const [qno,setQno]=useState(1);
const[start,setStart]=useState(false)
const [stop,setStop]=useState(false)
const [showtype,setShowtype]=useState(true)
const handle=()=>{
  setTimeout(()=>{
    setShowtype(false)
  },35000) 
}

handle()



  return (

    <div className="app">
          
        <div className="main">
        {!showtype&&<Topbar setHint={setHint} data={data} questionno={qno} setPool={setPool} setPausetime={setPausetime}/>}
          <div className="heading">

         {showtype&&<Typewriter 
       onInit={(Typewriter)=>{
        Typewriter.typeString(`Welcome To My Quiz ${JSON.parse(localStorage.getItem("userreg")).email}`).pauseFor('5000').deleteAll().start()
        Typewriter.typeString("Answer All 12 Question To Win The Game").pauseFor('5000').deleteAll().start()
        Typewriter.typeString("Lets Begin...Your Time Starts Now").pauseFor('5000').deleteAll().start().stop()
        
         }   }/>}
          </div>
            {!stop?
            !showtype&&(<Question data={data} setStop={setStop} setQuestionNumber={setQno} questionNumber={qno} start={start} hint={hint} setHint={setHint} pausetime={pausetime} setPausetime={setPausetime}/>):
               <>
               <div className='Congrats'>
               <Typewriter 
       onInit={(Typewriter)=>{
       Typewriter.typeString("Congratulations!!!").pauseFor('5000').start()
         }   }/>
               </div>
             
               <div className='earn'>
                You Earned:{amount[12-qno+1].amount?amount[12-qno+1].amount:'0'}
               </div>
               </>
             }</div>
            <div className="pyramid">
            {!pool?
            <ul className="list">
                {
                  amount.filter((s)=>s.id!==0).map((s)=>{
                    return(
                    <li key={s.id}className={qno===s.id?'moneylistactive':'moneylist'}>{s.amount}</li>
                    )
                  })
                }
                
            </ul>:
              <Audiencepool data={data} questionno={qno} setPool={setPool}/>
            
            }
            </div>
            
      </div>
  )
}
