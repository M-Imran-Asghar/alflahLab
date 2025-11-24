"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from 'react';

interface Report {
  id: number;
  labNo: string;
  patientName: string;
  age: string;
  gender: string;
  testName: string;
  details: string;
  status: 'Pending' | 'Verified' | 'Rejected';
  doctor: string;
}


const INITIAL_DATA: Report[] = [
  { id: 1, labNo: '251101', patientName: 'Muhammad Ali', age: '32 Y', gender: 'Male', testName: 'Complete Blood Count (CBC)', details: 'Includes Hb, TLC, DLC...', status: 'Pending', doctor: 'Dr. Ayesha Khan' },
  { id: 2, labNo: '251102', patientName: 'Sana Ahmed', age: '28 Y', gender: 'Female', testName: 'Liver Function Test', details: 'Bilirubin, ALT, AST...', status: 'Pending', doctor: 'Dr. Bilal' },
  { id: 3, labNo: '251103', patientName: 'Usman Ghani', age: '45 Y', gender: 'Male', testName: 'Renal Profile', details: 'Urea, Creatinine...', status: 'Pending', doctor: 'Dr. Ayesha Khan' },
  { id: 4, labNo: '251104', patientName: 'Fatima Bibi', age: '60 Y', gender: 'Female', testName: 'Lipid Profile', details: 'Cholesterol, HDL, LDL...', status: 'Verified', doctor: 'Dr. Strange' },
  { id: 5, labNo: '251105', patientName: 'Zainab Noor', age: '12 Y', gender: 'Female', testName: 'Dengue NS1', details: 'Antigen Detection', status: 'Pending', doctor: 'Dr. Bilal' },
  { id: 6, labNo: '251106', patientName: 'Ahmed Raza', age: '50 Y', gender: 'Male', testName: 'HbA1c', details: 'Glycated Hemoglobin', status: 'Verified', doctor: 'Dr. Strange' },
  { id: 7, labNo: '251107', patientName: 'Kashif Mehmood', age: '35 Y', gender: 'Male', testName: 'Urine R/E', details: 'Microscopy', status: 'Pending', doctor: 'Dr. Ayesha Khan' },
];

 

export default function VerificationPage() {


  const [data, setData] = useState<Report[]>(INITIAL_DATA);
  const [selectedIds, setselectedIds] = useState<Set<number>>(new Set());
  
  // Filter States
  const [filterLabNo, setFilterLabNo] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Computed data based on filters
  const filteredData = data.filter(item => {
    const matchesLab = item.labNo.includes(filterLabNo);
    const matchesStatus = filterStatus === 'All' || 
                         (filterStatus === 'Pending Verification' && item.status === 'Pending') ||
                         (filterStatus === 'Verified' && item.status === 'Verified');
    return matchesLab && matchesStatus;
  });

  const handleselectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setselectedIds(new Set(filteredData.map(d => d.id)));
    } else {
      setselectedIds(new Set());
    }
  };

  const handleselectRow = (id: number) => {
    const newselected = new Set(selectedIds);
    if (newselected.has(id)) {
      newselected.delete(id);
    } else {
      newselected.add(id);
    }
    setselectedIds(newselected);
  };

  const handleSearch = () => {
    console.log(`Search completed. Found ${filteredData.length} records.`, 'info');
  };

  const handleReset = () => {
    setFilterLabNo('');
    setFilterStatus('All');
    console.log('Filters reset.', 'info');
  };

  const handleVerify = () => {
    if (selectedIds.size === 0) {
      console.log('Please select at least one record to verify.', 'error');
      return;
    }

    setData(prev => prev.map(item => 
      selectedIds.has(item.id) ? { ...item, status: 'Verified' } : item
    ));
    setselectedIds(new Set());
    console.log(`Successfully verified ${selectedIds.size} reports.`, 'success');
  };

  const handleReject = () => {
     if (selectedIds.size === 0) {
      console.log('Please select at least one record to reject.', 'error');
      return;
    }
    
    setData(prev => prev.map(item => 
      selectedIds.has(item.id) ? { ...item, status: 'Rejected' } : item
    ));
    setselectedIds(new Set());
    console.log(`${selectedIds.size} reports rejected.`, 'error');
  };


  return (
    <div className="flex flex-col h-full bg-white mt-48">
        {/* Filter Section */}
        <div className="p-4 border-b border-slate-200 bg-slate-50/50">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 items-end">
                 <div className="space-y-1 col-span-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">From Date</label>
                    <Input type="datetime-local" defaultValue="2025-11-24T00:00" />
                 </div>
                 <div className="space-y-1 col-span-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">To Date</label>
                    <Input type="datetime-local" defaultValue="2025-11-24T23:59" />
                 </div>
                 <div className="space-y-1 col-span-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Lab No</label>
                    <Input 
                      placeholder="Search Lab No" 
                      className="font-mono"
                      value={filterLabNo}
                      onChange={(e) => setFilterLabNo(e.target.value)}
                    />
                 </div>
                 <div className="space-y-1 col-span-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</label>
                    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Pending Verification">Pending Verification</option>
                        <option value="Verified">Verified</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 lg:col-span-2 flex gap-2">
                    <Button onClick={handleSearch}  className="flex-1 bg-slate-800 hover:bg-slate-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      Search
                    </Button>
                    <Button onClick={handleReset} variant="secondary" className="w-24">Reset</Button>
                 </div>
            </div>
        </div>

        {/* Table Section */}
        <div className="flex-1 overflow-auto relative">
             <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-100 text-xs uppercase text-slate-500 font-semibold sticky top-0 z-10 shadow-sm">
                    <tr>
                        <th className="px-6 py-3 border-b border-slate-200 w-12 text-center bg-slate-100">
                            <input 
                              type="checkbox" 
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                              onChange={handleselectAll}
                              checked={filteredData.length > 0 && selectedIds.size === filteredData.length}
                            />
                        </th>
                        <th className="px-6 py-3 border-b border-slate-200 bg-slate-100">Lab No</th>
                        <th className="px-6 py-3 border-b border-slate-200 bg-slate-100">Patient Name</th>
                        <th className="px-6 py-3 border-b border-slate-200 bg-slate-100">Test Details</th>
                        <th className="px-6 py-3 border-b border-slate-200 bg-slate-100">Status</th>
                        <th className="px-6 py-3 border-b border-slate-200 bg-slate-100">Ref Doctor</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {filteredData.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                          No records found matching your filters.
                        </td>
                      </tr>
                    ) : (
                      filteredData.map((item) => (
                        <tr 
                          key={item.id} 
                          className={`
                            hover:bg-slate-50 transition-colors group cursor-pointer
                            ${selectedIds.has(item.id) ? 'bg-blue-50/50' : ''}
                            ${item.status === 'Verified' ? 'bg-slate-50/30' : ''}
                          `}
                          onClick={() => handleselectRow(item.id)}
                        >
                            <td className="px-6 py-3 text-center">
                                <input 
                                  type="checkbox" 
                                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 pointer-events-none"
                                  checked={selectedIds.has(item.id)}
                                  readOnly
                                />
                            </td>
                            <td className="px-6 py-3 font-mono font-medium text-slate-700">{item.labNo}</td>
                            <td className="px-6 py-3">
                              <div className="font-medium text-slate-900">{item.patientName}</div>
                              <div className="text-xs text-slate-400">{item.age} / {item.gender}</div>
                            </td>
                            <td className="px-6 py-3">
                              <div className="text-slate-800">{item.testName}</div>
                              <div className="text-xs text-slate-500">{item.details}</div>
                            </td>
                            <td className="px-6 py-3">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                  ${item.status === 'Pending' ? 'bg-amber-100 text-amber-800 border-amber-200' : ''}
                                  ${item.status === 'Verified' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : ''}
                                  ${item.status === 'Rejected' ? 'bg-red-100 text-red-800 border-red-200' : ''}
                                `}>
                                    {item.status}
                                </span>
                            </td>
                            <td className="px-6 py-3 text-slate-500">{item.doctor}</td>
                        </tr>
                      ))
                    )}
                </tbody>
             </table>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-white flex flex-col md:flex-row justify-between items-center gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
            <div className="flex items-center gap-6">
               <div className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">{filteredData.length}</span> records found
               </div>
               <div className="h-4 w-px bg-slate-300 hidden md:block"></div>
               <div className="text-sm text-slate-500 hidden md:block">
                  <span className="font-semibold text-blue-600">{selectedIds.size}</span> selected
               </div>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
                 <Button onClick={handleReject}  className="flex-1 md:flex-none">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                   Reject
                 </Button>
                 <Button onClick={handleVerify} variant="success" className="flex-1 md:flex-none min-w-[140px] shadow-sm hover:shadow-md">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                   Verify selected
                 </Button>
            </div>
        </div>
    </div>
  )
}