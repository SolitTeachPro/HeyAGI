'use client'

import { useState } from 'react'
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
  const [activeTab, setActiveTab] = useState('ILS')

  const renderActiveTab = () => {
    switch(activeTab) {
      case 'ILS': return <ILSTab />;
      case 'RateChange': return <RateChangeTab />;
      case 'CashRebate': return <CashRebateTab />;
      case 'ExpenseRebate': return <ExpenseRebateTab />;
      case 'CardFeeWaiver': return <CardFeeWaiverTab />;
      case 'Penalty': return <PenaltyTab />;
      case 'Supplementary': return <SupplementaryTab />;
      case 'Remark': return <RemarkTab />;
      case 'Comment': return <CommentTab />;
      default: return null;
    }
  }

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
        <input
          id="offerRemarks"
          type="text"
          value={offerRemarks}
          onChange={(e) => setOfferRemarks(e.target.value)}
          className="w-3/4 border p-2 rounded"
        />
      </div>

      <div className="mb-4 flex items-center">
        <label htmlFor="statusRemarks" className="w-1/4">Status Remarks:</label>
        <input
          id="statusRemarks"
          type="text"
          value={statusRemarks}
          onChange={(e) => setStatusRemarks(e.target.value)}
          className="w-3/8 border p-2 rounded"
        />
      </div>

      <div className="w-full">
        <div className="flex border-b">
          {['ILS', 'RateChange', 'CashRebate', 'ExpenseRebate', 'CardFeeWaiver', 'Penalty', 'Supplementary', 'Remark', 'Comment'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${activeTab === tab ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {renderActiveTab()}
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Confirm</button>
        <button className="px-4 py-2 border rounded">Exit</button>
      </div>
    </div>
  )
}

