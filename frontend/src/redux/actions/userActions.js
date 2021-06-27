import axios from "axios"

export const register=(newUser,history)=>async(dispatch)=>{
    try {
        const result=await axios.post ("/api/user/register,newUser")
        dispatchEvent({
            type:"ADD_USER",
            payload=result.data
        })
        history.push("user/profile")
    } catch (error) {
        dispatch({
            type:"FAILED_TO_ADD",
            payload:error.response.data.errors
        })
    }
}
export const login=(user,history)=>async(dispatch)=>{
    try {
        const result=await axios.post ("/api/user/login,user")
        dispatchEvent({
            type:"LOGIN",
            payload=result.data
        })
        history.push("user/profile")
    } catch (error) {
        dispatch({
            type:"FAILED_TO_ADD",
            payload:error.response.data.errors
        })
    }
}

export const current=()=>async(dispatch)=>{
    try {
        
   
    const config={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }
    const result =await axios.get("/api/user/current",config)  
    dispatch({
        type:"CURRENT_USER",
        payload:result.data.user
    })}
    catch (error) {
        dispatch({
            type:"FAILED_TO_ADD",
            payload:error.response.data
        })
    }
}
export const logout =()=>{
    {
        type:"LOGOUT"
    }
}