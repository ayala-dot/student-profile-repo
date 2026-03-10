import React from 'react';
import { EventData } from '../types';
import { AlertCircle, Clock } from 'lucide-react';

interface TimelineTableProps {
  data: EventData[];
}

const TimelineTable: React.FC<TimelineTableProps> = ({ data }) => {
  return (
    <div className="bg-surface p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-6">ציר זמן: אירועי התנהגות והיעדרויות</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 font-semibold text-text-secondary text-sm">תאריך</th>
              <th className="pb-3 font-semibold text-text-secondary text-sm">סוג</th>
              <th className="pb-3 font-semibold text-text-secondary text-sm">פירוט</th>
            </tr>
          </thead>
          <tbody>
            {data.map((event, index) => (
              <tr key={index} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-4 text-sm">{event.date}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    {event.type === 'behavior' ? (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-50 text-danger text-xs font-medium">
                        <AlertCircle size={12} />
                        התנהגות
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-50 text-warning text-xs font-medium">
                        <Clock size={12} />
                        היעדרות
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 text-sm">{event.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimelineTable;
