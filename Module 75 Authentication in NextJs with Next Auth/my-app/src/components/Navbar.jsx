import Link from "next/link";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <nav style={{ padding: "15px", background: "#020617" }}>
      <ul
        style={{
          display: "flex",
          gap: "25px",
          listStyle: "none",
          color: "white",
        }}
      >
        
        <li>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/addstudent" style={{ color: "white", textDecoration: "none" }}>
            Add Student
          </Link>
        </li>
        <li>
          {/* <Link href="/login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </Link> */}
          <LoginButton/>
        </li>

        <li>
          <Link href="/register" style={{ color: "white", textDecoration: "none" }}>
            Register
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
