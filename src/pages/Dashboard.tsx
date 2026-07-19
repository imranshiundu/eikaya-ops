import { BRAND } from '../config/brand'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
                {BRAND.name.charAt(0)}
              </div>
              <span className="font-bold text-lg text-slate-900">{BRAND.name} Ops</span>
            </div>
            <div className="text-sm text-slate-500">Admin Dashboard</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-8">Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Users" value="1,234" change="+12%" />
          <StatCard title="Active Listings" value="456" change="+8%" />
          <StatCard title="Active Deals" value="78" change="+15%" />
          <StatCard title="Revenue (KSh)" value="123,456" change="+22%" />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <ActivityItem 
              type="deal" 
              message="New deal completed in Kilimani" 
              time="2 minutes ago" 
            />
            <ActivityItem 
              type="partner" 
              message="New partner application from Westlands Estates" 
              time="15 minutes ago" 
            />
            <ActivityItem 
              type="listing" 
              message="New listing added in Karen" 
              time="1 hour ago" 
            />
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="text-sm font-medium text-slate-500 mb-1">{title}</div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-sm text-green-600 font-medium mt-1">{change}</div>
    </div>
  )
}

function ActivityItem({ type, message, time }: { type: string; message: string; time: string }) {
  const colors: Record<string, string> = {
    deal: 'bg-green-100 text-green-600',
    partner: 'bg-blue-100 text-blue-600',
    listing: 'bg-purple-100 text-purple-600',
  }
  
  return (
    <div className="flex items-start gap-3">
      <div className={`w-2 h-2 rounded-full mt-2 ${colors[type] || 'bg-slate-100 text-slate-600'}`} />
      <div className="flex-1">
        <div className="text-sm text-slate-900">{message}</div>
        <div className="text-xs text-slate-500 mt-1">{time}</div>
      </div>
    </div>
  )
}
