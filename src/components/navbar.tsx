import Link from "next/link";
import Logout from "./logout";

const Navbar = () => {
  return <div>
    <nav>
        <Link href="/">Homepage</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/premium">Premium</Link>
        <Link href="/login">Login</Link>
        <Logout/>
    </nav>
  </div>;
};

export default Navbar;
