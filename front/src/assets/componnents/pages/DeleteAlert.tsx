import { useNavigate } from "react-router"
import { globalAxios } from "../../utils/utiles"
import "./deleteAlert.css"

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
    <div className="deleteMain">
        <div className="deleteSub">
            <h1 className="deleteHeadline">delete page</h1>
            <h3 className="deleteSubHeadline">to delete an alert please enter the alert id below</h3>
        <div>
            <input className="fieldDeleteForm" onChange={(e) => id = e.target.value} type="text" placeholder="enter alert id" />
            <button className="deleteButton" onClick={handelButton}>delete</button>
        </div>
        <p className="deleteParagraph">be careful !! delete alert can not be restore</p>
        </div>
    </div>
  )
}
