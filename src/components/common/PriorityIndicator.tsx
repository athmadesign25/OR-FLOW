import React from 'react';
import { Priority } from '../../types/orFlow';

interface PriorityIndicatorProps {
  priority: Priority;
  size?: 'sm' | 'md' | 'lg';
}

export const PriorityIndicator: React.FC<PriorityIndicatorProps> = ({ priority, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3'
  };

  const colorClasses = {
    Emergency: 'bg-red-600',
    Urgent: 'bg-amber-500',
    Elective: 'bg-emerald-500'
  };

  return (
    <span 
      title={`Priority: ${priority}`} 
      className={`rounded-full shrink-0 ${sizeClasses[size]} ${colorClasses[priority]}`}
    />
  );
};

