"use client"

export default function LoanForm() {
  return (
    <div className="max-w-[1000px] mx-auto p-6 bg-gray-50">
      <form className="space-y-6 text-sm">
        {/* Top Section */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="w-24">Loan No.:</label>
              <input type="text" defaultValue="998-823769-060" className="border px-2 py-1 bg-white" />
            </div>
            <div className="flex gap-2">
              <label className="w-24">Received Date:</label>
              <input type="text" defaultValue="15/06/2018 10:53:00" className="border px-2 py-1 bg-white" />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex gap-2">
              <label>GBF:</label>
              <input type="text" className="border px-2 py-1 bg-white" />
            </div>
            <div className="flex gap-2">
              <label>Make Date:</label>
              <input type="text" className="border px-2 py-1 bg-white" placeholder="__/__/____" />
            </div>
            <div className="flex gap-2">
              <label>1st Reminder:</label>
              <input type="text" className="border px-2 py-1 bg-white" placeholder="__/__/____" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex gap-2">
              <label>OTH FAC1:</label>
              <input type="text" className="border px-2 py-1 bg-white" />
            </div>
            <div className="flex gap-2">
              <label>OTH FAC2:</label>
              <input type="text" className="border px-2 py-1 bg-white" />
            </div>
            <div className="flex gap-2">
              <label>Check Date:</label>
              <input type="text" className="border px-2 py-1 bg-white" placeholder="__/__/____" />
            </div>
            <div className="flex gap-2">
              <label>Print Date:</label>
              <input type="text" className="border px-2 py-1 bg-white" placeholder="__/__/____" />
            </div>
            <div className="flex gap-2">
              <label>2nd Reminder:</label>
              <input type="text" className="border px-2 py-1 bg-white" placeholder="__/__/____" />
            </div>
          </div>
        </div>

        {/* Letter Information Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex gap-2">
              <label className="w-24">Letter From:</label>
              <input type="text" defaultValue="FORD, KWAN & CO." className="border px-2 py-1 bg-white flex-1" />
            </div>
            <div className="flex gap-2">
              <label className="w-24">Letter Date:</label>
              <input type="text" defaultValue="12/06/2018" className="border px-2 py-1 bg-white" />
            </div>
            <div className="flex gap-2">
              <label className="w-24">RCS Code:</label>
              <input type="text" className="border px-2 py-1 bg-white" />
            </div>
            <div className="flex gap-2">
              <label className="w-24">Solicitor:</label>
              <input type="text" defaultValue="FORD, KWAN & CO." className="border px-2 py-1 bg-white flex-1" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex gap-2">
              <label>Solicitor Ref.:</label>
              <input type="text" defaultValue="CON-MR/RC/1806160938Y/CKW" className="border px-2 py-1 bg-white flex-1" />
            </div>
            <div className="flex gap-2">
              <label>HKHA Consent Date:</label>
              <input type="text" className="border px-2 py-1 bg-white" placeholder="__/__/____" />
            </div>
            <div className="flex gap-2">
              <label>Dev Consent Date:</label>
              <input type="text" className="border px-2 py-1 bg-white" placeholder="__/__/____" />
            </div>
            <div className="flex gap-2">
              <label>Instruction Date:</label>
              <input type="text" className="border px-2 py-1 bg-white" placeholder="__/__/____" />
            </div>
            <div className="flex gap-2">
              <label>To GZT:</label>
              <input type="text" className="border px-2 py-1 bg-white" placeholder="__/__/____" />
            </div>
          </div>
        </div>

        {/* Checkboxes Section */}
        <div className="grid grid-cols-5 gap-4">
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
        </div>

        {/* Additional Checkboxes Row 1 */}
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="partialRelease" />
            <label htmlFor="partialRelease">Partial Release</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="replyOverDueDate" />
            <label htmlFor="replyOverDueDate">Reply Over Due Date</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="noNeedReply" defaultChecked />
            <label htmlFor="noNeedReply">No Need Reply</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="cdaCrm" />
            <label htmlFor="cdaCrm">CDA/CRM</label>
          </div>
        </div>

        {/* Additional Checkboxes Row 2 */}
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">Consent</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="pending" />
            <label htmlFor="pending">Pending</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="visa" />
            <label htmlFor="visa">Visa</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="authorization" defaultChecked />
            <label htmlFor="authorization">Authorization</label>
          </div>
        </div>

        {/* Additional Checkboxes Row 3 */}
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="partOfDeedOut" />
            <label htmlFor="partOfDeedOut">Part of Deed Out</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="coFinancing" />
            <label htmlFor="coFinancing">Co Financing</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="fallenThrough" defaultChecked />
            <label htmlFor="fallenThrough">Fallen Through</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="collect" />
            <label htmlFor="collect">Collect</label>
          </div>
        </div>

        {/* Dates Section */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex gap-2">
            <label className="w-24">Attrition Date:</label>
            <input type="text" defaultValue="15/06/2018" className="border px-2 py-1 bg-white" />
          </div>
          <div className="flex gap-2">
            <label className="w-32">Attrition Receive Date:</label>
            <input type="text" defaultValue="20/06/2018" className="border px-2 py-1 bg-white" />
          </div>
          <div className="flex gap-2">
            <label>Further Send Deed:</label>
            <input type="checkbox" />
          </div>
        </div>

        {/* Deed Information */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex gap-2">
            <label>Deed In:</label>
            <input type="text" className="border px-2 py-1 bg-white flex-1" />
          </div>
          <div className="flex gap-2">
            <label>Solicitor Ref:</label>
            <input type="text" className="border px-2 py-1 bg-white flex-1" />
          </div>
          <div className="flex gap-2">
            <label>Sol. Attn:</label>
            <input type="text" className="border px-2 py-1 bg-white flex-1" />
          </div>
        </div>

        {/* Remark */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <label className="w-24">Remark:</label>
            <input type="text" defaultValue="**" className="border px-2 py-1 bg-white flex-1" />
          </div>
        </div>

        {/* Borrower Information */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <label className="w-32">Borrower Name:</label>
            <input type="text" defaultValue="**" className="border px-2 py-1 bg-white flex-1" />
          </div>
          <div className="flex gap-2">
            <label className="w-32">Charged Property:</label>
            <input 
              type="text" 
              defaultValue="FLAT**, **/F, BLOCK/TOWER **, **, **" 
              className="border px-2 py-1 bg-white flex-1" 
            />
          </div>
        </div>

        {/* L174 Remark */}
        <div className="space-y-2">
          <label>L174 Remark:</label>
          <div className="space-y-2">
            <input type="text" defaultValue="**" className="border px-2 py-1 bg-white w-full" />
            <input type="text" defaultValue="**" className="border px-2 py-1 bg-white w-full" />
            <input type="text" defaultValue="**" className="border px-2 py-1 bg-white w-full" />
          </div>
        </div>

        {/* Product Information */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="flex gap-2">
              <label>Product Code:</label>
              <input type="text" defaultValue="27109" className="border px-2 py-1 bg-white w-20" />
            </div>
            <div className="flex gap-2">
              <label>Controlling Centre:</label>
              <input type="text" defaultValue="354" className="border px-2 py-1 bg-white w-20" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <label>Title Status:</label>
              <input type="text" defaultValue="2" className="border px-2 py-1 bg-white w-20" />
            </div>
            <div className="flex gap-2">
              <label>Due Date:</label>
              <input type="text" defaultValue="13/11/2024" className="border px-2 py-1 bg-white" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <label>Mortgage Type:</label>
              <input type="text" defaultValue="0" className="border px-2 py-1 bg-white w-20" />
            </div>
            <div className="flex gap-2">
              <label>Last Xact Date:</label>
              <input type="text" defaultValue="15/10/2024" className="border px-2 py-1 bg-white" />
            </div>
            <div className="flex gap-2">
              <label>Title Deed Ref. Date:</label>
              <input type="text" className="border px-2 py-1 bg-white" placeholder="__/__/____" />
            </div>
          </div>
        </div>

        {/* Made By Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-2">
            <label>Made By:</label>
            <input type="text" defaultValue="21160853" className="border px-2 py-1 bg-white" />
          </div>
          <div className="flex gap-2">
            <label>Date:</label>
            <input type="text" defaultValue="26/07/2018 01:57:55" className="border px-2 py-1 bg-white" />
          </div>
        </div>

        {/* Exit Button */}
        <div className="flex justify-center">
          <button 
            type="button" 
            className="px-8 py-2 border border-gray-300 bg-gray-100 hover:bg-gray-200"
          >
            Exit
          </button>
        </div>
      </form>
    </div>
  )
}

