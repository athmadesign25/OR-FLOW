import React from 'react';
import { PreOpClearance, PreOpStatus } from '../../types/orFlow';

interface PreOpClearanceGridProps {
  clearance: PreOpClearance;
  onClick?: () => void;
}

export const PreOpClearanceGrid: React.FC<PreOpClearanceGridProps> = ({ clearance, onClick }) => {
  const renderStatusIcon = (status: PreOpStatus) => {
    switch (status) {
      case 'available':
        return <span className="text-emerald-600 font-bold text-xs">✓</span>;
      case 'pending':
        return <span className="text-amber-500 font-bold text-xs">🕒</span>;
      case 'not-available':
        return <span className="text-red-500 font-bold text-xs">✕</span>;
      case 'review':
        return <span className="text-amber-600 font-bold text-xs">⚠️</span>;
    }
  };

  const pacColor = {
    success: 'text-emerald-600',
    warning: 'text-amber-600',
    danger: 'text-red-600',
    alert: 'text-amber-700 underline font-semibold'
  }[clearance.pacType || 'warning'];

  return (
    <div onClick={onClick} className="cursor-pointer hover:opacity-80 transition-opacity select-none text-[11px]">
      <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-slate-700">
        <span className="flex items-center gap-1">
          {renderStatusIcon(clearance.financial)}
          <span>Financial</span>
        </span>
        <span className="flex items-center gap-1">
          {renderStatusIcon(clearance.crossmatch)}
          <span className="underline decoration-amber-400">Crossmatch</span>
        </span>
        <span className="flex items-center gap-1">
          {renderStatusIcon(clearance.clinical)}
          <span>Clinical</span>
        </span>
        <span className="flex items-center gap-1">
          {renderStatusIcon(clearance.consent)}
          <span className="underline decoration-amber-400">Consent</span>
        </span>
      </div>

      <div className={`mt-1 flex items-center gap-1 ${pacColor}`}>
        {clearance.pacType === 'success' ? '✓' : clearance.pacType === 'danger' ? '✕' : clearance.pacType === 'alert' ? '⚠️' : '🕒'}
        <span>PAC • {clearance.pacStatus}</span>
      </div>
    </div>
  );
};

