import { globalAxios } from "../../utils/utiles"
import { useNavigate } from "react-router"

export default function NewAlert() {
  const navigate = useNavigate()
  const newAlert = {
    displayName : "",
    description : "",
    priority : "",
    arena : "",
    status : "",
    lon : 0,
    lat : 0
  }
  async function handelButton() {
    const {data, error} = await globalAxios("post", "", {}, {},newAlert)
  if(error){console.log(error), alert(error)}
  else{
    navigate("/homepage")
  }
  }
  
  return (
    <div>
      <div>
        <input onChange={(e) => newAlert.displayName = e.target.value} type="text" placeholder="displayName"/>
        <input onChange={(e) => newAlert.description = e.target.value} type="text" placeholder="description of alert"/>
        <input onChange={(e) => newAlert.priority = e.target.value} type="text" placeholder="priority of alert"/>
        <input onChange={(e) => newAlert.arena = e.target.value} type="text" placeholder="arena of alert"/>
        <input onChange={(e) => newAlert.status = e.target.value} type="text" placeholder="status of alert"/>
        <input onChange={(e) => newAlert.lon = e.target.value} type="number" placeholder="enter longitude"/>
        <input onChange={(e) => newAlert.lat = e.target.value} type="number" placeholder="enter latitude of"/>
      </div>
      <button onClick={handelButton}>send details</button>
    </div>
  )
}
