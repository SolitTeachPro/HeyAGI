'use client'

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function RateChangeTab() {
  const tableHeaders = [
    "Loan A/C No.", "Partial Repayment Amt", "Pledge Desc.", "Cash Refund Amt", "New Rate Type",
    "New 1st Interest Spread", "New 1st No. of Instal", "Old 1st Interest Spread", "Old Rate Type",
    "Old 1st No. of Instal", "Old Rate Code", "New Rate Code", "Duration", "Effective Date",
    "Approval Status", "Date Generated"
  ]

  const mockData = [
    {
      loanACNo: "L001", partialRepaymentAmt: "$10,000", pledgeDesc: "Property A", cashRefundAmt: "$500",
      newRateType: "Fixed", new1stInterestSpread: "2.5%", new1stNoOfInstal: "60", old1stInterestSpread: "3%",
      oldRateType: "Variable", old1stNoOfInstal: "72", oldRateCode: "RC001", newRateCode: "RC002",
      duration: "5 years", effectiveDate: "2023-07-01", approvalStatus: "Approved", dateGenerated: "2023-06-15"
    },
    {
      loanACNo: "L002", partialRepaymentAmt: "$15,000", pledgeDesc: "Property B", cashRefundAmt: "$750",
      newRateType: "Variable", new1stInterestSpread: "2.75%", new1stNoOfInstal: "48", old1stInterestSpread: "3.25%",
      oldRateType: "Fixed", old1stNoOfInstal: "60", oldRateCode: "RC003", newRateCode: "RC004",
      duration: "4 years", effectiveDate: "2023-08-01", approvalStatus: "Pending", dateGenerated: "2023-07-15"
    },
    {
      loanACNo: "L003", partialRepaymentAmt: "$20,000", pledgeDesc: "Property C", cashRefundAmt: "$1,000",
      newRateType: "Fixed", new1stInterestSpread: "2.25%", new1stNoOfInstal: "36", old1stInterestSpread: "2.75%",
      oldRateType: "Variable", old1stNoOfInstal: "48", oldRateCode: "RC005", newRateCode: "RC006",
      duration: "3 years", effectiveDate: "2023-09-01", approvalStatus: "Approved", dateGenerated: "2023-08-15"
    },
    {
      loanACNo: "L004", partialRepaymentAmt: "$25,000", pledgeDesc: "Property D", cashRefundAmt: "$1,250",
      newRateType: "Variable", new1stInterestSpread: "3%", new1stNoOfInstal: "24", old1stInterestSpread: "3.5%",
      oldRateType: "Fixed", old1stNoOfInstal: "36", oldRateCode: "RC007", newRateCode: "RC008",
      duration: "2 years", effectiveDate: "2023-10-01", approvalStatus: "Rejected", dateGenerated: "2023-09-15"
    },
    {
      loanACNo: "L005", partialRepaymentAmt: "$30,000", pledgeDesc: "Property E", cashRefundAmt: "$1,500",
      newRateType: "Fixed", new1stInterestSpread: "2.6%", new1stNoOfInstal: "72", old1stInterestSpread: "3.1%",
      oldRateType: "Variable", old1stNoOfInstal: "84", oldRateCode: "RC009", newRateCode: "RC010",
      duration: "6 years", effectiveDate: "2023-11-01", approvalStatus: "Pending", dateGenerated: "2023-10-15"
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

