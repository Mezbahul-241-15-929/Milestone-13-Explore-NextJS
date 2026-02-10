
import Link from "next/link";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions)

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
          {session?.user ? (<LogoutButton />) : (<LoginButton />)}
        </li>

        {/* </li>
        <li>
          <LogoutButton />

        </li>
        <li>
          <LoginButton />
        </li> */}

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
