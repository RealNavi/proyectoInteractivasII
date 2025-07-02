import ConfigNotificationsPage from '@/components/pages/ConfigNotificationsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/config-notifications')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ConfigNotificationsPage/>
}
