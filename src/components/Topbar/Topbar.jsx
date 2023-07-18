import React, { useState } from 'react'
import {DoDisturb,Poll} from "@mui/icons-material"

import './Topbar.css'

export default function Topbar({setHint,data,questionno,setPool,setPausetime}) {
  const [hidehint,setHidehint]= useState(false)
  const [hidepool,setHidepool]=useState(false)
  const handlechoice=()=>{
     setHint(false)
     setHidehint(true)
     setPausetime(true)
  }
  const handle=()=>{
     setPool(true)
     setHidepool(true)
     setPausetime(true)
  }
  return (
    <>
    <div className="top">

    {!hidehint&&<button onClick={handlechoice} className='choice'><div><DoDisturb className='icon1'/></div>
    <div className='iconname'>Choice</div>
    </button>}
    <div className='choiceinfo'>
     You can eliminate two options
    </div>
    <div>
    {!hidepool&&<button className="Audiencepool" onClick={handle}><Poll className='icon2'/>
    <div className='iconname'>Poll</div>
    </button>}
    <div className='pollinfo'>
     You can take opinion from Audience
     <div style={{color:"red"}}>Note:Remains only for 15s</div>
    </div>
    </div>
    </div>
    </>
   

  )
}
