'use client'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BloodPressureChart({ data }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-2xl">
      <h2 className="text-xl font-semibold mb-4">Blood Pressure</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="systolic" stroke="#2563eb" strokeWidth={2} />
          <Line type="monotone" dataKey="diastolic" stroke="#f87171" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
