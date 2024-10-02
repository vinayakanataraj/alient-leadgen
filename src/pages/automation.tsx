import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Layout from '../layouts/main-layout'

export default function Automation() {
  return (
    <Layout title="Automation">
      <div className="bg-white dark:bg-[#2f2f2f] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Set up Automated Response</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="triggerForm" className="text-gray-700 dark:text-gray-300">Trigger Form</Label>
            <Select>
              <SelectTrigger id="triggerForm" className="mt-1">
                <SelectValue placeholder="Select a form" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="contact">Contact Form</SelectItem>
                <SelectItem value="newsletter">Newsletter Signup</SelectItem>
                <SelectItem value="demo">Product Demo Request</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="responseType" className="text-gray-700 dark:text-gray-300">Response Type</Label>
            <Select>
              <SelectTrigger id="responseType" className="mt-1">
                <SelectValue placeholder="Select response type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="sms">SMS/WhatsApp</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="emailSubject" className="text-gray-700 dark:text-gray-300">Email Subject</Label>
            <Input id="emailSubject" placeholder="Thank you for your interest" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="emailBody" className="text-gray-700 dark:text-gray-300">Email Body</Label>
            <Textarea id="emailBody" placeholder="Enter your email content here" rows={5} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="delay" className="text-gray-700 dark:text-gray-300">Delay (in minutes)</Label>
            <Input id="delay" type="number" placeholder="0" min="0" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="conditions" className="text-gray-700 dark:text-gray-300">Conditions (Optional)</Label>
            <Input id="conditions" placeholder="e.g., email domain is gmail.com" className="mt-1" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">Save Automation</Button>
        </form>
      </div>
    </Layout>
  )
}