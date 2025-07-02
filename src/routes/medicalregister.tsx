import { createFileRoute } from '@tanstack/react-router'
import MedicalRegisterPage from '@/components/pages/MedicalRegisterPage';

export const Route = createFileRoute('/medicalregister')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MedicalRegisterPage/>
}
