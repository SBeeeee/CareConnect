'use client'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function GlucoseChart({ data }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Glucose Level</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="glucose" stroke="#22c55e" fill="#bbf7d0" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
