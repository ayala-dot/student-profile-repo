import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { GradeData } from '../types';

interface GradesChartProps {
  data: GradeData[];
}

const GradesChart: React.FC<GradesChartProps> = ({ data }) => {
  // Format data for chart
  const chartData = data.map(item => ({
    name: `${item.date} ${item.subject}`,
    score: item.score,
    subject: item.subject,
    date: item.date
  }));

  return (
    <div className="bg-surface p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-6">ציונים לאורך זמן</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#4A5568', fontSize: 12 }}
            />
            <YAxis 
              domain={[0, 100]} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#4A5568', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              formatter={(value: number, name: string, props: any) => [value, props.payload.subject]}
            />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="#1B2A3B" 
              strokeWidth={3} 
              dot={{ r: 6, fill: '#1B2A3B', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GradesChart;
