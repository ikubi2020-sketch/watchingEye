import Header from "../header/Header"
import Footer from "../footer/Footer"
import { Outlet } from "react-router"

export default function LayOut() {
  return (
    <div className="mainLayout">
        <Header/>
            <Outlet/>
        <Footer/>
    </div>
  )
}
