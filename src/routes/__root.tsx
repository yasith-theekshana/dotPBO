import { Outlet, createRootRoute } from "@tanstack/react-router"
import Navbar from "../layout/navbar"
import Footer from "../layout/footer"

function RootLayout() {
  return (
    <div className="min-h-screen bg-brand-50 text-slate-800">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export const Route = createRootRoute({ component: RootLayout })
