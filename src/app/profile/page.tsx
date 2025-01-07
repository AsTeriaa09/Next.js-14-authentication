import { getSession } from "@/actions";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/");
  }
  return (
    <div className="profile">
      <h1>Welcome to the profile page</h1>
      <p>welcome, {session.username}</p>
      <span>
        you're a <b>{session.isPro ? "premium" : "free"} user</b>
      </span>
    </div>
  );
};

export default ProfilePage;
