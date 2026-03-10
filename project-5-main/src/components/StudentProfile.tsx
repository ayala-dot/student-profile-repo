import React from 'react';
import { StudentProfile as StudentProfileType } from '../types';
import { ArrowRight, Calendar } from 'lucide-react';
import KPICard from './KPICard';
import GradesChart from './GradesChart';
import TimelineTable from './TimelineTable';
import AIInsights from './AIInsights';

interface StudentProfileProps {
  student: StudentProfileType;
  onBack: () => void;
}

const StudentProfile: React.FC<StudentProfileProps> = ({ student, onBack }) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-text-secondary"
            title="חזרה לדוח הסיכון"
          >
            <ArrowRight size={24} />
          </button>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl font-bold text-text-primary">{student.name}</h2>
              <span className="text-text-secondary text-lg">|</span>
              <span className="text-text-secondary">כיתה: {student.grade}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-secondary">רמת סיכון:</span>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                student.riskLevel === 'high' ? 'bg-red-50 text-danger' : 
                student.riskLevel === 'medium' ? 'bg-orange-50 text-warning' : 
                'bg-green-50 text-success'
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  student.riskLevel === 'high' ? 'bg-danger' : 
                  student.riskLevel === 'medium' ? 'bg-warning' : 
                  'bg-success'
                }`} />
                {student.riskLevel === 'high' ? 'סיכון גבוה' : student.riskLevel === 'medium' ? 'סיכון בינוני' : 'סיכון נמוך'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
          <Calendar size={18} className="text-text-secondary mr-2" />
          <span className="text-sm font-medium">טווח תאריכים:</span>
          <select className="text-sm bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-primary">
            <option>90 ימים אחרונים</option>
            <option>30 ימים אחרונים</option>
            <option>מתחילת השנה</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard 
          title="ממוצע ציונים" 
          value={student.kpis.avgGrade} 
          indication={student.kpis.gradeTrend} 
          statusColor={student.kpis.avgGrade < 70 ? 'danger' : student.kpis.avgGrade < 80 ? 'warning' : 'success'} 
        />
        <KPICard 
          title="מגמת ציונים" 
          value={student.kpis.gradeTrend === 'up' ? 'עלייה' : student.kpis.gradeTrend === 'down' ? 'ירידה' : 'יציב'} 
          indication={student.kpis.gradeTrend} 
          statusColor={student.kpis.gradeTrend === 'up' ? 'success' : student.kpis.gradeTrend === 'down' ? 'danger' : 'info'} 
        />
        <KPICard 
          title="סה״כ היעדרויות" 
          value={student.kpis.totalAbsences} 
          statusColor={student.kpis.totalAbsences > 5 ? 'danger' : student.kpis.totalAbsences > 2 ? 'warning' : 'success'} 
        />
        <KPICard 
          title="אירועי התנהגות" 
          value={student.kpis.behaviorEvents} 
          statusColor={student.kpis.behaviorEvents > 2 ? 'danger' : student.kpis.behaviorEvents > 0 ? 'warning' : 'success'} 
        />
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <GradesChart data={student.grades} />
        <TimelineTable data={student.timeline} />
      </div>

      {/* AI Insights */}
      <AIInsights 
        summary={student.aiSummary} 
        focusPoints={student.aiFocusPoints} 
      />
    </div>
  );
};

export default StudentProfile;
