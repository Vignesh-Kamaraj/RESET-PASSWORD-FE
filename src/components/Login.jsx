import React,{useState} from 'react'
import AxiosService from '../common/ApiService'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as yup from 'yup';

function Login() {

    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()

    let validateLogin = async(e)=>{
        e.preventDefault()

        try {
            let res = await AxiosService.post('/login',{
                email,
                password
            })
            if(res.status===200)
            {
                toast.success("Login Successfull")
                sessionStorage.setItem('token',res.data.token)
                navigate('/dashboard')
            }

        } catch (error) {
            toast.error(error.response.data.message || "Error Occoured! Please try after some time")
        }
    }
        let validateSignUp = async()=>{
            try {
                navigate('/signup')
                
            } catch (error) {
                toast.error(error.response.data.message)
            }
    }

    let validatereset = async(e)=>{
        e.preventDefault()
        try {
            
            let res = await AxiosService.post('/forgetPassword',{
                email
            });
            if(res.status==200)
            {
           navigate('/resetPassword')
           }
        } catch (error) {
            toast.error(error.response.data.message)
        }
}
  return  <div className="container-fluid ps-md-0">
        <div className="container">
          <div className="row">
              <h3 className="login-heading mb-4">Welcome back!</h3>

            {/* <!-- Sign In Form --> */}
            <Form>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="d-flex gap-3">
                <Button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" onClick={(e)=>validateLogin(e)}>Login</Button>
                <Button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" onClick={()=>validateSignUp()}>Sign Up</Button>
                <Button className="btn btn-lg btn-danger btn-login text-uppercase fw-bold mb-2" onClick={(e)=>validatereset(e)}>Forget Password</Button>
            </div>

            </Form>            
    </div>
  </div>
</div>
}

export default Login