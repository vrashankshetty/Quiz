import React,{useState} from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const [name,setName]=useState('');
  const [password,setPassword]=useState('')
  const navigate=useNavigate();
  const [err,setErr]=useState(false)
  const handle=async(e)=>{
e.preventDefault();
    const user={
    "email":name,
    "password":password
    }
    if(name===''||password===''){
    setErr(true)
    }else{
    localStorage.setItem("userreg",JSON.stringify(user))
    navigate('/quiz')
    }
  }


  
  return (
    <div className='containers'>
      <div className='title'>
      Hip Hop Quiz
      </div>
        <div className='mains'>
          <div className='sidebar'>
          <span className='emailname'>Name:</span>
          <span className='passwordname'>Password:</span>
          </div>
          <div className='mainbar'>
          <input type="email" className="email" value={name}  onChange={(e)=>setName(e.target.value)}/>
          <input type="password" className="password" value={password} placeholder='Any Password' onChange={(e)=>setPassword(e.target.value)} />

          {err&&<div className='warning'>Enter the name and password!!</div>}
          <button className='Signin' onClick={handle}>Sign in</button>
          </div>  
        </div>
    </div>
  )
}
