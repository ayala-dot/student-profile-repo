export interface GradeData {
  date: string;
  subject: string;
  score: number;
}

export interface EventData {
  date: string;
  type: 'behavior' | 'absence';
  detail: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  grade: string;
  riskLevel: 'low' | 'medium' | 'high';
  kpis: {
    avgGrade: number;
    gradeTrend: 'up' | 'down' | 'neutral';
    totalAbsences: number;
    behaviorEvents: number;
  };
  grades: GradeData[];
  timeline: EventData[];
  aiSummary: string;
  aiFocusPoints: string[];
}
