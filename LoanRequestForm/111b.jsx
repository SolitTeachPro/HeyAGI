
export default function LoanForm() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 shadow-sm max-w-5xl mx-auto space-y-6">
        {/* Top Section */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="text-sm">Loan No.:</label>
              <input type="text" value="998-823769-060" readOnly className="border px-2 text-sm" />
            </div>
            <div className="flex gap-2">
              <label className="text-sm">Received Date:</label>
              <input type="text" value="15/06/2018 10:53:00" readOnly className="border px-2 text-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="text-sm">GBF:</label>
              <input type="text" className="border px-2 text-sm" />
            </div>
            <div className="flex gap-2">
              <label className="text-sm">Make Date:</label>
              <input type="text" value="__/__/__" className="border px-2 text-sm" />
            </div>
            <div className="flex gap-2">
              <label className="text-sm">1st Reminder:</label>
              <input type="text" value="__/__/__" className="border px-2 text-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <div>
                <label className="text-sm">OTH FAC1:</label>
                <input type="text" className="border px-2 text-sm" />
              </div>
              <div>
                <label className="text-sm">OTH FAC2:</label>
                <input type="text" className="border px-2 text-sm" />
              </div>
            </div>
            <div className="flex gap-2">
              <label className="text-sm">Check Date:</label>
              <input type="text" value="__/__/__" className="border px-2 text-sm" />
            </div>
            <div className="flex gap-2">
              <label className="text-sm">2nd Reminder:</label>
              <input type="text" value="__/__/__" className="border px-2 text-sm" />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="text-sm">Letter From:</label>
              <input type="text" value="FORD, KWAN & CO." readOnly className="border px-2 text-sm flex-1" />
            </div>
            <div className="flex gap-2">
              <label className="text-sm">Letter Date:</label>
              <input type="text" value="12/06/2018" readOnly className="border px-2 text-sm" />
            </div>
            <div className="flex gap-2">
              <label className="text-sm">RCS Code:</label>
              <input type="text" className="border px-2 text-sm" />
            </div>
            <div className="flex gap-2">
              <label className="text-sm">Solicitor:</label>
              <input type="text" value="FORD, KWAN & CO." readOnly className="border px-2 text-sm flex-1" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="text-sm">Solicitor Ref.:</label>
              <input type="text" value="CON-MR/RC/1806160938Y/CKW" readOnly className="border px-2 text-sm flex-1" />
            </div>
            <div className="flex gap-2">
              <label className="text-sm">HKHA Consent Date:</label>
              <input type="text" value="__/__/__" className="border px-2 text-sm" />
            </div>
            <div className="flex gap-2">
              <label className="text-sm">Dev Consent Date:</label>
              <input type="text" value="__/__/__" className="border px-2 text-sm" />
            </div>
            <div className="flex gap-2">
              <label className="text-sm">Instruction Date:</label>
              <input type="text" value="__/__/__" className="border px-2 text-sm" />
            </div>
          </div>
        </div>

        {/* Checkboxes Section */}
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            <label className="text-sm">EM</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked readOnly className="form-checkbox" />
            <label className="text-sm">Deeds</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            <label className="text-sm">Files</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            <label className="text-sm">S and P</label>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            <label className="text-sm">Partial Release</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            <label className="text-sm">Consent</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            <label className="text-sm">Pending</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            <label className="text-sm">Visa</label>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" checked readOnly className="form-checkbox" />
            <label className="text-sm">No Need Reply</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked readOnly className="form-checkbox" />
            <label className="text-sm">Authorization</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked readOnly className="form-checkbox" />
            <label className="text-sm">Fallen Through</label>
          </div>
        </div>


        {/* Dates Section */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="text-sm">Attrition Date:</label>
              <input type="text" value="15/06/2018" readOnly className="border px-2 text-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="text-sm">Attrition Receive Date:</label>
              <input type="text" value="20/06/2018" readOnly className="border px-2 text-sm" />
            </div>
          </div>
        </div>

        {/* Borrower Details */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <label className="text-sm">Borrower Name:</label>
            <input type="text" value="**" readOnly className="border px-2 text-sm flex-1" />
          </div>
          <div className="flex gap-2">
            <label className="text-sm">Charged Property:</label>
            <input type="text" value="FLAT**, **/F, BLOCK/TOWER **, **, **" readOnly className="border px-2 text-sm flex-1" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="text-sm">Product Code:</label>
              <input type="text" value="27109" readOnly className="border px-2 text-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="text-sm">Title Status:</label>
              <input type="text" value="2" readOnly className="border px-2 text-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="text-sm">Due Date:</label>
              <input type="text" value="13/11/2024" readOnly className="border px-2 text-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="text-sm">Last Xact Date:</label>
              <input type="text" value="15/10/2024" readOnly className="border px-2 text-sm" />
            </div>
          </div>
        </div>

        {/* Made By Section */}
        <div className="border-t pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <label className="text-sm">Made By:</label>
                <input type="text" value="21160853" readOnly className="border px-2 text-sm" />
              </div>
              <div className="flex gap-2">
                <label className="text-sm">Date:</label>
                <input type="text" value="26/07/2018 01:57:55" readOnly className="border px-2 text-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Exit Button */}
        <div className="flex justify-center">
          <button className="px-8 py-1 border border-gray-300 hover:bg-gray-100">
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

