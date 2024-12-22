'use client'

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CommentTab() {
  const tableHeaders = [
    "Loan A/C No.",
    ...Array.from({ length: 30 }, (_, i) => `Comment${i + 1}`)
  ]

  const mockData = [
    {
      loanACNo: "L001",
      ...Object.fromEntries(Array.from({ length: 30 }, (_, i) => [`Comment${i + 1}`, `Comment ${i + 1} for L001`]))
    },
    {
      loanACNo: "L002",
      ...Object.fromEntries(Array.from({ length: 30 }, (_, i) => [`Comment${i + 1}`, `Comment ${i + 1} for L002`]))
    },
    {
      loanACNo: "L003",
      ...Object.fromEntries(Array.from({ length: 30 }, (_, i) => [`Comment${i + 1}`, `Comment ${i + 1} for L003`]))
    },
    {
      loanACNo: "L004",
      ...Object.fromEntries(Array.from({ length: 30 }, (_, i) => [`Comment${i + 1}`, `Comment ${i + 1} for L004`]))
    },
    {
      loanACNo: "L005",
      ...Object.fromEntries(Array.from({ length: 30 }, (_, i) => [`Comment${i + 1}`, `Comment ${i + 1} for L005`]))
    }
  ]

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {tableHeaders.map((header, index) => (
                <TableHead key={index}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, cellIndex) => (
                  <TableCell key={cellIndex}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center space-x-2">
        <Button>Add</Button>
        <Button>Change</Button>
        <Button variant="destructive">Remove</Button>
      </div>
    </div>
  )
}

