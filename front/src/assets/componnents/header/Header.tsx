import "./header.css"
import { Link } from "react-router"

export default function Header() {
  return (
    <div className="mainHeader">
        <Link className="linkHeaders" to={'/homepage'}>HOME PAGE</Link>
        <Link className="linkHeaders" to={"/newalert"}>NEW ALERT</Link>
        <Link className="linkHeaders" to={"/deletealert"}>DELETE PAGE</Link>
        <Link className="linkHeaders" to={"/getalerts"}>GET ALERT</Link>
    </div>
  )
}