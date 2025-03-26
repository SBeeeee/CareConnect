export const ReportData = {
  entry: [
    {
      resource: {
        resourceType: "Observation",
        id: "obs1",
        performer: [{ display: "Dr. John Smith" }],
        category: [{ coding: [{ code: "exam" }] }],
        code: { text: "Blood Pressure Test" },
        effectiveDateTime: "2024-03-20T10:30:00Z",
        details: "The blood pressure test was conducted to assess hypertension levels. Systolic: 120 mmHg, Diastolic: 80 mmHg."
      },
    },
    {
      resource: {
        resourceType: "Observation",
        id: "obs2",
        performer: [{ display: "Dr. Emily Johnson" }],
        category: [{ coding: [{ code: "lab" }] }],
        code: { text: "Glucose Test" },
        effectiveDateTime: "2024-03-18T15:00:00Z",
        details: "Fasting glucose level: 95 mg/dL. No signs of diabetes, but follow-up suggested for monitoring."
      },
    },
    {
      resource: {
        resourceType: "Observation",
        id: "obs3",
        performer: [{ display: "Dr. Michael Brown" }],
        category: [{ coding: [{ code: "exam" }] }],
        code: { text: "Cardiac Stress Test" },
        effectiveDateTime: "2024-03-15T09:15:00Z",
        details: "Stress test results indicate normal cardiac function. No abnormalities detected in ECG readings."
      },
    },
    {
      resource: {
        resourceType: "Observation",
        id: "obs4",
        performer: [{ display: "Dr. Lisa Carter" }],
        category: [{ coding: [{ code: "lab" }] }],
        code: { text: "Cholesterol Test" },
        effectiveDateTime: "2024-03-10T14:45:00Z",
        details: "Total cholesterol: 180 mg/dL, LDL: 100 mg/dL, HDL: 60 mg/dL. Levels are within normal range."
      },
    },
    {
      resource: {
        resourceType: "Observation",
        id: "obs5",
        performer: [{ display: "Dr. Robert Wilson" }],
        category: [{ coding: [{ code: "exam" }] }],
        code: { text: "Eye Examination" },
        effectiveDateTime: "2024-03-08T11:20:00Z",
        details: "No signs of cataracts or glaucoma. Vision: 20/20. Recommended follow-up in 1 year."
      },
    },
    {
      resource: {
        resourceType: "Observation",
        id: "obs6",
        performer: [{ display: "Dr. Sophia Martinez" }],
        category: [{ coding: [{ code: "lab" }] }],
        code: { text: "Hemoglobin Test" },
        effectiveDateTime: "2024-03-05T08:10:00Z",
        details: "Hemoglobin levels: 14.2 g/dL. No indications of anemia. Nutritional status is good."
      },
    },
    {
      resource: {
        resourceType: "Observation",
        id: "obs7",
        performer: [{ display: "Dr. Daniel Harris" }],
        category: [{ coding: [{ code: "exam" }] }],
        code: { text: "General Health Checkup" },
        effectiveDateTime: "2024-02-28T13:35:00Z",
        details: "All vital signs are within normal range. No major health concerns detected."
      },
    },
    {
      resource: {
        resourceType: "Observation",
        id: "obs8",
        performer: [{ display: "Dr. Olivia White" }],
        category: [{ coding: [{ code: "lab" }] }],
        code: { text: "Thyroid Function Test" },
        effectiveDateTime: "2024-02-25T16:50:00Z",
        details: "TSH: 2.5 mU/L, T3 & T4 levels normal. No thyroid dysfunction detected."
      },
    },
  ],
};
