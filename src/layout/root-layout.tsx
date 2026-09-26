import { Outlet, useRouterState } from "@tanstack/react-router"
import Navbar from "./navbar"
import Footer from "./footer"

export default function RootLayout() {
  const isHome = useRouterState({ select: (state) => state.location.pathname === "/" })
  if (isHome) return <Outlet />
  return (
    <div className="min-h-screen bg-brand-50 text-slate-800">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
