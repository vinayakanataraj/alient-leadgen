import { useState } from 'react'
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

// Mock data for demonstration
const mockForms = [
  { id: 1, name: "Contact Form", creationDate: "2023-09-30", status: "Active", leadsCaptures: 150 },
  { id: 2, name: "Newsletter Signup", creationDate: "2023-09-29", status: "Inactive", leadsCaptures: 75 },
  { id: 3, name: "Product Demo Request", creationDate: "2023-09-28", status: "Active", leadsCaptures: 200 },
]

export default function Forms() {
  const [isCreatingForm, setIsCreatingForm] = useState(false)

  return (
    <Layout title="Forms">
      {!isCreatingForm ? (
        <>
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">My Forms</h2>
            <Button onClick={() => setIsCreatingForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">Create New Form</Button>
          </div>
          <div className="grid gap-6">
            {mockForms.map((form) => (
              <div key={form.id} className="bg-white dark:bg-[#2f2f2f] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{form.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Created on: {form.creationDate}</p>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${form.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                    {form.status}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Leads Captured: {form.leadsCaptures}</span>
                </div>
                <div className="mt-4 space-x-2">
                  <Button variant="outline">Edit</Button>
                  <Button variant="outline">Delete</Button>
                  <Button variant="outline">Copy</Button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white dark:bg-[#2f2f2f] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Create New Form</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="formName" className="text-gray-700 dark:text-gray-300">Form Name</Label>
              <Input id="formName" placeholder="Enter form name" className="mt-1" />
            </div>
            <div>
              <Label className="text-gray-700 dark:text-gray-300">Form Fields</Label>
              <div className="space-y-2 mt-1">
                {['Name', 'Email', 'Phone'].map((field) => (
                  <div key={field} className="flex items-center space-x-2">
                    <Input value={field} readOnly className="bg-gray-100 dark:bg-gray-800" />
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                ))}
              </div>
              <Button className="mt-2" variant="outline">Add Field</Button>
            </div>
            <div>
              <Label htmlFor="submitButtonText" className="text-gray-700 dark:text-gray-300">Submit Button Text</Label>
              <Input id="submitButtonText" placeholder="Submit" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="redirectUrl" className="text-gray-700 dark:text-gray-300">Redirect URL (after submission)</Label>
              <Input id="redirectUrl" placeholder="https://example.com/thank-you" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="formExpiration" className="text-gray-700 dark:text-gray-300">Form Expiration</Label>
              <Input id="formExpiration" type="date" className="mt-1" />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsCreatingForm(false)}>Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">Save Form</Button>
            </div>
          </form>
        </div>
      )}
    </Layout>
  )
}