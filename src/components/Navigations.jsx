



import { Link } from "react-router-dom";

export default function Navigations() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        {/* <li>
          <Link to="/singlebook">Singlebook</Link>
        </li> */}
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}