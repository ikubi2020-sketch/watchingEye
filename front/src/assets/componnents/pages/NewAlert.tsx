import { globalAxios } from "../../utils/utiles"
import { useNavigate } from "react-router"
import "./newalert.css"

export default function NewAlert() {
  const navigate = useNavigate()
  const newAlert = {
    displayName : "",
    description : "",
    priority : "",
    arena : "",
    status : "",
    lon : "",
    lat : ""
  }
  async function handelButton() {
    const {data, error} = await globalAxios("post", "", {}, {},newAlert)
  if(error){console.log(error), alert(error)}
  else{
    navigate("/homepage")
  }
  }
  
  return (
    <div className="newPageMain">
      <h1>add a new alert</h1>
      <h3>to add an alert please fill app all the fields below</h3>
      <div className="mainFormOfNew">
        <input className="fieldNewForm"
         onChange={(e) => newAlert.displayName = e.target.value}
          type="text" placeholder="displayName"/>

        <input className="fieldNewForm"
         onChange={(e) => newAlert.description = e.target.value}
          type="text" placeholder="description of alert"/>

        <input className="fieldNewForm"
         onChange={(e) => newAlert.priority = e.target.value}
          type="text" placeholder="priority of alert"/>

        <input className="fieldNewForm"
         onChange={(e) => newAlert.arena = e.target.value}
          type="text" placeholder="arena of alert"/>

        <input className="fieldNewForm"
         onChange={(e) => newAlert.status = e.target.value}
          type="text" placeholder="status of alert"/>

        <input className="fieldNewForm"
         onChange={(e) => newAlert.lon = e.target.value}
         type="text" placeholder="enter longitude"/>

        <input className="fieldNewForm"
         onChange={(e) => newAlert.lat = e.target.value}
          type="=text" placeholder="enter latitude of"/>
      </div>
      <button className="newButton" onClick={handelButton}>send details</button>
    </div>
  )
}
