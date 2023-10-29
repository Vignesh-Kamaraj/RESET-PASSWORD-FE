import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import ProtectedRoute from "./common/ProtectedRoute"
import Resetpassword from "./components/Resetpassword"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<>
          <ProtectedRoute>
          <Header/>
          <Dashboard/>
          </ProtectedRoute>
          </>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/resetPassword" element={<Resetpassword/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App