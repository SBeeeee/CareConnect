export const ReportData = {
    resourceType: "Bundle",
    type: "collection",
    entry: [
      {
        resource: {
          resourceType: "Patient",
          id: "p1",
          name: [{ use: "official", family: "Chalmers", given: ["Peter", "James"] }],
          gender: "male",
          birthDate: "1974-12-25"
        }
      },
      {
        resource: {
          resourceType: "Observation",
          id: "obs1",
          status: "final",
          category: [{ coding: [{ system: "http://hl7.org/fhir/observation-category", code: "laboratory" }] }],
          code: { text: "Complete Blood Count" },
          subject: { reference: "Patient/p1" },
          effectiveDateTime: "2024-03-10",
          performer: [{ display: "Dr. Sarah Watson" }],
          valueString: "All values normal",
          note: [{ text: "The Complete Blood Count (CBC) measures red cells, white cells, hemoglobin, hematocrit, and platelets to detect disorders like anemia or infection." }]
        }
      },
  
      {
        resource: {
          resourceType: "Patient",
          id: "p2",
          name: [{ use: "official", family: "Wilson", given: ["Emma"] }],
          gender: "female",
          birthDate: "1990-08-15"
        }
      },
      {
        resource: {
          resourceType: "Observation",
          id: "obs2",
          status: "final",
          category: [{ coding: [{ system: "http://hl7.org/fhir/observation-category", code: "exam" }] }],
          code: { text: "General Health Checkup" },
          subject: { reference: "Patient/p2" },
          effectiveDateTime: "2024-03-12",
          performer: [{ display: "Dr. John Doe" }],
          valueString: "Mild vitamin D deficiency",
          note: [{ text: "Routine physical examination includes blood pressure, heart rate, lung exam, and basic screening tests to assess overall health." }]
        }
      },
  
      {
        resource: {
          resourceType: "Patient",
          id: "p3",
          name: [{ use: "official", family: "Brown", given: ["Liam"] }],
          gender: "male",
          birthDate: "1988-04-22"
        }
      },
      {
        resource: {
          resourceType: "Observation",
          id: "obs3",
          status: "final",
          category: [{ coding: [{ system: "http://hl7.org/fhir/observation-category", code: "laboratory" }] }],
          code: { text: "Lipid Profile" },
          subject: { reference: "Patient/p3" },
          effectiveDateTime: "2024-03-14",
          performer: [{ display: "Dr. Olivia Smith" }],
          valueString: "High LDL cholesterol",
          note: [{ text: "Lipid profile test measures cholesterol levels, including LDL, HDL, and triglycerides, to assess heart disease risk." }]
        }
      },
  
      {
        resource: {
          resourceType: "Patient",
          id: "p4",
          name: [{ use: "official", family: "Martinez", given: ["Sophia"] }],
          gender: "female",
          birthDate: "1995-11-02"
        }
      },
      {
        resource: {
          resourceType: "Observation",
          id: "obs4",
          status: "final",
          category: [{ coding: [{ system: "http://hl7.org/fhir/observation-category", code: "exam" }] }],
          code: { text: "Orthopedic Evaluation" },
          subject: { reference: "Patient/p4" },
          effectiveDateTime: "2024-03-15",
          performer: [{ display: "Dr. Alan Ray" }],
          valueString: "Minor posture correction required",
          note: [{ text: "Orthopedic evaluation assesses bones, joints, and muscles to diagnose conditions like arthritis, fractures, or posture issues." }]
        }
      },
  
      {
        resource: {
          resourceType: "Patient",
          id: "p5",
          name: [{ use: "official", family: "Johnson", given: ["Noah"] }],
          gender: "male",
          birthDate: "1992-06-30"
        }
      },
      {
        resource: {
          resourceType: "Observation",
          id: "obs5",
          status: "final",
          category: [{ coding: [{ system: "http://hl7.org/fhir/observation-category", code: "laboratory" }] }],
          code: { text: "Thyroid Function Test" },
          subject: { reference: "Patient/p5" },
          effectiveDateTime: "2024-03-16",
          performer: [{ display: "Dr. Priya Sharma" }],
          valueString: "TSH slightly elevated",
          note: [{ text: "Thyroid function test evaluates hormone levels (TSH, T3, T4) to diagnose hypothyroidism or hyperthyroidism." }]
        }
      }
    ]
  };
  