import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import './Form.css'
import { useNavigate,Link } from 'react-router-dom'

export default function Login() {
  const history=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/login",{email,password})

      .then(res=>{
        if(res.data=="exist"){
            history("/")
        }
        else if(res.data=="notexist"){
            alert("User have not sign up")
        }
    })
    .catch(e=>{
        alert("wrong details")
        console.log(e);
    })

      
    }
   

    catch{
      console.log(e);
    }

  }
  return (
    <div>
      <div><Navbar/></div>
      <div>
        <form className='form' action="POST">
          <input className='formitems' type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
          <input className='formitems' type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
          <input type="submit" onClick={submit}/>
        </form>
        <br />
        <p className='formitem'>OR</p>
        <br />
        <Link to="/Signup" className='formitem'>Signup</Link>
      </div>
      <div><Footer></Footer></div>

      
    </div>

    
  )
}
