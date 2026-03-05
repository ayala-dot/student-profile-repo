import React, { useState, useMemo, useRef } from 'react';
import { StudentProfile as StudentProfileType, GradeData, EventData } from '../types';
import { ArrowRight, Calendar, Download, FileText, Loader2 } from 'lucide-react';
import KPICard from './KPICard';
import GradesChart from './GradesChart';
import TimelineTable from './TimelineTable';
import AIInsights from './AIInsights';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface StudentProfileProps {
  student: StudentProfileType;
  onBack: () => void;
}

type DateRange = '90' | '30' | 'year';

const StudentProfile: React.FC<StudentProfileProps> = ({ student, onBack }) => {
  const [dateRange, setDateRange] = useState<DateRange>('90');
  const [isExporting, setIsExporting] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Helper to parse DD/MM into a Date object
  const parseDate = (dateStr: string) => {
    const [day, month] = dateStr.split('/').map(Number);
    const year = month > 8 ? 2025 : 2026; // Assume school year 2025-2026
    return new Date(year, month - 1, day);
  };

  const filteredData = useMemo(() => {
    const now = new Date(2026, 2, 4); // March 4th, 2026
    let startDate: Date;

    if (dateRange === '30') {
      startDate = new Date(now);
      startDate.setDate(now.getDate() - 30);
    } else if (dateRange === '90') {
      startDate = new Date(now);
      startDate.setDate(now.getDate() - 90);
    } else {
      startDate = new Date(2026, 0, 1); // Start of 2026
    }

    const filterFn = (item: { date: string }) => {
      const itemDate = parseDate(item.date);
      return itemDate >= startDate && itemDate <= now;
    };

    return {
      grades: student.grades.filter(filterFn),
      timeline: student.timeline.filter(filterFn),
    };
  }, [student, dateRange]);

  const handleDownloadPDF = async () => {
    if (!profileRef.current) return;
    
    setIsExporting(true);
    try {
      const element = profileRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#F4F6F8',
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`פרופיל_תלמיד_${student.name.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

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

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
            <Calendar size={18} className="text-text-secondary mr-2" />
            <span className="text-sm font-medium">טווח תאריכים:</span>
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value as DateRange)}
              className="text-sm bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-primary"
            >
              <option value="90">90 ימים אחרונים</option>
              <option value="30">30 ימים אחרונים</option>
              <option value="year">מתחילת השנה</option>
            </select>
          </div>
          
          <button 
            onClick={handleDownloadPDF}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary-dark text-white rounded-lg hover:bg-primary transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExporting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>מכין PDF...</span>
              </>
            ) : (
              <>
                <FileText size={18} />
                <span>הורד PDF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Exportable Content Area */}
      <div ref={profileRef} className="space-y-8 p-4 bg-background rounded-xl">
        {/* Report Header for PDF */}
        <div className="border-b-2 border-primary-dark pb-6">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-primary-dark mb-2">פרופיל תלמיד 360°</h1>
              <div className="flex gap-6 text-lg">
                <p><span className="font-bold">שם התלמיד:</span> {student.name}</p>
                <p><span className="font-bold">כיתה:</span> {student.grade}</p>
              </div>
            </div>
            <div className="text-left text-sm text-text-secondary">
              <p>תאריך הפקה: {new Date().toLocaleDateString('he-IL')}</p>
              <p>מערכת ניהול פדגוגית חכמה</p>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GradesChart data={filteredData.grades} />
          <TimelineTable data={filteredData.timeline} />
        </div>

        {/* AI Insights */}
        <AIInsights 
          summary={student.aiSummary} 
          focusPoints={student.aiFocusPoints} 
        />
      </div>
    </div>
  );
};



export default StudentProfile;
