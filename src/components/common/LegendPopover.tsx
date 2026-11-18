import React from 'react';

interface LegendPopoverProps {
  onClose: () => void;
}

export const LegendPopover: React.FC<LegendPopoverProps> = ({ onClose }) => {
  return (
    <div 
      className="absolute left-0 top-8 w-96 bg-white border border-slate-200 rounded-xl shadow-2xl p-4 z-50 animate-in fade-in"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Status Legend</h4>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-3 text-xs">
        <div>
          <span className="font-semibold text-slate-700 block mb-2">Surgery Priority</span>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-red-600"></span><span>Emergency</span></div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span><span>Urgent</span></div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span><span>Elective</span></div>
          </div>
        </div>
        <div>
          <span className="font-semibold text-slate-700 block mb-2">Pre-Op Clearance</span>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center gap-1.5 text-amber-600"><span>⚠️</span><span>Review required</span></div>
            <div className="flex items-center gap-1.5 text-emerald-600"><span>✓</span><span>Available</span></div>
            <div className="flex items-center gap-1.5 text-orange-600"><span>🕒</span><span>Pending</span></div>
            <div className="flex items-center gap-1.5 text-red-600"><span>✕</span><span>Not Available</span></div>
          </div>
        </div>
        <div>
          <span className="font-semibold text-slate-700 block mb-2">Clinical Indicators</span>
          <div className="space-y-1 text-xs">
            <div className="text-orange-700 font-medium">High</div>
            <div className="text-red-600 font-medium">Severe</div>
            <div className="text-emerald-600 font-medium">Normal</div>
          </div>
        </div>
        <div>
          <span className="font-semibold text-slate-700 block mb-2">OT Status</span>
          <div className="space-y-1">
            <span className="inline-block px-2 py-0.5 rounded text-[11px] bg-blue-100 text-blue-800">Requested</span>
            <span className="inline-block px-2 py-0.5 rounded text-[11px] bg-purple-100 text-purple-800 ml-1">Scheduled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

