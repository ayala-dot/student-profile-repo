import React from 'react';
import { TrendingDown, TrendingUp, Minus } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  indication?: 'up' | 'down' | 'neutral';
  statusColor?: 'success' | 'warning' | 'danger' | 'info';
}

const KPICard: React.FC<KPICardProps> = ({ title, value, indication, statusColor = 'info' }) => {
  const colorMap = {
    success: 'border-success',
    warning: 'border-warning',
    danger: 'border-danger',
    info: 'border-info',
  };

  return (
    <div className={`bg-surface p-5 rounded-xl border-t-4 ${colorMap[statusColor]} shadow-sm`}>
      <p className="text-text-secondary text-sm mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-bold text-text-primary">{value}</h3>
        {indication && (
          <div className={`flex items-center gap-1 text-sm font-medium ${
            indication === 'up' ? 'text-success' : indication === 'down' ? 'text-danger' : 'text-text-secondary'
          }`}>
            {indication === 'up' && <TrendingUp size={16} />}
            {indication === 'down' && <TrendingDown size={16} />}
            {indication === 'neutral' && <Minus size={16} />}
            <span>{indication === 'up' ? 'עלייה' : indication === 'down' ? 'ירידה' : 'יציב'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default KPICard;
