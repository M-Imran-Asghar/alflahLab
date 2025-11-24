'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Plus, Download, Filter } from 'lucide-react';




export default function RecordsPage() {
 

  return (
    <div className="flex flex-col h-full p-6 overflow-y-auto custom-scrollbar mt-48">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-7xl mx-auto w-full">
        
        {/* Column 1 */}
        <div className="space-y-4">
          <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wide border-b border-blue-100 pb-2 mb-4">Search Criteria</h3>

          <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Lab No</label>
            <div className="col-span-3"><Input className="bg-slate-50" /></div>
          </div>
           <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Name</label>
            <div className="col-span-3"><Input /></div>
          </div>
           <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">NIC</label>
            <div className="col-span-3"><Input /></div>
          </div>
           <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Email</label>
            <div className="col-span-3"><Input /></div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Test Code</label>
            <div className="col-span-3"><Input /></div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">From Date</label>
            <div className="col-span-3"><Input type="datetime-local" defaultValue="2025-11-24T00:00" /></div>
          </div>
           <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Doctor</label>
            <div className="col-span-3"><Input /></div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <div className="col-start-2 col-span-3 flex gap-2">
              <select className="w-1/3">
               <option>Asc</option>
               <option>Desc</option>
             </select>
             <select className="flex-1">
               <option>Patient #</option>
             </select>
            </div>
          </div>
           <div className="pt-2">
            <Button  className="w-full" >Update Record</Button>
           </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wide border-b border-blue-100 pb-2 mb-4">Patient Details</h3>

          <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Patient No</label>
            <div className="col-span-3"><Input className="bg-slate-50" /></div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">F/H Name</label>
            <div className="col-span-3"><Input /></div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Gender</label>
            <div className="col-span-3">
              <select>
               <option>- select Here -</option>
               <option>Male</option>
               <option>Female</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Mobile</label>
            <div className="col-span-3"><Input /></div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Test Name</label>
            <div className="col-span-3"><Input /></div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">To Date</label>
            <div className="col-span-3"><Input type="datetime-local" defaultValue="2025-11-24T23:59" /></div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wide border-b border-blue-100 pb-2 mb-4">Filters</h3>

          <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Age</label>
            <div className="col-span-3 flex gap-2">
               <Input className="flex-1" />
               <select className="w-24">
                 <option>Year</option>
                 <option>Month</option>
                 <option>Day</option>
               </select>
            </div>
          </div>
           <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Blood Grp</label>
            <div className="col-span-3"><Input /></div>
          </div>
           <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">User Name</label>
            <div className="col-span-3">
              <select>
                <option>select User</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center">
            <label className="text-sm font-medium text-slate-600 col-span-1">Payment</label>
            <div className="col-span-3">
              <select>
                <option>- All Types -</option>
                <option>Cash</option>
                <option>Credit</option>
              </select>
            </div>
          </div>
          
          <div className="mt-8 flex gap-3 justify-end">
              <Button  className="w-32" >Search</Button>
              <Button variant="secondary" className="w-32" >Clear Filters</Button>
          </div>
        </div>

       </div>
    </div>
  );
}
