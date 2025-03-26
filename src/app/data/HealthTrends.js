export const HealthTrends=[
    // BLOOD PRESSURE
    { "resourceType": "Observation", "id": "bp1", "code": { "coding": [{ "code": "85354-9", "display": "Blood Pressure" }] }, "effectiveDateTime": "2024-03-20", "component": [ { "code": { "coding": [{ "code": "8480-6" }] }, "valueQuantity": { "value": 120 } }, { "code": { "coding": [{ "code": "8462-4" }] }, "valueQuantity": { "value": 80 } } ] },
    { "resourceType": "Observation", "id": "bp2", "effectiveDateTime": "2024-03-21", "component": [ { "code": { "coding": [{ "code": "8480-6" }] }, "valueQuantity": { "value": 125 } }, { "code": { "coding": [{ "code": "8462-4" }] }, "valueQuantity": { "value": 82 } } ] },
    { "resourceType": "Observation", "id": "bp3", "effectiveDateTime": "2024-03-22", "component": [ { "code": { "coding": [{ "code": "8480-6" }] }, "valueQuantity": { "value": 130 } }, { "code": { "coding": [{ "code": "8462-4" }] }, "valueQuantity": { "value": 85 } } ] },
    { "resourceType": "Observation", "id": "bp4", "effectiveDateTime": "2024-03-23", "component": [ { "code": { "coding": [{ "code": "8480-6" }] }, "valueQuantity": { "value": 128 } }, { "code": { "coding": [{ "code": "8462-4" }] }, "valueQuantity": { "value": 84 } } ] },
    { "resourceType": "Observation", "id": "bp5", "effectiveDateTime": "2024-03-24", "component": [ { "code": { "coding": [{ "code": "8480-6" }] }, "valueQuantity": { "value": 122 } }, { "code": { "coding": [{ "code": "8462-4" }] }, "valueQuantity": { "value": 80 } } ] },
  
    // GLUCOSE
    { "resourceType": "Observation", "id": "glucose1", "effectiveDateTime": "2024-03-20", "valueQuantity": { "value": 95 }, "code": { "coding": [{ "code": "2339-0", "display": "Glucose" }] } },
    { "resourceType": "Observation", "id": "glucose2", "effectiveDateTime": "2024-03-21", "valueQuantity": { "value": 100 } },
    { "resourceType": "Observation", "id": "glucose3", "effectiveDateTime": "2024-03-22", "valueQuantity": { "value": 110 } },
    { "resourceType": "Observation", "id": "glucose4", "effectiveDateTime": "2024-03-23", "valueQuantity": { "value": 105 } },
    { "resourceType": "Observation", "id": "glucose5", "effectiveDateTime": "2024-03-24", "valueQuantity": { "value": 98 } },
  
    // HEART RATE
    { "resourceType": "Observation", "id": "hr1", "effectiveDateTime": "2024-03-20", "valueQuantity": { "value": 72 }, "code": { "coding": [{ "code": "8867-4", "display": "Heart Rate" }] } },
    { "resourceType": "Observation", "id": "hr2", "effectiveDateTime": "2024-03-21", "valueQuantity": { "value": 76 } },
    { "resourceType": "Observation", "id": "hr3", "effectiveDateTime": "2024-03-22", "valueQuantity": { "value": 80 } },
    { "resourceType": "Observation", "id": "hr4", "effectiveDateTime": "2024-03-23", "valueQuantity": { "value": 78 } },
    { "resourceType": "Observation", "id": "hr5", "effectiveDateTime": "2024-03-24", "valueQuantity": { "value": 75 } },
  
    // BODY TEMPERATURE
    { "resourceType": "Observation", "id": "temp1", "effectiveDateTime": "2024-03-20", "valueQuantity": { "value": 98.6 }, "code": { "coding": [{ "code": "8310-5", "display": "Body Temperature" }] } },
    { "resourceType": "Observation", "id": "temp2", "effectiveDateTime": "2024-03-21", "valueQuantity": { "value": 99.0 } },
    { "resourceType": "Observation", "id": "temp3", "effectiveDateTime": "2024-03-22", "valueQuantity": { "value": 99.5 } },
    { "resourceType": "Observation", "id": "temp4", "effectiveDateTime": "2024-03-23", "valueQuantity": { "value": 98.7 } },
    { "resourceType": "Observation", "id": "temp5", "effectiveDateTime": "2024-03-24", "valueQuantity": { "value": 98.4 } }
  ]
  