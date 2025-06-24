import TermsAndConditionsPage from '@/components/pages/TermsAndConditionsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TermsAndConditionsPage />
}
