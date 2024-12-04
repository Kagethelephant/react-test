import { Navbar } from "./components/navbar"
import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <>
      <Navbar/>
      <main>
        {/* this represents all of the child routes */}
        <Outlet/>
      </main>
    </>
  )
}
