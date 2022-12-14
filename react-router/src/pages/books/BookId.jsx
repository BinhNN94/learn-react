import { useEffect } from "react";
import { NavLink, useNavigate, useOutletContext, useParams } from "react-router-dom";

const BookId = () => {
    const {id} = useParams();
    const {hello} = useOutletContext();
    const navigate = useNavigate();

    const backToPrevious = () => {
        navigate(-1);
    }
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate("/");
    //     }, 1000);
    // })
    const backToList = () => {
        navigate("/");
    }

    return ( <>
        <h1>Book Id: {id}</h1>
        <p>{hello}</p>
        <NavLink to="/books" >Back to List</NavLink> <br />
        <NavLink onClick={backToPrevious} >Back to Previous</NavLink>
    </> );
}
 
export default BookId;