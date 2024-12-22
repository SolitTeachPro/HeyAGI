'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ILSTab from './tabs/ILS'
import RateChangeTab from './tabs/RateChange'
import CashRebateTab from './tabs/CashRebate'
import ExpenseRebateTab from './tabs/ExpenseRebate'
import CardFeeWaiverTab from './tabs/CardFeeWaiver'
import PenaltyTab from './tabs/Penalty'
import SupplementaryTab from './tabs/Supplementary'
import RemarkTab from './tabs/Remark'
import CommentTab from './tabs/Comment'

export default function LR03100_frm() {
  const [offerRemarks, setOfferRemarks] = useState('')
  const [statusRemarks, setStatusRemarks] = useState('')

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <p className="font-bold">Property No.: 100-123211</p>
      </div>
      <div className="flex justify-between mb-4">
        <p><span className="font-bold">Request Status:</span> Active</p>
        <p><span className="font-bold">Offer Status:</span> Successful</p>
        <p><span className="font-bold">Stage:</span> Maintenance</p>
      </div>

      <div className="mb-4 flex items-center">
        <label htmlFor="offerRemarks" className="w-1/4">Offer Remarks:</label>
        <Input
          id="offerRemarks"
          value={offerRemarks}
          onChange={(e) => setOfferRemarks(e.target.value)}
          className="w-3/4"
        />
      </div>

      <div className="mb-4 flex items-center">
        <label htmlFor="statusRemarks" className="w-1/4">Status Remarks:</label>
        <Input
          id="statusRemarks"
          value={statusRemarks}
          onChange={(e) => setStatusRemarks(e.target.value)}
          className="w-3/8"
        />
      </div>

      <Tabs defaultValue="ILS" className="w-full">
        <TabsList className="grid grid-cols-3 lg:grid-cols-9">
          <TabsTrigger value="ILS">ILS</TabsTrigger>
          <TabsTrigger value="RateChange">Rate Change</TabsTrigger>
          <TabsTrigger value="CashRebate">Cash Rebate</TabsTrigger>
          <TabsTrigger value="ExpenseRebate">Expense Rebate</TabsTrigger>
          <TabsTrigger value="CardFeeWaiver">Card Fee Waiver</TabsTrigger>
          <TabsTrigger value="Penalty">Penalty</TabsTrigger>
          <TabsTrigger value="Supplementary">Supplementary</TabsTrigger>
          <TabsTrigger value="Remark">Remark</TabsTrigger>
          <TabsTrigger value="Comment">Comment</TabsTrigger>
        </TabsList>
        <TabsContent value="ILS"><ILSTab /></TabsContent>
        <TabsContent value="RateChange"><RateChangeTab /></TabsContent>
        <TabsContent value="CashRebate"><CashRebateTab /></TabsContent>
        <TabsContent value="ExpenseRebate"><ExpenseRebateTab /></TabsContent>
        <TabsContent value="CardFeeWaiver"><CardFeeWaiverTab /></TabsContent>
        <TabsContent value="Penalty"><PenaltyTab /></TabsContent>
        <TabsContent value="Supplementary"><SupplementaryTab /></TabsContent>
        <TabsContent value="Remark"><RemarkTab /></TabsContent>
        <TabsContent value="Comment"><CommentTab /></TabsContent>
      </Tabs>

      <div className="mt-4 flex justify-center space-x-4">
        <Button>Confirm</Button>
        <Button variant="outline">Exit</Button>
      </div>
    </div>
  )
}

