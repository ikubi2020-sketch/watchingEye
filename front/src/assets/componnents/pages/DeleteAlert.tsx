import { useNavigate } from "react-router"
import { globalAxios } from "../../utils/utiles"

export default function DeleteAlert() {
    const navigate = useNavigate()
    let id = ""
  async function handelButton() {
    const {data, error} = await globalAxios("delete", id, {}, {}, {})
  if(error){console.log(error), alert(error)}
  else{
    navigate("/homepage")
  }
  }
  return (
    <div>
        <h1>delete page</h1>
        <h3>to delete an alert please enter the alert id below</h3>
        <div>
            <input className="fieldDeleteForm" onChange={(e) => id = e.target.value} type="text" placeholder="enter alert id" />
            <button onClick={handelButton}>delete</button>
        </div>
    </div>
  )
}
