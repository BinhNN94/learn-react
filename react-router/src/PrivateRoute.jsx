import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
    const isAuth = JSON.parse(localStorage.getItem("isAuth"));
    return (
        isAuth == true ? <Outlet /> : <Navigate to="/login" state={{message: "Cannot access"}}/>
    );
}
 
export default PrivateRoutes;