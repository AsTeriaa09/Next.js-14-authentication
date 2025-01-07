import Link from "next/link";
import Logout from "./logout";
import { getSession } from "@/actions";

const Navbar = async () => {
  const session = await getSession();

  // console.log(session)
  return (
    <div>
      <nav>
        <Link href="/">Homepage</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/premium">Premium</Link>
        <Link href="/login">Login</Link>
        {session.isLoggedIn && <Logout />}
      </nav>
    </div>
  );
};

export default Navbar;
