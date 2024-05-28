import { useState } from "react"
import  {useNavigate ,Link} from 'react-router-dom'
function LoginPage(){
const [email,setEmail] = useState("")
const [password,setPass] = useState("")
const navigate = useNavigate()
async function handleLoginFetch(e){
    e.preventDefault()
    try {
        console.log(":dfg");
        let data = await fetch('http://localhost:3000/auth/login',{
            method : 'POST',
            credentials:true,
            headers:{'Content-Type':'application/json'},
            body : JSON.stringify({email,password})
        })
        console.log(data);
        if(data.ok){
            data = await data.json()
            console.log('Welcome bro') ;
        //   Cookies.set('jwt',data.token)
            navigate('/home')
        }
    } catch (error) {
    }
}
return(  
    <div className="login">
        <form className='log-form'>
        <h1> Please Login To Continue.. </h1>
            <label> Email: </label>
            <input className='input-log' type="text" placeholder="Enter Your Name..." 
            value={email} onChange={(e)=>setEmail(e.target.value)}  />
            <br/><br/>
            <label>Password: </label>
            <input className='input-log' type="password" placeholder="Enter Your PassWord..." 
            value={password} onChange={(e)=>setPass(e.target.value)} />
            <br/><br/>
            <button type="submit" onClick={handleLoginFetch}> Login  </button>
            <br/><br/>
            <Link to="/register"> You don't have an account! go to Register </Link>
        </form>
    </div>
)
}

export default LoginPage