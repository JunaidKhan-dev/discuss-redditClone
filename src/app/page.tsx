import * as actions from "@/actions"
import { auth } from "@/auth"
import Profile from "@/components/Profile"
import { Button } from "@nextui-org/react"

export default async function Home() {
  const session = await auth()

  return (
    <main>
      <form action={actions.signIn} className="mb-4">
        <Button type="submit">SignIn</Button>
      </form>

      <form action={actions.signOut} className="mb-4">
        <Button type="submit">SignOut</Button>
      </form>

      {session?.user ? (
        <div>
          <pre>{JSON.stringify(session.user, null, 2)}</pre>
        </div>
      ) : (
        <div>SignedOut</div>
      )}

      <hr className="mb-20" />
      <Profile />
    </main>
  )
}
