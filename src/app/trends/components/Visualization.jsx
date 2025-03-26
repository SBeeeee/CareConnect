'use client'
import React from 'react'
import BloodPressureChart from './BloodPressureChart';
import GlucoseChart from './GlucoseChart';
import HeartRateChart from './HeartChart';
import TemperatureChart from './TemperatureChart';
import { HealthTrends } from '@/app/data/HealthTrends';


function Visualization() {

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
        <div className="w-full md:w-[48%]">
          <BloodPressureChart data={bloodPressureData} />
        </div>
        <div className="w-full md:w-[48%]">
          <GlucoseChart data={glucoseData} />
        </div>
        <div className="w-full md:w-[48%]">
          <HeartRateChart data={heartRateData} />
        </div>
        <div className="w-full md:w-[48%]">
          <TemperatureChart data={temperatureData} />
        </div>
      </div>
    </div>
  )
}

export default Visualization
