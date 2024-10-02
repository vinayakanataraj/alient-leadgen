import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Layout from '../layouts/main-layout'

// Mock data for demonstration
const mockData = {
  totalLeads: 500,
  conversionRate: 15,
  leadSources: [
    { name: "Website", percentage: 50 },
    { name: "Facebook", percentage: 30 },
    { name: "WhatsApp", percentage: 20 },
  ],
  dailyLeads: [
    { date: "2023-09-24", count: 20 },
    { date: "2023-09-25", count: 25 },
    { date: "2023-09-26", count: 30 },
    { date: "2023-09-27", count: 22 },
    { date: "2023-09-28", count: 28 },
    { date: "2023-09-29", count: 35 },
    { date: "2023-09-30", count: 40 },
  ],
}

export default function Analytics() {
  return (
    <Layout title="Analytics">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Analytics Overview</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white dark:bg-[#2f2f2f] border border-gray-200 dark:border-gray-800 shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">{mockData.totalLeads}</div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-[#2f2f2f] border border-gray-200 dark:border-gray-800 shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">{mockData.conversionRate}%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-[#2f2f2f] border border-gray-200 dark:border-gray-800 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">Lead Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center">
              {/* Placeholder for pie chart */}
              <div className="text-center text-gray-500 dark:text-gray-400">Pie Chart Placeholder</div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-[#2f2f2f] border border-gray-200 dark:border-gray-800 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">Daily Lead Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center">
              {/* Placeholder for line graph */}
              <div className="text-center text-gray-500 dark:text-gray-400">Line Graph Placeholder</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}