import Link from "next/link"

import { auth } from "@/auth"
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react"

const Header = async () => {
  const session = await auth()
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem>
          {session?.user ? <div>SignedIn</div> : <div>SignedOUt</div>}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
