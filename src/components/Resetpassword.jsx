import React,{useState} from 'react'
import AxiosService from '../common/ApiService'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Resetpassword() {
    let [token,setToken] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()
    let validateReset = async(e)=>{
        e.preventDefault()
        try {
            let res = await AxiosService.post('/resetPassword',{
                token,
                password
            })
            if(res.status===200)
            {
                toast.success("Password Reset Successfull")
                navigate('/')
            }

        } catch (error) {
            toast.error(error.response.data.message || "Error Occoured! Please try after some time")
        }
    }
  return  <div className="container-fluid ps-md-0">
        <div className="container">
          <div className="row">
              <h3 className="login-heading mb-4">Reset Your Password</h3>

            {/* <!-- Sign In Form --> */}
            <form>
            <div className="form-floating mb-3">
                <input type="token" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setToken(e.target.value)}/>
                <label htmlFor="floatingInput">Reset Key</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="d-flex gap-3">
                <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" onClick={(e)=>validateReset(e)}>Reset</button>
            </div>

            </form>            
    </div>
  </div>
</div>
}

export default Resetpassword