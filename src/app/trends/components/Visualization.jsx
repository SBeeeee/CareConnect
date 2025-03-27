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
        heartRate: d.valueQuantity.value,
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
      <div className="flex flex-wrap gap-8">
        <div className="w-full md:w-[48%]  p-4  rounded-lg" ref={bpRef}>
          <BloodPressureChart data={bloodPressureData} />
          <button 
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
            onClick={() => downloadChart(bpRef, 'BloodPressureChart')}>
            Download
          </button>
        </div>

        <div className="w-full md:w-[48%]  p-4  rounded-lg" ref={glucoseRef}>
          <GlucoseChart data={glucoseData} />
          <button 
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
            onClick={() => downloadChart(glucoseRef, 'GlucoseChart')}>
            Download
          </button>
        </div>

        <div className="w-full md:w-[48%] p-4  rounded-lg" ref={heartRateRef}>
          <HeartRateChart data={heartRateData} />
          <button 
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
            onClick={() => downloadChart(heartRateRef, 'HeartRateChart')}>
            Download
          </button>
        </div>

        <div className="w-full md:w-[48%] p-4 rounded-lg" ref={temperatureRef}>
          <TemperatureChart data={temperatureData} />
          <button 
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
            onClick={() => downloadChart(temperatureRef, 'TemperatureChart')}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Visualization;
