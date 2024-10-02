import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Layout from '../layouts/main-layout'

export default function Settings() {
  const [currentPlan, setCurrentPlan] = useState('Basic')

  return (
    <Layout title="Settings">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="profile" className="text-gray-600 dark:text-gray-400">Profile</TabsTrigger>
          <TabsTrigger value="billing" className="text-gray-600 dark:text-gray-400">Billing</TabsTrigger>
          <TabsTrigger value="integrations" className="text-gray-600 dark:text-gray-400">Integrations</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="bg-white dark:bg-[#2f2f2f] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
              <Input id="name" placeholder="Your Name" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">Phone</Label>
              <Input id="phone" placeholder="+91 9876543210" className="mt-1" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">Update Profile</Button>
          </div>
        </TabsContent>
        <TabsContent value="billing" className="bg-white dark:bg-[#2f2f2f] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Current Plan: {currentPlan}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">500 leads/month</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Upgrade Plan</h4>
              <div className="mt-2 space-x-2">
                <Button variant={currentPlan === 'Basic' ? 'default' : 'outline'} onClick={() => setCurrentPlan('Basic')}>Basic</Button>
                <Button variant={currentPlan === 'Pro' ? 'default' : 'outline'} onClick={() => setCurrentPlan('Pro')}>Pro</Button>
                <Button variant={currentPlan === 'Enterprise' ? 'default' : 'outline'} onClick={() => setCurrentPlan('Enterprise')}>Enterprise</Button>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">Update Plan</Button>
          </div>
        </TabsContent>
        <TabsContent value="integrations" className="bg-white dark:bg-[#2f2f2f] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Facebook</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Connect to capture leads from Facebook ads</p>
              </div>
              <Button variant="outline">Connect</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">WhatsApp</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Connect to send automated WhatsApp messages</p>
              </div>
              <Button variant="outline">Connect</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Email Service</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Connect your email service provider</p>
              </div>
              <Button variant="outline">Connect</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  )
}