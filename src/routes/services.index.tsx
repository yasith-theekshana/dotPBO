import { createFileRoute } from "@tanstack/react-router"
import ServicesPage from "../pages/services/page"

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
})
