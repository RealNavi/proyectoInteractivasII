import { createFileRoute } from '@tanstack/react-router'
import SearchPage from '../components/pages/SearchPage'

export const Route = createFileRoute('/search')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SearchPage />
}
