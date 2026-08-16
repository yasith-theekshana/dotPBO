import { createFileRoute } from "@tanstack/react-router"
import ServiceDetailPage from "../pages/service/service-detail"

export const Route = createFileRoute("/services/$serviceId")({
  component: ServiceDetailPage,
})
