import { globalAxios } from "../../utils/utiles"
import { useNavigate } from "react-router"

export default function GetAlert() {
    const navigate = useNavigate()
    let id = ""
    async function handelGetButton() {
        const {data, error} = await globalAxios("post", id, {}, {},{})
          if(error){console.log(error), alert(error)}
          else{
            navigate("/homepage")
          }
    }
    async function handelGetAllButton(){
        const {data, error} = await globalAxios("post", "", {}, {}, {})
          if(error){console.log(error), alert(error)}
          else{
            navigate("/homepage")
          }
    }
  return (
    <div>
        <h1>get requested alert here</h1>
        <div>
            <h3>to get one alert enter alert id here</h3>
            <input className="fieldGetForm"
            onChange={(e) => id = e.target.value}
            type="text" placeholder="enter longitude"/>
            <button className="newButton" onClick={handelGetButton}>send details</button>
        </div>
        <div>
            <h3>to get all alert press here</h3>
            <button className="newButton" onClick={handelGetAllButton}>send details</button>
        </div>
    </div>
  )
}
