import { StudentProfile } from './types';

export const STUDENT_PROFILES: Record<string, StudentProfile> = {
  '1': {
    id: '1',
    name: 'משה כהן',
    grade: 'ח-1',
    riskLevel: 'high',
    kpis: {
      avgGrade: 69.2,
      gradeTrend: 'down',
      totalAbsences: 5,
      behaviorEvents: 3,
    },
    grades: [
      { date: '03/04', subject: 'מתמטיקה', score: 75 },
      { date: '10/04', subject: 'אנגלית', score: 82 },
      { date: '17/04', subject: 'עברית', score: 71 },
      { date: '01/05', subject: 'מתמטיקה', score: 66 },
      { date: '15/05', subject: 'מדעים', score: 70 },
      { date: '01/06', subject: 'מתמטיקה', score: 58 },
      { date: '15/06', subject: 'אנגלית', score: 74 },
    ],
    timeline: [
      { date: '14/04', type: 'behavior', detail: 'הפרעה בשיעור' },
      { date: '22/04', type: 'absence', detail: 'לא מוצדקת' },
      { date: '05/05', type: 'behavior', detail: 'עימות עם תלמיד אחר' },
      { date: '19/05', type: 'absence', detail: 'לא מוצדקת' },
      { date: '02/06', type: 'behavior', detail: 'הפרעה חוזרת' },
      { date: '10/06', type: 'absence', detail: 'לא מוצדקת' },
    ],
    aiSummary: 'משה מציג ירידה מתמשכת בביצועים האקדמיים, עם ירידה בולטת במתמטיקה מ-75 ל-58. במקביל נרשמו 3 אירועי התנהגות ו-3 היעדרויות לא מוצדקות. קיים דפוס מחזורי — אירועי ההתנהגות מרוכזים סביב ימי שלישי וחמישי.',
    aiFocusPoints: [
      'נוכחות: נרשמו 3 היעדרויות לא מוצדקות. נקודת פתיחה טובה — לבדוק האם קיימים קשיים בהגעה לבית הספר.',
      'מתמטיקה: הציונים ירדו בעקביות מ-75 ל-58. כדאי לבחון את חוויית התלמיד בשיעור הספציפי הזה.',
      'חוזקה לחיזוק: ציון האנגלית נשמר יציב יחסית (82→74). ניתן להשתמש בכך כנקודת עוגן חיובית בשיחה.',
    ],
  },
  '2': {
    id: '2',
    name: 'שרה לוי',
    grade: 'ח-2',
    riskLevel: 'medium',
    kpis: {
      avgGrade: 78.5,
      gradeTrend: 'neutral',
      totalAbsences: 2,
      behaviorEvents: 1,
    },
    grades: [
      { date: '05/04', subject: 'מתמטיקה', score: 80 },
      { date: '12/04', subject: 'אנגלית', score: 75 },
      { date: '20/04', subject: 'עברית', score: 82 },
      { date: '03/05', subject: 'מתמטיקה', score: 78 },
      { date: '18/05', subject: 'מדעים', score: 76 },
      { date: '02/06', subject: 'מתמטיקה', score: 79 },
    ],
    timeline: [
      { date: '10/04', type: 'absence', detail: 'מוצדקת (מחלה)' },
      { date: '15/05', type: 'behavior', detail: 'אי הכנת שיעורי בית' },
      { date: '05/06', type: 'absence', detail: 'לא מוצדקת' },
    ],
    aiSummary: 'שרה שומרת על יציבות יחסית בציוניה, אך נרשמה ירידה קלה במקצועות המדעיים. רמת הסיכון בינונית עקב היעדרות לא מוצדקת לאחרונה ואי-התמדה בשיעורי הבית.',
    aiFocusPoints: [
      'התמדה: יש לעקוב אחר הכנת שיעורי הבית במדעים.',
      'נוכחות: בירור סיבת ההיעדרות הלא מוצדקת מתאריך 05/06.',
    ],
  },
  '3': {
    id: '3',
    name: 'דוד אברהם',
    grade: 'ח-1',
    riskLevel: 'low',
    kpis: {
      avgGrade: 85.0,
      gradeTrend: 'up',
      totalAbsences: 1,
      behaviorEvents: 0,
    },
    grades: [
      { date: '03/04', subject: 'מתמטיקה', score: 82 },
      { date: '15/04', subject: 'אנגלית', score: 88 },
      { date: '01/05', subject: 'מתמטיקה', score: 85 },
      { date: '20/05', subject: 'מדעים', score: 90 },
    ],
    timeline: [
      { date: '12/05', type: 'absence', detail: 'מוצדקת' },
    ],
    aiSummary: 'דוד מציג שיפור עקבי והישגים גבוהים. אין אירועי התנהגות חריגים והנוכחות כמעט מלאה.',
    aiFocusPoints: [
      'שימור: המשך עידוד ומתן אתגרים לימודיים נוספים.',
    ],
  },
  '4': {
    id: '4',
    name: 'רחל זיו',
    grade: 'ח-3',
    riskLevel: 'high',
    kpis: {
      avgGrade: 62.4,
      gradeTrend: 'down',
      totalAbsences: 8,
      behaviorEvents: 5,
    },
    grades: [
      { date: '04/04', subject: 'מתמטיקה', score: 65 },
      { date: '18/04', subject: 'אנגלית', score: 60 },
      { date: '05/05', subject: 'מתמטיקה', score: 55 },
      { date: '25/05', subject: 'מדעים', score: 50 },
    ],
    timeline: [
      { date: '10/04', type: 'behavior', detail: 'הפרעה בשיעור' },
      { date: '20/04', type: 'absence', detail: 'לא מוצדקת' },
      { date: '02/05', type: 'behavior', detail: 'עימות מילולי' },
      { date: '15/05', type: 'absence', detail: 'לא מוצדקת' },
      { date: '01/06', type: 'behavior', detail: 'הפרעה חוזרת' },
    ],
    aiSummary: 'רחל נמצאת בסיכון גבוה עקב ריבוי היעדרויות ואירועי התנהגות. קיימת נסיגה לימודית משמעותית בכל המקצועות.',
    aiFocusPoints: [
      'התערבות דחופה: שיחת הורים ויועצת עקב ריבוי אירועי התנהגות.',
      'נוכחות: בניית תוכנית נוכחות אישית.',
    ],
  },
  '5': {
    id: '5',
    name: 'יוסף חדד',
    grade: 'ח-2',
    riskLevel: 'medium',
    kpis: {
      avgGrade: 72.0,
      gradeTrend: 'neutral',
      totalAbsences: 4,
      behaviorEvents: 2,
    },
    grades: [
      { date: '06/04', subject: 'מתמטיקה', score: 70 },
      { date: '20/04', subject: 'אנגלית', score: 75 },
      { date: '10/05', subject: 'מתמטיקה', score: 72 },
    ],
    timeline: [
      { date: '12/04', type: 'absence', detail: 'לא מוצדקת' },
      { date: '05/05', type: 'behavior', detail: 'איחור משמעותי' },
    ],
    aiSummary: 'יוסף מציג ביצועים בינוניים עם נטייה ליציבות. יש לשים לב לאיחורים ולהיעדרויות בודדות שמתחילות להצטבר.',
    aiFocusPoints: [
      'מעקב: ניטור איחורים בבוקר.',
    ],
  },
};

export const MOSHE_COHEN = STUDENT_PROFILES['1'];
