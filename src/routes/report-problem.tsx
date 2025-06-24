import ReportProblemPage from '@/components/pages/ReportProblemPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/report-problem')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ReportProblemPage />
}
