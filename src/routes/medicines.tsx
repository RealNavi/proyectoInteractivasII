import { createFileRoute } from '@tanstack/react-router'
import MedicationManagerPage from '@/components/pages/MedicationManagerPage'

export const Route = createFileRoute('/medicines')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MedicationManagerPage />
}
