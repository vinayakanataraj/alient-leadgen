import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Layout from '../layouts/main-layout'

// Mock data for demonstration
const mockLeads = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+91 9876543210", source: "Website", date: "2023-09-30", status: "New" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+91 9876543211", source: "Facebook", date: "2023-09-29", status: "Contacted" },
  { id: 3, name: "Amit Patel", email: "amit@example.com", phone: "+91 9876543212", source: "WhatsApp", date: "2023-09-28", status: "Converted" },
]

export default function Leads() {
  const [selectedLead, setSelectedLead] = useState(null)

  return (
    <Layout title="Leads">
      <div className="mb-6 flex justify-between items-center">
        <Input type="text" placeholder="Search leads..." className="max-w-sm" />
        <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">Add New Lead</Button>
      </div>

      <div className="bg-white dark:bg-[#2f2f2f] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-600 dark:text-gray-400">Name</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-400">Email</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-400">Phone</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-400">Source</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-400">Date</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-400">Status</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-400">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="text-gray-900 dark:text-gray-100">{lead.name}</TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">{lead.email}</TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">{lead.phone}</TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">{lead.source}</TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">{lead.date}</TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">{lead.status}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedLead(lead)}>View</Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white dark:bg-[#2f2f2f] text-gray-900 dark:text-gray-100">
                      <DialogHeader>
                        <DialogTitle>Lead Details</DialogTitle>
                      </DialogHeader>
                      {selectedLead && (
                        <div className="mt-4">
                          <p><strong>Name:</strong> {selectedLead.name}</p>
                          <p><strong>Email:</strong> {selectedLead.email}</p>
                          <p><strong>Phone:</strong> {selectedLead.phone}</p>
                          <p><strong>Source:</strong> {selectedLead.source}</p>
                          <p><strong>Date:</strong> {selectedLead.date}</p>
                          <p><strong>Status:</strong> {selectedLead.status}</p>
                        </div>
                      )}
                      <div className="mt-4 space-x-2">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">Send Follow-up Email</Button>
                        <Button variant="outline">Mark as Contacted</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Layout>
  )
}