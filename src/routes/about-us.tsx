import { createFileRoute } from "@tanstack/react-router"
import AboutUsPage from "../pages/about-us/page"

export const Route = createFileRoute("/about-us")({
  component: AboutUsPage,
})
