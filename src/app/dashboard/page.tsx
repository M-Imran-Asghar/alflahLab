
export default function DashboardPage() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600 mb-4">
          This is your protected dashboard page. Only authenticated users can see this content.
        </p>
        
        {/* Dashboard content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Stats cards */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Total Users</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">1,234</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Revenue</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">$12,345</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Growth</h3>
            <p className="text-2xl font-bold text-purple-600 mt-2">+12%</p>
          </div>
        </div>
      </div>
    </div>
  )
}