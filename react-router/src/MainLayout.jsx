import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {

    const logout = () => {
        localStorage.setItem("isAuth", false);
      }

    return ( <>
        <ul>
            <li>
            <Link to="/"> Home</Link>
            </li>
            <li>
            <Link to="/books">Book List</Link>
            </li>
            <li>
            <Link to="/login" onClick={logout}>Logout</Link>
            </li>
        </ul>
        <Outlet />
    </> );
}
 
export default MainLayout;