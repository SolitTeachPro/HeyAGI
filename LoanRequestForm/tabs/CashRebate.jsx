'use client'

export default function CashRebateTab() {
  const tableHeaders = [
    "Loan A/C No.", "Rate Type(Bookmark)", "ITR Quoted By", "Previous Letter Date", "Bouns Account",
    "Handling Fee Amount", "Handling Fee Percent", "Deposit Amount", "Account Type", "Account Number"
  ]

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Add table rows here */}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Change</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">Remove</button>
      </div>
    </div>
  )
}

