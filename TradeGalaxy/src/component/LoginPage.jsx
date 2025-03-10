import React, { useState } from "react";

function LoginPage({open, close }){
    const [selected,setSelected] = useState(true)
    const [next,setNext] = useState(true)
    const [disable,setDisable] = useState(false)
    if (!open){
        return null
    }

  return (
    <>
        <div className="login-container">
            <div className="login-content">
                <button className="close-btn" onClick={close}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </button>
                <div className="login-head">{!selected ? "Create Account":"Wellcome Back"}</div>
                {selected ? (
                    <div>
                        <form className='login-form'>
                            <div className="form-grp">
                                <label htmlFor="">
                                    <span className='input-label'>Email</span>
                                </label>
                                <input type="text" className="email"  placeholder='Enter Email'/>
                                <div className="error"></div>
                            </div>
                            <div className="form-grp">
                                <label htmlFor="">
                                    <span className='input-label'>Password</span>
                                </label>
                                <input type="password" className="password" placeholder='Enter Password'/>
                                <div className="error"></div>
                            </div>
                            <div className="error">
                                {/* {loginerror && <div className="error">{loginerror}</div>} */}
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
                                    <input type="text" className="name" placeholder='Enter Name'/>
                                    {/* <div className="c-error">{`${error == 'name' ? "Minimum 2 chars" : ""}`}</div> */}
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="">
                                        <span className='input-label'>Email</span>
                                    </label>
                                    <input type="email" className="email" placeholder='Enter Email'/>
                                    {/* <div className="c-error">{`${error == 'email' ? "Invalid email" : ""}`}</div> */}
                                </div>
                                <div className="form-grp">
                                    <label htmlFor="">
                                        <span className='input-label'>Phone No</span>
                                    </label>
                                    <input type="number" className="phone" placeholder='Enter Email'/>
                                    {/* <div className="c-error">{`${error == 'email' ? "Invalid email" : ""}`}</div> */}
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
                                        <input type="password" className="password"placeholder='Enter password' />
                                        {/* <div className="c-error">{`${error == 'password' ? "8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char" : ""}`}</div> */}
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="">
                                            <span className='input-label'>Confirm Password</span>
                                        </label>
                                        <input type="password" className="con-password" name='conpassword' placeholder='confirm password'/>
                                        {/* <div className="c-error">{`${error == 'conpassword' ? "Password doesn't match" : ""}`}</div> */}
                                    </div>
                                    <div className="form-grp">
                                        <input type="checkbox" className="checkbox"/>
                                        <label>
                                            <span className='input-label'>I agree to the Terms & Conditions</span>
                                        </label>
                                    </div>
                                    <div style={{display:`${disable === true ? "block" : "none"}`}} className="login-btn">
                                    <button type='submit'>Create</button>
                                    </div>
                                </form>
                                <div style={{display:`${disable === false ? "block" : "none"}`}} className="create-btn">
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
