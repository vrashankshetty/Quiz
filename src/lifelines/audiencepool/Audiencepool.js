import React, { useEffect, useState } from 'react'
import {CChart} from "@coreui/react-chartjs"
export default function Audiencepool({data,questionno,setPool}) {
  const [Question,setQuestion]=useState(data[questionno-1])
  const [show,setShow]=useState(true)  
  useEffect(()=>{
     setQuestion(data[questionno-1])
  },[questionno])
  const pool=[]
  console.log("audienceo",Question)
  for(let i=0;i<4;i++){
    if(!Question.answers[i].correct){
        pool[i]=Math.floor(Math.random()*100)
    }
    else{
        pool[i]=99
    }
  }
  console.log("pool",pool)
  setTimeout(()=>{
    setPool(false)
    setShow(false)
  },10000)
  return (
    <div class='chart'>
    {show&&<CChart
  type="bar"
  data={{
    labels: [Question.answers[0].text,Question.answers[1].text,Question.answers[2].text,Question.answers[3].text],
    datasets: [
      {
        label: 'Audience Vote',
        backgroundColor: '#f87979',
        data: pool,
      },
    ],
  }}
  labels="options"
/>}
    </div>
  )
}
