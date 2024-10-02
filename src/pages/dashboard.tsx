import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from '../layouts/main-layout'

// Mock data for demonstration
const mockData = {
  userName: "Rahul",
  newLeads: 20,
  totalLeads: 150,
  conversionRate: 15,
  topLeadSource: "Website",
  pendingResponses: 5,
  recentActivity: [
    { id: 1, name: "John Doe", action: "submitted form", date: "2023-09-30" },
    { id: 2, name: "Jane Smith", action: "viewed offer", date: "2023-09-29" },
    { id: 3, name: "Amit Patel", action: "requested callback", date: "2023-09-28" },
  ]
}

export default function Dashboard() {
  return (
    <Layout title="Dashboard">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Hello {mockData.userName}, you have {mockData.newLeads} new leads this week
        </h2>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Leads", value: mockData.totalLeads, change: "+10%" },
          { title: "Conversion Rate", value: `${mockData.conversionRate}%`, change: "+2%" },
          { title: "Top Lead Source", value: mockData.topLeadSource },
          { title: "Pending Responses", value: mockData.pendingResponses },
        ].map((metric, index) => (
          <Card key={index} className="bg-white dark:bg-[#2f2f2f] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{metric.value}</div>
              {metric.change && (
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {metric.change} from last month
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="mb-8 bg-white dark:bg-[#2f2f2f] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {mockData.recentActivity.map((activity) => (
              <li key={activity.id} className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2">
                  <Plus className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Lead from {activity.name} {activity.action}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{activity.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Create New Form", "View Leads", "Set Automation"].map((action) => (
          <Button key={action} className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
            {action}
          </Button>
        ))}
      </div>
    </Layout>
  )
}