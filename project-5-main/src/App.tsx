/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import RiskReport from './components/RiskReport';
import StudentProfile from './components/StudentProfile';
import { STUDENT_PROFILES } from './constants';
import { motion, AnimatePresence } from 'motion/react';
import { StudentProfile as StudentProfileType } from './types';

type View = 'risk-report' | 'student-profile';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('risk-report');
  const [selectedStudent, setSelectedStudent] = useState<StudentProfileType | null>(null);

  const handleSelectStudent = (id: string) => {
    const profile = STUDENT_PROFILES[id];
    if (profile) {
      setSelectedStudent(profile);
      setCurrentView('student-profile');
    }
  };

  const handleBack = () => {
    setCurrentView('risk-report');
    setSelectedStudent(null);
  };

  return (
    <div className="min-h-screen bg-background font-sans" dir="rtl">
      <Header />
      
      <main className="py-8">
        <AnimatePresence mode="wait">
          {currentView === 'risk-report' ? (
            <motion.div
              key="risk-report"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <RiskReport onSelectStudent={handleSelectStudent} />
            </motion.div>
          ) : (
            <motion.div
              key="student-profile"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {selectedStudent && (
                <StudentProfile student={selectedStudent} onBack={handleBack} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-8 text-center text-text-disabled text-xs">
        <p>© 2026 מערכת ניהול פדגוגית חכמה | דמו טכנולוגי</p>
      </footer>
    </div>
  );
}

