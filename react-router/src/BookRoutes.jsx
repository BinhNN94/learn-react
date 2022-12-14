import { Route, Routes } from "react-router-dom";
import Book1 from "./pages/books/Book1";
import BookCreate from "./pages/books/BookCreate";
import BookId from "./pages/books/BookId";
import BookLayout from "./pages/books/BookLayout";
import BookList from "./pages/books/BookList";

const BookRoutes = () => {
    return ( <>
        <Routes>
            <Route element={<BookLayout />}>  {/* Adding Layout  */}
                <Route index element={<BookList />} />  {/*Default component  */}
                <Route path=":id" element={<BookId />} />
                <Route path="1" element={<Book1 />} />
                <Route path="create" element={<BookCreate />} /> 
            </Route>
        </Routes>
    
    </> );
}
 
export default BookRoutes;