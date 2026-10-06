import { Navigate, Outlet } from "react-router"

export default function ProtectedRoute() {
    const token = localStorage.getItem("userToken")
    if(!token) {
        <Navigate to={"/login"}/>
    }
 return <Outlet />
}
