"use client"
import { useSession } from "next-auth/react"

import * as actions from "@/actions"
import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react"

function HeaderAuth() {
  const session = useSession()
  let authContent: React.ReactNode

  if (session.status === "loading") {
    authContent = null
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data?.user?.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">SignOut</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    )
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              SignIn
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              SignUp
            </Button>
          </form>
        </NavbarItem>
      </>
    )
  }
  return authContent
}

export default HeaderAuth
