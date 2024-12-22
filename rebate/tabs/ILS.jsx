'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ILSTab() {
  const [applicantId, setApplicantId] = useState('')
  const [applicantName, setApplicantName] = useState('')
  const [corrAddress, setCorrAddress] = useState(['', '', '', ''])

  const tableHeaders = [
    "Loan A/C No.", "Frequency", "Current Rate Code", "Rate Type", "Next Interest Due Date",
    "1st Interest Spread", "1st NO. of Instanlment", "Total Loan Period", "Outstanding Principal",
    "Repayment Due Date", "Principal As At", "First Due Date", "DUE th", "Date of Legal Charge Date",
    "Borrower1 Name", "Borrower1 HKID", "Borrower2 Name", "Borrower2 HKID", "Borrower3 Name",
    "Borrower3 HDID", "Application No.", "Certificate No.", "Your Ref No.", "Sauluation & Surname"
  ]

  const mockData = [
    {
      loanACNo: "L001", frequency: "Monthly", currentRateCode: "RC001", rateType: "Fixed",
      nextInterestDueDate: "2023-07-01", firstInterestSpread: "2.5%", firstNoOfInstallment: "60",
      totalLoanPeriod: "5 years", outstandingPrincipal: "$200,000", repaymentDueDate: "2023-07-15",
      principalAsAt: "$198,000", firstDueDate: "2023-02-15", dueThe: "15th", dateOfLegalChargeDate: "2023-01-01",
      borrower1Name: "John Doe", borrower1HKID: "A123456(7)", borrower2Name: "Jane Doe", borrower2HKID: "B234567(8)",
      borrower3Name: "Jim Doe", borrower3HDID: "C345678(9)", applicationNo: "APP001", certificateNo: "CERT001",
      yourRefNo: "REF001", sauluationAndSurname: "Mr. Doe"
    },
    {
      loanACNo: "L002", frequency: "Quarterly", currentRateCode: "RC002", rateType: "Variable",
      nextInterestDueDate: "2023-08-01", firstInterestSpread: "3%", firstNoOfInstallment: "20",
      totalLoanPeriod: "5 years", outstandingPrincipal: "$300,000", repaymentDueDate: "2023-08-15",
      principalAsAt: "$295,000", firstDueDate: "2023-03-15", dueThe: "15th", dateOfLegalChargeDate: "2023-02-01",
      borrower1Name: "Alice Smith", borrower1HKID: "D456789(0)", borrower2Name: "Bob Smith", borrower2HKID: "E567890(1)",
      borrower3Name: "Carol Smith", borrower3HDID: "F678901(2)", applicationNo: "APP002", certificateNo: "CERT002",
      yourRefNo: "REF002", sauluationAndSurname: "Mrs. Smith"
    },
    {
      loanACNo: "L003", frequency: "Semi-annually", currentRateCode: "RC003", rateType: "Fixed",
      nextInterestDueDate: "2023-09-01", firstInterestSpread: "2.75%", firstNoOfInstallment: "10",
      totalLoanPeriod: "5 years", outstandingPrincipal: "$400,000", repaymentDueDate: "2023-09-15",
      principalAsAt: "$390,000", firstDueDate: "2023-04-15", dueThe: "15th", dateOfLegalChargeDate: "2023-03-01",
      borrower1Name: "Eva Brown", borrower1HKID: "G789012(3)", borrower2Name: "Frank Brown", borrower2HKID: "H890123(4)",
      borrower3Name: "Grace Brown", borrower3HDID: "I901234(5)", applicationNo: "APP003", certificateNo: "CERT003",
      yourRefNo: "REF003", sauluationAndSurname: "Ms. Brown"
    },
    {
      loanACNo: "L004", frequency: "Annually", currentRateCode: "RC004", rateType: "Variable",
      nextInterestDueDate: "2023-10-01", firstInterestSpread: "3.25%", firstNoOfInstallment: "5",
      totalLoanPeriod: "5 years", outstandingPrincipal: "$500,000", repaymentDueDate: "2023-10-15",
      principalAsAt: "$485,000", firstDueDate: "2023-05-15", dueThe: "15th", dateOfLegalChargeDate: "2023-04-01",
      borrower1Name: "David Lee", borrower1HKID: "J012345(6)", borrower2Name: "Emma Lee", borrower2HKID: "K123456(7)",
      borrower3Name: "Fiona Lee", borrower3HDID: "L234567(8)", applicationNo: "APP004", certificateNo: "CERT004",
      yourRefNo: "REF004", sauluationAndSurname: "Mr. Lee"
    },
    {
      loanACNo: "L005", frequency: "Monthly", currentRateCode: "RC005", rateType: "Fixed",
      nextInterestDueDate: "2023-11-01", firstInterestSpread: "2.25%", firstNoOfInstallment: "120",
      totalLoanPeriod: "10 years", outstandingPrincipal: "$600,000", repaymentDueDate: "2023-11-15",
      principalAsAt: "$595,000", firstDueDate: "2023-06-15", dueThe: "15th", dateOfLegalChargeDate: "2023-05-01",
      borrower1Name: "George Wang", borrower1HKID: "M345678(9)", borrower2Name: "Helen Wang", borrower2HKID: "N456789(0)",
      borrower3Name: "Ian Wang", borrower3HDID: "O567890(1)", applicationNo: "APP005", certificateNo: "CERT005",
      yourRefNo: "REF005", sauluationAndSurname: "Dr. Wang"
    }
  ]

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <label className="w-28">Applicant ID:</label>
            <div className="flex space-x-2">
              <Select onValueChange={setApplicantId} className="w-40">
                <SelectTrigger>
                  <SelectValue placeholder="Select ID" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Applicant 1</SelectItem>
                  <SelectItem value="2">Applicant 2</SelectItem>
                  <SelectItem value="3">Applicant 3</SelectItem>
                </SelectContent>
              </Select>
              <Input 
                value={applicantId} 
                onChange={(e) => setApplicantId(e.target.value)} 
                placeholder="Applicant ID" 
                className="w-40"
              />
            </div>
          </div>
          <div className="flex items-center">
            <label className="w-28">Applicant Name:</label>
            <Input 
              value={applicantName} 
              onChange={(e) => setApplicantName(e.target.value)} 
              placeholder="Applicant Name" 
              className="w-[332px]"
            />
          </div>
        </div>
        <div className="flex items-start">
          <label className="w-28">Corr.Address:</label>
          <div className="flex-1 space-y-2">
            {corrAddress.map((address, index) => (
              <Input
                key={index}
                value={address}
                onChange={(e) => {
                  const newAddress = [...corrAddress]
                  newAddress[index] = e.target.value
                  setCorrAddress(newAddress)
                }}
                placeholder={`Address line ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

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

