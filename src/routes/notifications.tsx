import { createFileRoute } from '@tanstack/react-router'
import NotificationPage from '../components/pages/NotificationPage'

export const Route = createFileRoute('/notifications')({
  component: RouteComponent,
})

function RouteComponent() {
  return <NotificationPage />
}
