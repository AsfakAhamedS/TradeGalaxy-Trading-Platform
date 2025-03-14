import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:4500/"


function LoginPage({open, close }){
    const navigate = useNavigate(); 
    const [selected,setSelected] = useState(true)
    const [next,setNext] = useState(true)
    const [disable,setDisable] = useState(false)
    const [logindata,setLogindata] = useState({email:"",password:""})
    const [formdata,setFormdata] = useState({name:"",email:"",phone:"",password:"",termsAccepted:false})
    const[verified,setVerified]=useState(false);
    const [confirmPassword,setConfirmPassword]=useState('')
    const [error, setError] = useState('')
    const [loginerror,setLoginerror] = useState('')
    const [inputsValidated,setInputValidated]=useState(true)
    const [checked,setChecked] = useState(true)
    if (!open){
        return null
    }

    function validInputs(){
        return formdata.email!=''&&formdata.name!=''&&formdata.password;
    }
    const handleinputchage = (e) => {
        const { name, value } = e.target;
        if(!selected){
            const patterns = {
              name: /^[A-Za-z\s]{2,}$/, 
              email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
              password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
              phone:/^\d{10}$/
            };
            
            if(patterns[name]){
              if (patterns[name] && value.length > 0 && !patterns[name].test(value)) {
                setError(name)
                setVerified(verify())
              }else{
                setError('')
                setVerified(verify())
              }
                setFormdata((prev) => ({ ...prev, [name]: value }))
                setDisable(false)
                setInputValidated(!validInputs)
            }
            if(name === "conpassword"){
              setConfirmPassword(value)
              console.log(value)
              setError(name)
              if(value === formdata.password){
                setDisable(false)
                setError("")
                setVerified(verify())
              }else{
                setChecked(false)
                setDisable(true)
                setVerified(false);
              }
            }
          }else{
            console.log('value',value)
            setLogindata((prev)=>({...prev,[name]:value}))
          }
    }
    const handlelogin = (e) => {
        e.preventDefault()
        axios.post(url+"getuserlogindata", {email:logindata.email,password:logindata.password})
        .then(res => {
          if(res.status==200){
              setLoginerror('')
              localStorage.setItem('Token',res.data)
              navigate('/home')
          }})
        .catch(e => {
          setLoginerror(e.response.data)
        }) 
    }

    function handleCreate(e){
        e.preventDefault();
        axios.post(url+"createuserdata",formdata)
          .then(res => {
            console.log('res===>',res)
            setLoginerror('')
          })
          .catch(e => {
            console.log(e.response.data)
            setLoginerror(e.response.data)
          })
        setSelected(!selected);
        setFormdata({name:"",email:"",password:""})
        setConfirmPassword("")
        setError("")
        setNext(true)
      }
     
      function verify(){
        return formdata.email &&formdata.password&&formdata.name&&formdata.phone
      }
  return (
    <>
        <div className="login-container">
            <div className="login-content">
                <button className="close-btn" onClick={close}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </button>
                <div className="login-head">{!selected ? "Create Account":`Wellcome Back, TradeGalaxy`}</div>
                {selected ? (
                    <div>
                        <form className='login-form' onSubmit={handlelogin}>
                            <div className="form-grp">
                                <label htmlFor="">
                                    <span className='input-label'>Email</span>
                                </label>
                                <input type="email" className="email"  name='email' value={logindata.email} onChange={handleinputchage}  placeholder='Enter Email'/>
                            </div>
                            <div className="form-grp">
                                <label htmlFor="">
                                    <span className='input-label'>Password</span>
                                </label>
                                <input type="password" className="password"  name='password' value={logindata.password} onChange={handleinputchage} placeholder='Enter Password'/>
                            </div>
                            <div className="error">
                                {loginerror && <div className="error">{loginerror}</div>}
                            </div>
                            <div className="forget">
                                <a className="forget" href="#">Forgot password?</a>
                            </div>
                            <div className="login-btn">
                                <button type='submit'>Login</button>
                            </div>
                        </form>
                        <div className="create">
                            <button onClick={() => {setSelected(!selected)}}>{!selected ? "Already have account? Login":"Create account"}</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        {next ? (
                            <div>
                            <form className='create-form'>
                                <div className="form-grp">
                                    <label htmlFor="">
                                        <span className='input-label'>Name</span>
                                    </label>
                                    <input type="text" className="name" name='name' value={formdata.name}  onChange={handleinputchage} placeholder='Enter Name'/>
                                    <div className="c-error">{`${error == 'name' ? "Minimum 2 chars" : ""}`}</div>
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="">
                                        <span className='input-label'>Email</span>
                                    </label>
                                    <input type="email" className="email" name='email' value={formdata.email}  onChange={handleinputchage} placeholder='Enter Email'/>
                                    <div className="c-error">{`${error == 'email' ? "Invalid email" : ""}`}</div>
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="">
                                        <span className='input-label'>Phone No</span>
                                    </label>
                                    <input type="type" className="phone" name='phone' value={formdata.phone}  onChange={handleinputchage} placeholder='Enter Phone no'/>
                                    <div className="c-error">{`${error == 'phone' ? "Invalid phone" : ""}`}</div>
                                </div>
                            </form>
                            <div className="create-btn">
                                <button onClick={() => {setNext(!next)}}>Next</button>
                            </div>
                            </div>
                        ) : (
                            <div>
                                <form className='create-form' >
                                    <div className="form-grp">
                                        <label htmlFor="">
                                            <span className='input-label'>Password</span>
                                        </label>
                                        <input type="password" className="password" name='password' value={formdata.password}  onChange={handleinputchage} placeholder='Enter password' />
                                        <div className="c-error">{`${error == 'password' ? "8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char" : ""}`}</div>
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="">
                                            <span className='input-label'>Confirm Password</span>
                                        </label>
                                        <input type="password" className="con-password" name='conpassword' value={confirmPassword}  onChange={handleinputchage} placeholder='confirm password'/>
                                        <div className="c-error">{`${error == 'conpassword' ? "Password doesn't match" : ""}`}</div>
                                    </div>
                                    <div className="form-grp">
                                        <input type="checkbox" checked={checked} disabled={disable}  onChange={(e) => {setChecked(!checked)}} className="checkbox"/>
                                        <label>
                                            <span className='input-label'>I agree to the Terms & Conditions</span>
                                        </label>
                                    </div>
                                    <div style={{display:`${verified && checked ? "block" : "none"}`}} className="login-btn">
                                        <button type='submit' disabled={inputsValidated} onClick={handleCreate}>Create</button>
                                    </div>
                                </form>
                                <div style={{display:`${!verified || !checked ? "block" : "none"}`}} className="create-btn">
                                    <button onClick={() => {setNext(!next)}}>Back</button>
                                </div>
                            </div>
                        )}
                        <div className="already-login">
                            <button onClick={() => {setSelected(!selected),setNext(true)}}>{!selected ? "Already have account? Login":"Create account"}</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default LoginPage;
