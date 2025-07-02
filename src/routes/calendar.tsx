import { createFileRoute } from '@tanstack/react-router'
import CalendarScrenn from '../components/pages/CalendarScreen'


export const Route = createFileRoute('/calendar')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CalendarScrenn />
}
