'use client'
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import BloodPressureChart from './BloodPressureChart';
import GlucoseChart from './GlucoseChart';
import HeartRateChart from './HeartChart';
import TemperatureChart from './TemperatureChart';
import { HealthTrends } from '@/app/data/HealthTrends';

function Visualization() {
  const bpRef = useRef(null);
  const glucoseRef = useRef(null);
  const heartRateRef = useRef(null);
  const temperatureRef = useRef(null);

  const downloadChart = (ref, filename) => {
    if (ref.current) {
      html2canvas(ref.current).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `${filename}.png`;
        link.click();
      });
    }
  };

  const processBloodPressure = () => {
    return HealthTrends
      .filter((d) => d.component && d.component.length === 2)
      .map((d) => ({
        date: d.effectiveDateTime,
        systolic: d.component[0].valueQuantity.value,
        diastolic: d.component[1].valueQuantity.value,
      }));
  };

  const processGlucose = () => {
    return HealthTrends
      .filter((d) => d.id?.startsWith("glucose"))
      .map((d) => ({
        date: d.effectiveDateTime,
        glucose: d.valueQuantity.value,
      }));
  };

  const processHeartRate = () => {
    return HealthTrends
      .filter((d) => d.id?.startsWith("hr"))
      .map((d) => ({
        date: d.effectiveDateTime,
        heartRate: d.valueQuantity?.value,
      }));
  };

  const processTemperature = () => {
    return HealthTrends
      .filter((d) => d.id?.startsWith("temp"))
      .map((d) => ({
        date: d.effectiveDateTime,
        temperature: d.valueQuantity.value,
      }));
  };

  const bloodPressureData = processBloodPressure();
  const glucoseData = processGlucose();
  const heartRateData = processHeartRate();
  const temperatureData = processTemperature();

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Health Trends</h1>
      
      {/* Tables */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Blood Pressure Data</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Systolic</th>
              <th className="border px-4 py-2">Diastolic</th>
            </tr>
          </thead>
          <tbody>
            {bloodPressureData.map((d, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{d.date}</td>
                <td className="border px-4 py-2">{d.systolic}</td>
                <td className="border px-4 py-2">{d.diastolic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Glucose Data</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Glucose</th>
            </tr>
          </thead>
          <tbody>
            {glucoseData.map((d, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{d.date}</td>
                <td className="border px-4 py-2">{d.glucose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Heart Rate Data</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Heart Rate</th>
            </tr>
          </thead>
          <tbody>
            {heartRateData.map((d, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{d.date}</td>
                <td className="border px-4 py-2">{d.heartRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Temperature Data</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Temperature</th>
            </tr>
          </thead>
          <tbody>
            {temperatureData.map((d, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{d.date}</td>
                <td className="border px-4 py-2">{d.temperature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Charts */}
      <div className="flex flex-wrap gap-8">
        <div className="w-full md:w-[48%] p-4 rounded-lg" ref={bpRef}>
          <BloodPressureChart data={bloodPressureData} />
        </div>
        <div className="w-full md:w-[48%] p-4 rounded-lg" ref={glucoseRef}>
          <GlucoseChart data={glucoseData} />
        </div>
        <div className="w-full md:w-[48%] p-4 rounded-lg" ref={heartRateRef}>
          <HeartRateChart data={heartRateData} />
        </div>
        <div className="w-full md:w-[48%] p-4 rounded-lg" ref={temperatureRef}>
          <TemperatureChart data={temperatureData} />
        </div>
      </div>
    </div>
  );
}

export default Visualization;
