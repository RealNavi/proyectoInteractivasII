import { createFileRoute } from '@tanstack/react-router'
import ProfilePage from '../components/pages/ProfilePage'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProfilePage name="Ana Pérez Pérez" id="123456789" />
}
