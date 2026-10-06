import { useNavigate } from "react-router"
import { globalAxios } from "../../../utils/utiles"

export default function Register() {
    const navigate = useNavigate()

    const userDetails = {
        username : "",
        password : "",
        email : "",
        role: "",
        assignedArena: ""
    }
     async function handelButton() {
    const {data, error} = await globalAxios("post", "", {}, {}, userDetails)
    if(error){console.log(error), alert(error)}
    else{
    navigate("/homepage")
  }
  }

  return (
    <div>
        <div>
            <input className="fieldDeleteForm" onChange={(e) => userDetails.username = e.target.value} type="text" placeholder="enter user username" />
            <input className="fieldDeleteForm" onChange={(e) => userDetails.password = e.target.value} type="text" placeholder="enter user password" />
            <input className="fieldDeleteForm" onChange={(e) => userDetails.email = e.target.value} type="email" placeholder="enter user email" />
            <input className="fieldDeleteForm" onChange={(e) => userDetails.role = e.target.value} type="text" placeholder="enter user role" />
            <input className="fieldDeleteForm" onChange={(e) => userDetails.assignedArena = e.target.value} type="text" placeholder="enter use assignedArena" />
        </div>
        <button className="submitButton" onClick={handelButton}>delete</button>
    </div>
  )
}
