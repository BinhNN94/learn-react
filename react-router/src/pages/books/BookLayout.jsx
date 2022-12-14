import { Link, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
    const [searchParams, setSearchParams] = useSearchParams({id: ""});
    const id = searchParams.get("id")
    return ( <>
        <h2>Book layout</h2>
        <Link to="/books/1"> Book 1</Link> 
        <Link to="/books/2"> Book 2</Link> 
        <Link to="/books/create"> Create Book</Link>  <br />
        <input type="text" value={id} onChange={ e => setSearchParams({id: e.target.value})}/>
        <Outlet context={{hello: "Have a good day"}}/>  {/* Render child item , add outlet context*/}
    </> );
}
 
export default BookLayout;