import { NavLink, useLocation } from "react-router-dom";

const Login = () => {
    const {state} = useLocation();
    const access = (isAuth) => {
        localStorage.setItem("isAuth", isAuth);
    }

    return ( <>
        <h1>Login page</h1>
        <NavLink to="/" onClick={() => access(true)}>Access </NavLink>
        <NavLink to="/" onClick={ () => access(false)}>Cannot Access</NavLink>
        <h4>{state?.message}</h4>
    </> );
}
 
export default Login;