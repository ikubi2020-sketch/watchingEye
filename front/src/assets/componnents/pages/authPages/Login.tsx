import { useNavigate } from "react-router"
import { globalAxios } from "../../../utils/utiles"


export default function Login() {
    const navigate = useNavigate()

    const userDetails = {
        id : "",
        password : ""
    }
    async function handelButton() {
    const {data, error} = await globalAxios("post", "", {}, {}, userDetails)
  if(error){console.log(error), alert(error)}
  else{
    localStorage.setItem("userToken" , data.message.token)
    navigate("/homepage")
  }
  }


  return (
    <div>
        <h1>welcome to watching eye</h1>
        <div>
            <input className="fieldDeleteForm" onChange={(e) => userDetails.password = e.target.value} type="text" placeholder="enter alert password" />
            <input className="fieldDeleteForm" onChange={(e) => userDetails.id = e.target.value} type="text" placeholder="enter alert id" />
            <button className="submitButton" onClick={handelButton}>delete</button>
        </div>
    </div>
  )
}
