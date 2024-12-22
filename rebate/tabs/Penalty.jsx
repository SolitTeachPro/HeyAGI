'use client'

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PenaltyTab() {
  const tableHeaders = [
    "Loan A/C No.", "Rate Type(Bookmark)", "ITR Quoted By", "Previous Letter Date", "Bouns Account",
    "Handling Fee Amount", "Handling Fee Percent", "Deposit Amount", "Account Type", "Account Number"
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
            {/* Add table rows here */}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-end space-x-2">
        <Button>Add</Button>
        <Button>Change</Button>
        <Button variant="destructive">Remove</Button>
      </div>
    </div>
  )
}

