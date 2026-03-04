import React from 'react';
import { Sparkles, Target } from 'lucide-react';

interface AIInsightsProps {
  summary: string;
  focusPoints: string[];
}

const AIInsights: React.FC<AIInsightsProps> = ({ summary, focusPoints }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-[#F0F4F8] p-6 rounded-xl border-r-4 border-primary-dark shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-primary-dark">
          <Sparkles size={20} />
          <h3 className="font-bold">סיכום נתונים AI</h3>
        </div>
        <p className="text-sm leading-relaxed text-text-primary">
          {summary}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-primary">
          <Target size={20} />
          <h3 className="font-bold">נקודות למיקוד ושיחה</h3>
        </div>
        <ul className="space-y-3">
          {focusPoints.map((point, index) => (
            <li key={index} className="flex gap-2 text-sm text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIInsights;
