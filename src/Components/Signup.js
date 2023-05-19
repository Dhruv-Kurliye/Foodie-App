import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import './Form.css'
import { useNavigate,Link } from 'react-router-dom'

export default function Signup() {
    const history=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  
    async function submit(e){
      e.preventDefault();
  
      try{
        await axios.post("http://localhost:8000/Signup",{email,password})
        .then(res=>{
          if(res.data=="exist"){
            alert("User already exists");
              //
          }
          else if(res.data=="notexist"){
            history("/")
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
          <Link className='formitem'to="/login">Login</Link>
        </div>
        <div><Footer></Footer></div>
  
        
      </div>

  )
}
