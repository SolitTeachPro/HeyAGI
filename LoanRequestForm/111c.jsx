
'use client'

export default function LoanForm() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow max-w-5xl mx-auto space-y-4">
        {/* Top Section */}
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="space-y-1">
            <label className="text-gray-600">Loan No.:</label>
            <input 
              type="text" 
              defaultValue="353-188626-072"
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <div className="space-y-1">
            <label className="text-gray-600">GBF:</label>
            <input type="text" className="w-full border rounded px-2 py-1" />
          </div>
          <div className="space-y-1">
            <label className="text-gray-600">OTH FAC1:</label>
            <input type="text" className="w-full border rounded px-2 py-1" />
          </div>
          <div className="space-y-1">
            <label className="text-gray-600">OTH FAC2:</label>
            <input type="text" className="w-full border rounded px-2 py-1" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="space-y-1">
            <label className="text-gray-600">Received Date:</label>
            <input 
              type="text" 
              defaultValue="10/01/2025 15:45:18"
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <div className="space-y-1">
            <label className="text-gray-600">Make Date:</label>
            <input type="text" className="w-full border rounded px-2 py-1" />
          </div>
          <div className="space-y-1">
            <label className="text-gray-600">Check Date:</label>
            <input type="text" className="w-full border rounded px-2 py-1" />
          </div>
          <div className="space-y-1">
            <label className="text-gray-600">Print Date:</label>
            <input type="text" className="w-full border rounded px-2 py-1" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="col-span-2 space-y-1">
            <label className="text-gray-600">Letter From:</label>
            <select className="w-full border rounded px-2 py-1">
              <option>KITTY SO & TONG</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-gray-600">Solicitor Ref.:</label>
            <input 
              type="text" 
              defaultValue="44957-Y1-WSY"
              className="w-full border rounded px-2 py-1"
            />
          </div>
        </div>

        {/* Middle Section - Checkboxes */}
        <div className="grid grid-cols-6 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="em" />
            <label htmlFor="em">EM</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="deeds" defaultChecked />
            <label htmlFor="deeds">Deeds</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="files" />
            <label htmlFor="files">Files</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="sandp" />
            <label htmlFor="sandp">S and P</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="instruction" />
            <label htmlFor="instruction">Instruction</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="noneedreply" />
            <label htmlFor="noneedreply">No Need Reply</label>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="partialrelease" />
            <label htmlFor="partialrelease">Partial Release</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="replyoverdue" />
            <label htmlFor="replyoverdue">Reply Over Due Date</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="cdacrm" />
            <label htmlFor="cdacrm">CDA/CRM</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="authorization" />
            <label htmlFor="authorization">Authorization</label>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4 text-sm">
          <div className="grid grid-cols-1 gap-2">
            <label className="text-gray-600">Borrower Name:</label>
            <input 
              type="text"
              defaultValue="THE ADM/EXE OF THE EST OF THE LATE CHAN ADRIAN WEE PHOY & WONG KIT MAN"
              className="w-full border rounded px-2 py-1"
            />
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            <label className="text-gray-600">Charged Property:</label>
            <input 
              type="text"
              defaultValue="FLAT A1, 11/F, VIKING GARDEN, 40-42 HING FAT STREET"
              className="w-full border rounded px-2 py-1"
            />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <label className="text-gray-600">L174 Remark:</label>
            <div className="space-y-2">
              <div className="flex justify-between">
                <input 
                  type="text"
                  defaultValue="HYBRID 1M09(H+0.7/P-2.7) TR FROM 071"
                  className="w-full border rounded px-2 py-1"
                />
                <button className="ml-2 px-3 py-1 bg-gray-100 rounded">Copy</button>
              </div>
              <div className="flex justify-between">
                <input 
                  type="text"
                  defaultValue="IFP(ONLY)1+F+1Y500(0.5%)(NO FUNDING COST)!"
                  className="w-full border rounded px-2 py-1"
                />
                <button className="ml-2 px-3 py-1 bg-gray-100 rounded">Copy</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-center gap-4 pt-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Confirm
          </button>
          <button className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

