import React from 'react';
import { MOSHE_COHEN } from '../constants';
import { ChevronLeft, Filter, Download, Search } from 'lucide-react';

interface RiskReportProps {
  onSelectStudent: (id: string) => void;
}

const RiskReport: React.FC<RiskReportProps> = ({ onSelectStudent }) => {
  const students = [
    { id: '1', name: 'משה כהן', class: 'ח-1', risk: 'high', score: 88, status: 'בטיפול' },
    { id: '2', name: 'שרה לוי', class: 'ח-2', risk: 'medium', score: 65, status: 'חדש' },
    { id: '3', name: 'דוד אברהם', class: 'ח-1', risk: 'low', score: 32, status: 'תקין' },
    { id: '4', name: 'רחל זיו', class: 'ח-3', risk: 'high', score: 92, status: 'בטיפול' },
    { id: '5', name: 'יוסף חדד', class: 'ח-2', risk: 'medium', score: 58, status: 'חדש' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">דוח סיכון תלמידים</h2>
          <p className="text-text-secondary">ריכוז תלמידים המזוהים בסיכון לנשירה או ירידה לימודית</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm hover:bg-gray-50">
            <Filter size={18} />
            סינון
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm hover:bg-gray-50">
            <Download size={18} />
            ייצוא
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <div className="relative w-64">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="חיפוש תלמיד..." 
              className="w-full pr-10 pl-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="text-sm text-text-secondary">
            מציג 5 מתוך 124 תלמידים
          </div>
        </div>
        <table className="w-full text-right">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-semibold text-text-secondary text-sm">שם התלמיד</th>
              <th className="px-6 py-4 font-semibold text-text-secondary text-sm">כיתה</th>
              <th className="px-6 py-4 font-semibold text-text-secondary text-sm">רמת סיכון</th>
              <th className="px-6 py-4 font-semibold text-text-secondary text-sm">מדד סיכון</th>
              <th className="px-6 py-4 font-semibold text-text-secondary text-sm">סטטוס</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <button 
                    onClick={() => onSelectStudent(student.id)}
                    className="font-bold text-primary hover:underline"
                  >
                    {student.name}
                  </button>
                </td>
                <td className="px-6 py-4 text-sm">{student.class}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    student.risk === 'high' ? 'bg-red-50 text-danger' : 
                    student.risk === 'medium' ? 'bg-orange-50 text-warning' : 
                    'bg-green-50 text-success'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {student.risk === 'high' ? 'סיכון גבוה' : student.risk === 'medium' ? 'סיכון בינוני' : 'סיכון נמוך'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="w-full bg-gray-100 rounded-full h-2 max-w-[100px]">
                    <div 
                      className={`h-2 rounded-full ${
                        student.risk === 'high' ? 'bg-danger' : 
                        student.risk === 'medium' ? 'bg-warning' : 
                        'bg-success'
                      }`}
                      style={{ width: `${student.score}%` }}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">{student.status}</td>
                <td className="px-6 py-4 text-left">
                  <button 
                    onClick={() => onSelectStudent(student.id)}
                    className="text-gray-400 hover:text-primary"
                  >
                    <ChevronLeft size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiskReport;
