import React,{useState,useEffect} from 'react'
import Welcome from './LandingPage/Welcome';

function LandingPage() {  
    const [response,setResponse] = useState("")
    const serverURL = process.env.REACT_APP_SERVER_URL
      useEffect(()=>{
              const authToken = localStorage.getItem("auth-token");
              const user = fetch(`http://${serverURL}/login/fetchuser`,{
                  method: 'POST',
                  mode: "cors",
                  headers: {
                      "Content-Type": "application/json",
                      "auth-token": authToken
                  }
              })
              user.then(data => data.json()).then(data=> setResponse(data)).catch(err=> console.error(err))
      },[])
      
    console.log(response)
const loggedIn = response.userName?true:false;
console.log(response)
    return (
    <>
      {loggedIn&&<Welcome props={response}/>}
    </>
  )
}

export default LandingPage
