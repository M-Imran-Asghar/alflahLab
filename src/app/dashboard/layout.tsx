import { redirect } from 'next/navigation'
import { isAuthenticated } from '../components/lib/auth'
import Navbar from '../components/layout/navbar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const authenticated = await isAuthenticated()
  
  // if (!authenticated) {
  //   redirect('/login')
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}