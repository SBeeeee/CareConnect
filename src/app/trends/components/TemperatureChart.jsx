'use client'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function TemperatureChart({ data }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-2xl">
      <h2 className="text-xl font-semibold mb-4">Temperature</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="temperature" stroke="#3b82f6" fill="#bfdbfe" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
