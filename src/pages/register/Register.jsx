import React,{useState} from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const [name,setName]=useState('');
  const [password,setPassword]=useState('')
  const navigate=useNavigate();
  const handle=async(e)=>{
e.preventDefault();
    const user={
    "email":name,
    "password":password
    }
    localStorage.setItem("userreg",JSON.stringify(user))
    navigate('/quiz')
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
          <input type="text" className="password" value={password} placeholder='Any Password' onChange={(e)=>setPassword(e.target.value)} />
          <button className='Signin' onClick={handle} disabled={name===''||password===''}>Sign in</button>
          </div>  
        </div>
    </div>
  )
}
