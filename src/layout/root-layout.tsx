import { Outlet, useRouterState } from "@tanstack/react-router"
import Navbar from "./navbar"
import Footer from "./footer"

export default function RootLayout() {
  const hasOwnLayout = useRouterState({
    select: (state) => ["/", "/about-us", "/services"].includes(state.location.pathname.replace(/\/$/, "") || "/"),
  })
  if (hasOwnLayout) return <Outlet />
  return (
    <div className="min-h-screen bg-brand-50 text-slate-800">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
