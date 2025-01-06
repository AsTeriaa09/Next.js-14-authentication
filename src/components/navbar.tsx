import Link from "next/link";

const Navbar = () => {
  return <div>
    <nav>
        <Link href="/">Homepage</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/premium">Premium</Link>
        <Link href="/login">Login</Link>
    </nav>
  </div>;
};

export default Navbar;
