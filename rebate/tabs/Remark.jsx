'use client'

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function RemarkTab() {
  const tableHeaders = [
    "Loan A/C No.", "Remark Category", "Remark Code", "Remark Content"
  ]

  const mockData = [
    {
      loanACNo: "L001", remarkCategory: "Payment", remarkCode: "PMT001", remarkContent: "Payment received on time"
    },
    {
      loanACNo: "L002", remarkCategory: "Interest", remarkCode: "INT001", remarkContent: "Interest rate adjusted"
    },
    {
      loanACNo: "L003", remarkCategory: "Document", remarkCode: "DOC001", remarkContent: "Missing document received"
    },
    {
      loanACNo: "L004", remarkCategory: "Communication", remarkCode: "COM001", remarkContent: "Customer contacted for update"
    },
    {
      loanACNo: "L005", remarkCategory: "Status", remarkCode: "STS001", remarkContent: "Loan status changed to active"
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
        <Button>Add/Remove</Button>
      </div>
    </div>
  )
}

