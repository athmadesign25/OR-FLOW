import React, { useState } from 'react';
import { ClinicalIndicators as ClinicalIndicatorsType } from '../../types/orFlow';

interface ClinicalIndicatorsProps {
  indicators: ClinicalIndicatorsType;
}

export const ClinicalIndicators: React.FC<ClinicalIndicatorsProps> = ({ indicators }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-xs">
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className="cursor-pointer group select-none"
      >
        <div className="text-red-600 font-medium text-[11px] group-hover:underline truncate max-w-[140px]">
          {indicators.allergies.join(' • ')}
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-amber-700 text-[11px] font-semibold">{indicators.asaScore}</span>
          <span className="px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold">
            +{indicators.count}
          </span>
        </div>
      </div>

      {isOpen && (
        <div 
          className="absolute left-0 top-10 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in"
          onClick={e => e.stopPropagation()}
        >
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Allergy</span>
              <span className="text-red-600 font-semibold">{indicators.allergies.join(', ')}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Comorbidities</span>
              <span className="text-slate-700">{indicators.comorbidities.join(' • ')}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">ASA & MET Score</span>
              <span className="text-red-600 font-semibold">{indicators.asaScore} • {indicators.metScore}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">BMI</span>
              <span className="text-amber-600 font-semibold">BMI {indicators.bmi}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

