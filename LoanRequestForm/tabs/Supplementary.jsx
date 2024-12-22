'use client'

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SupplementaryTab() {
  const tableHeaders = [
    "Loan A/C No.", "Rate Type(Bookmark)", "ITR Quoted By", "Previous Letter Date", "Bouns Account",
    "Handling Fee Amount", "Handling Fee Percent", "Deposit Amount", "Account Type", "Account Number"
  ]

  const mockData = [
    {
      loanACNo: "L001", rateTypeBookmark: "Fixed", itrQuotedBy: "John Doe", previousLetterDate: "2023-05-15",
      bounsAccount: "BA001", handlingFeeAmount: "$100", handlingFeePercent: "1%", depositAmount: "$1000",
      accountType: "Savings", accountNumber: "1234567890"
    },
    {
      loanACNo: "L002", rateTypeBookmark: "Variable", itrQuotedBy: "Jane Smith", previousLetterDate: "2023-05-20",
      bounsAccount: "BA002", handlingFeeAmount: "$150", handlingFeePercent: "1.5%", depositAmount: "$1500",
      accountType: "Checking", accountNumber: "2345678901"
    },
    {
      loanACNo: "L003", rateTypeBookmark: "Fixed", itrQuotedBy: "Bob Johnson", previousLetterDate: "2023-05-25",
      bounsAccount: "BA003", handlingFeeAmount: "$200", handlingFeePercent: "2%", depositAmount: "$2000",
      accountType: "Savings", accountNumber: "3456789012"
    },
    {
      loanACNo: "L004", rateTypeBookmark: "Variable", itrQuotedBy: "Alice Brown", previousLetterDate: "2023-05-30",
      bounsAccount: "BA004", handlingFeeAmount: "$250", handlingFeePercent: "2.5%", depositAmount: "$2500",
      accountType: "Checking", accountNumber: "4567890123"
    },
    {
      loanACNo: "L005", rateTypeBookmark: "Fixed", itrQuotedBy: "Charlie Davis", previousLetterDate: "2023-06-04",
      bounsAccount: "BA005", handlingFeeAmount: "$300", handlingFeePercent: "3%", depositAmount: "$3000",
      accountType: "Savings", accountNumber: "5678901234"
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

