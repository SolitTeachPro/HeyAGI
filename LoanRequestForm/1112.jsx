"use client"

import { useState } from "react"

export default function LoanForm() {
  const [formData, setFormData] = useState({
    loanNo: "998-520456-070",
    suffix: "070",
    imAmt: "4,000,000.00",
    letterDate: "03/01/2025",
    letterFrom: "CHEUNG & LIU",
    solicitor: "CHEUNG & LIU",
    solicitorRef: "WC02V/585597/PW"
  })

  return (
    <div className="p-4 max-w-[1200px] mx-auto font-sans">
      {/* Header */}
      <div className="text-lg font-semibold mb-4">SEND DEED | SEND DEED 2</div>

      {/* Main Form */}
      <div className="border border-gray-300 p-4 mb-4">
        <div className="grid grid-cols-4 gap-4">
          {/* Left Column */}
          <div className="col-span-2 space-y-2">
            {/* Loan Numbers Section */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm">Loan No:</label>
                <input
                  type="text"
                  value={formData.loanNo}
                  className="w-full border p-1 text-sm"
                  readOnly
                />
              </div>
              <div>
                <label className="text-sm">Suffix:</label>
                <input
                  type="text"
                  value={formData.suffix}
                  className="w-full border p-1 text-sm"
                  readOnly
                />
              </div>
            </div>

            {/* Additional Loan Numbers */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-sm">Loan No:</label>
                  <input type="text" className="w-full border p-1 text-sm" />
                </div>
                <div>
                  <label className="text-sm">Suffix:</label>
                  <input type="text" className="w-full border p-1 text-sm" />
                </div>
              </div>
            ))}

            {/* GBF Section */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-sm">GBF:</label>
                  <input type="text" className="w-full border p-1 text-sm" />
                </div>
                <div>
                  <label className="text-sm">Current No:</label>
                  <input type="text" className="w-full border p-1 text-sm" />
                </div>
              </div>
            ))}

            {/* Other Loan Types */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-sm">Other Loan Type:</label>
                  <input type="text" className="w-full border p-1 text-sm" />
                </div>
                <div>
                  <label className="text-sm">Other Loan No:</label>
                  <input type="text" className="w-full border p-1 text-sm" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="col-span-2 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm">I/M Amt:</label>
                <input
                  type="text"
                  value={formData.imAmt}
                  className="w-full border p-1 text-sm"
                  readOnly
                />
              </div>
              <div>
                <label className="text-sm">I/M:</label>
                <input type="checkbox" className="ml-2" />
              </div>
            </div>

            {/* F/C and GBF Amount Fields */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-sm">F/C Amt:</label>
                  <input type="text" className="w-full border p-1 text-sm" />
                </div>
                <div>
                  <input type="checkbox" className="ml-2" />
                </div>
              </div>
            ))}

            {[...Array(4)].map((_, i) => (
              <div key={i} className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-sm">GBF Amt:</label>
                  <input type="text" className="w-full border p-1 text-sm" />
                </div>
                <div>
                  <input type="checkbox" className="ml-2" />
                </div>
              </div>
            ))}

            {/* Additional Fields */}
            <div>
              <label className="text-sm">Wrong Address:</label>
              <input type="text" className="w-full border p-1 text-sm" />
            </div>
            <div>
              <label className="text-sm">Instruction From:</label>
              <input type="text" className="w-full border p-1 text-sm" />
            </div>
            <div>
              <label className="text-sm">IFL Loan Amt:</label>
              <input type="text" value="0.00" className="w-full border p-1 text-sm" readOnly />
            </div>
            <div>
              <label className="text-sm">Repaid Date:</label>
              <input type="text" className="w-full border p-1 text-sm" placeholder="__/__/____" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Letter Date:</label>
            <input
              type="text"
              value={formData.letterDate}
              className="w-full border p-1 text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm">Consent Date:</label>
            <input type="text" className="w-full border p-1 text-sm" placeholder="__/__/____" />
          </div>
          <div>
            <label className="text-sm">Letter From:</label>
            <input
              type="text"
              value={formData.letterFrom}
              className="w-full border p-1 text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm">Dev Consent Date:</label>
            <input type="text" className="w-full border p-1 text-sm" placeholder="__/__/____" />
          </div>
          <div>
            <label className="text-sm">Solicitor:</label>
            <input
              type="text"
              value={formData.solicitor}
              className="w-full border p-1 text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm">Instruction Date:</label>
            <input type="text" className="w-full border p-1 text-sm" placeholder="__/__/____" />
          </div>
        </div>

        {/* Solicitor References */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Solicitor Ref:</label>
            <input
              type="text"
              value={formData.solicitorRef}
              className="w-full border p-1 text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm">RCS Code:</label>
            <input type="text" className="w-full border p-1 text-sm" />
          </div>
          <div>
            <label className="text-sm">Solicitor Ref:</label>
            <input
              type="text"
              value={formData.solicitorRef}
              className="w-full border p-1 text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm">Discharge Rec Date:</label>
            <input type="text" className="w-full border p-1 text-sm" placeholder="__/__/____" />
          </div>
          <div></div>
          <div>
            <label className="text-sm">Refer Our Letter:</label>
            <input type="text" className="w-full border p-1 text-sm" placeholder="__/__/____" />
          </div>
        </div>
      </div>

      {/* Checkboxes Section */}
      <div className="border border-gray-300 p-4 mb-4">
        <div className="grid grid-cols-6 gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="em" />
            <label htmlFor="em" className="text-sm">EM</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="deeds" checked readOnly />
            <label htmlFor="deeds" className="text-sm">Deeds</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="files" />
            <label htmlFor="files" className="text-sm">Files</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="sandp" />
            <label htmlFor="sandp" className="text-sm">S and P</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="instruction" />
            <label htmlFor="instruction" className="text-sm">Instruction</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="noneedreply" />
            <label htmlFor="noneedreply" className="text-sm">No Need Reply</label>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4 mt-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="partialrelease" />
            <label htmlFor="partialrelease" className="text-sm">Partial Release</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent" className="text-sm">Consent</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="alldeedout" />
            <label htmlFor="alldeedout" className="text-sm">All Deed Out</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="partofdeedout" />
            <label htmlFor="partofdeedout" className="text-sm">Part of Deed Out</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="cofinancing" />
            <label htmlFor="cofinancing" className="text-sm">Co Financing</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="waitconsent" />
            <label htmlFor="waitconsent" className="text-sm">Wait Consent</label>
          </div>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Card No:</label>
              <input type="text" className="w-full border p-1 text-sm" />
            </div>
            <div>
              <label className="text-sm">Solicitor Ref:</label>
              <input type="text" className="w-full border p-1 text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm">Discharge/Release:</label>
              <input
                type="text"
                value="Discharge/Release"
                className="w-full border p-1 text-sm"
                readOnly
              />
            </div>
            <div>
              <label className="text-sm">Letter Head:</label>
              <input
                type="text"
                value="BANK"
                className="w-full border p-1 text-sm"
                readOnly
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm">Process Sheet Remark:</label>
            <textarea className="w-full border p-1 text-sm h-20" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="grid grid-cols-4 gap-4">
        <div className="border border-gray-300 p-2">
          <div className="text-sm font-semibold">Made</div>
          <div>
            <label className="text-sm">By:</label>
            <input
              type="text"
              value="45228083"
              className="w-full border p-1 text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm">Date:</label>
            <input
              type="text"
              value="07/01/2025 16:02:05"
              className="w-full border p-1 text-sm"
              readOnly
            />
          </div>
        </div>

        <div className="border border-gray-300 p-2">
          <div className="text-sm font-semibold">Checked</div>
          <div>
            <label className="text-sm">By:</label>
            <input
              type="text"
              value="43584775"
              className="w-full border p-1 text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm">Date:</label>
            <input
              type="text"
              value="07/01/2025 16:16:55"
              className="w-full border p-1 text-sm"
              readOnly
            />
          </div>
        </div>

        <div className="border border-gray-300 p-2">
          <div className="text-sm font-semibold">Printed</div>
          <div>
            <label className="text-sm">By:</label>
            <input
              type="text"
              value="45228083"
              className="w-full border p-1 text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm">Date:</label>
            <input
              type="text"
              value="07/01/2025 16:03:00"
              className="w-full border p-1 text-sm"
              readOnly
            />
          </div>
        </div>

        <div className="border border-gray-300 p-2">
          <div className="text-sm font-semibold">Signed</div>
          <div>
            <label className="text-sm">By:</label>
            <input type="text" className="w-full border p-1 text-sm" />
          </div>
          <div>
            <label className="text-sm">Date:</label>
            <input type="text" className="w-full border p-1 text-sm" placeholder="__/__/____" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button className="px-4 py-2 border border-gray-300 rounded">Uncheck</button>
        <button className="px-4 py-2 border border-gray-300 rounded">Exit</button>
      </div>
    </div>
  )
}

