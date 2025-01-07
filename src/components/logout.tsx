import { logout } from "@/actions"


const Logout = () => {
  return (
    <form action={logout}>
      <button>logout</button>
    </form>
  )
}

export default Logout
