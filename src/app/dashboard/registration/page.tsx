import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegistrationPage() {
  return (
     <div className="flex flex-col h-full mt-48">
      {/* Top Admin Bar */}
      <div className="bg-slate-50 p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-600">User Name:</label>
            <Input className="w-40" placeholder="Admin User" disabled />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-600">Password:</label>
            <Input type="password" className="w-40" disabled />
          </div>
        </div>
        
      </div>

      {/* Main Form Content */}
      <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-7xl mx-auto">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wide border-b border-blue-100 pb-2 mb-4">Patient Basics</h3>
            
            <div className="grid grid-cols-4 gap-4 items-center">
               <label className="text-sm font-medium text-slate-600 col-span-1">Lab No</label>
               <div className="col-span-3"><Input name="labNo"  /></div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 items-center">
               <label className="text-sm font-medium text-slate-600 col-span-1">Name</label>
               <div className="col-span-3"><Input name="name" placeholder="Patient Full Name" /></div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-center">
               <label className="text-sm font-medium text-slate-600 col-span-1">NIC</label>
               <div className="col-span-3"><Input name="nic" placeholder="00000-0000000-0"  /></div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-center">
               <label className="text-sm font-medium text-slate-600 col-span-1">Email</label>
               <div className="col-span-3"><Input name="email" type="email"  /></div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-center">
               <label className="text-sm font-medium text-slate-600 col-span-1">Test Code</label>
               <div className="col-span-3"><Input name="testCode"  /></div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-center">
               <label className="text-sm font-medium text-slate-600 col-span-1">From</label>
               <div className="col-span-3"><Input type="datetime-local" defaultValue="2025-11-24T00:00" /></div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 items-center">
               <label className="text-sm font-medium text-slate-600 col-span-1">Doctor</label>
               <div className="col-span-3"><Input name="doctor"  /></div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-center pt-4">
               <div className="col-start-1 col-span-4">
                 <Button  className="w-full bg-slate-700" >Update</Button>
               </div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-center pt-2">
               <div className="col-span-4 flex gap-2">
                  <select className="w-1/3">
                    <option>Asc</option>
                    <option>Desc</option>
                  </select>
                  <select className="flex-1">
                    <option>Patient #</option>
                  </select>
               </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
             <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wide border-b border-blue-100 pb-2 mb-4">Demographics</h3>

             <div className="grid grid-cols-4 gap-4 items-center">
                <label className="text-sm font-medium text-slate-600 col-span-1">Patient No</label>
                <div className="col-span-3"><Input className="bg-slate-50 font-mono" /></div>
             </div>

             <div className="grid grid-cols-4 gap-4 items-center">
                <label className="text-sm font-medium text-slate-600 col-span-1">F/H Name</label>
                <div className="col-span-3"><Input placeholder="Father/Husband Name" /></div>
             </div>

             <div className="grid grid-cols-4 gap-4 items-center">
                <label className="text-sm font-medium text-slate-600 col-span-1">Gender</label>
                <div className="col-span-3">
                  <select>
                    <option>- Select Here -</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
             </div>

             <div className="grid grid-cols-4 gap-4 items-center">
                <label className="text-sm font-medium text-slate-600 col-span-1">Mobile</label>
                <div className="col-span-3"><Input name="mobile" placeholder="03XX-XXXXXXX"  /></div>
             </div>

             <div className="grid grid-cols-4 gap-4 items-center">
                <label className="text-sm font-medium text-slate-600 col-span-1">Test Name</label>
                <div className="col-span-3"><Input /></div>
             </div>

             <div className="grid grid-cols-4 gap-4 items-center">
                <label className="text-sm font-medium text-slate-600 col-span-1">To Date</label>
                <div className="col-span-3"><Input type="datetime-local" defaultValue="2025-11-24T23:59" /></div>
             </div>

             <div className="grid grid-cols-4 gap-4 items-center pt-2">
               <div className="col-start-2 col-span-3">
                 <label className="flex items-center gap-2 cursor-pointer group">
                   <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                   <span className="text-sm text-slate-600 group-hover:text-slate-900">Hide Header & Footer</span>
                 </label>
               </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
             <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wide border-b border-blue-100 pb-2 mb-4">Status & Search</h3>

             <div className="grid grid-cols-4 gap-4 items-center">
                <label className="text-sm font-medium text-slate-600 col-span-1">Age</label>
                <div className="col-span-3 flex gap-2">
                  <Input className="flex-1" placeholder="Age" />
                  <select className="w-24">
                    <option>Year</option>
                    <option>Month</option>
                    <option>Day</option>
                  </select>
                </div>
             </div>

             <div className="grid grid-cols-4 gap-4 items-center">
                <label className="text-sm font-medium text-slate-600 col-span-1">Blood Grp</label>
                <div className="col-span-3"><Input placeholder="e.g. A+" /></div>
             </div>

             <div className="grid grid-cols-4 gap-4 items-center">
                <label className="text-sm font-medium text-slate-600 col-span-1">User Name</label>
                <div className="col-span-3">
                  <select>
                    <option>Select User</option>
                    <option>Alflayyah</option>
                  </select>
                </div>
             </div>
             
             <div className="grid grid-cols-4 gap-4 items-center">
                <label className="text-sm font-medium text-slate-600 col-span-1">Payment</label>
                <div className="col-span-3">
                  <select>
                    <option>- All -</option>
                    <option>Cash</option>
                    <option>Credit</option>
                  </select>
                </div>
             </div>

             <div className="grid grid-cols-4 gap-4 items-center pt-4">
                <div className="col-span-4 flex justify-end gap-3">
                  <Button  className="w-24 bg-blue-600 hover:bg-blue-700">Search</Button>
                  <Button variant="secondary" className="w-24">Clear</Button>
                </div>
             </div>
             
             <div className="grid grid-cols-4 gap-4 items-center pt-2">
               <div className="col-span-4 flex justify-end">
                 <label className="flex items-center gap-2 cursor-pointer group">
                   <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                   <span className="text-sm text-slate-600 group-hover:text-slate-900">Print Group On Single Page</span>
                 </label>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}