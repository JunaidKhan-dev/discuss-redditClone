"use client"
import { useSession } from "next-auth/react"

const Profile = () => {
  const session = useSession()

  if (session.data?.user) {
    return <div>{session.data.user.name}</div>
  }
  if (session.status === "loading") {
    return <div>Loading...</div>
  }
  return <div>User is not signedIn</div>
}

export default Profile
