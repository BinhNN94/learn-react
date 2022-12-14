import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BookRoutes from "./BookRoutes";
import Book1 from "./pages/books/Book1";
import BookCreate from "./pages/books/BookCreate";
import BookId from "./pages/books/BookId";
import BookLayout from "./pages/books/BookLayout";
import BookList from "./pages/books/BookList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/books">Book List</Link>
        </li>
      </ul>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes/>} /> { /*Routes nested inside route */}
        <Route path="*" element={<NotFound/>} />
        {/* Nested Routes
        <Route path="/books" element={<BookLayout />}>  Adding Layout 
          <Route index element={<BookList />} />  Default component 
          <Route path=":id" element={<BookId />} />
          <Route path="1" element={<Book1 />} />
          <Route path="create" element={<BookCreate />} /> 
        </Route>
        */}

        {/* Basic Route */}
        {/* 
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookId />} />
        <Route path="/books/1" element={<Book1 />} />
        <Route path="/books/create" element={<BookCreate />} /> 
        */}
      </Routes>
    </>
  );
}

export default App;
