import './App.css';
import { Route, Routes, Navigate, Link } from "react-router-dom";

function App() {
  return (

    <>
      <ul>
        <li>
          <Link to="/">HOME HOME</Link>
        </li>
        <li>
          <Link to="/posts">Post List</Link>
        </li>
        <li>
          <Link to="/posts/:id">Post detail</Link>
        </li>
        <li>
          <Link to="/posts/new">New Post</Link>
        </li>
        <li>
          <Link to="/posts/edit/:id">Edit Post</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>HOME HOME</h1>} />
        <Route path="/posts/new" element={<h1>New Post!</h1>} />
        <Route path="/posts" element={<h1>Post List Page</h1>} />
        <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
        <Route path="/posts/edit/:id" element={<h1>Edit Post Page</h1>} />
        // default route
        <Route path="*" element={<Navigate replace to="/" />} />

      </Routes>
    </>
  );
}

export default App;
