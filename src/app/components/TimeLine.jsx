import React from 'react';
import { FaUserPlus, FaSignInAlt, FaClipboardList, FaChartLine } from "react-icons/fa"; // Import necessary icons
import "../globals.css";

const steps = [
  {
    id: 1,
    title: "Step 1: Sign Up",
    description: "Create an account to access the platform. Use your email and set a secure password.",
    icon: <FaUserPlus size={30} color="white" />,
    position: "left",
  },
  {
    id: 2,
    title: "Step 2: Log In",
    description: "Sign in using your registered credentials to access your health data.",
    icon: <FaSignInAlt size={30} color="white" />,
    position: "right",
  },
  {
    id: 3,
    title: "Step 3: View Health Records",
    description: "Access your latest lab reports and health metrics, all in one place.",
    icon: <FaClipboardList size={30} color="white" />,
    position: "left",
  },
  {
    id: 4,
    title: "Step 4: Visualize Trends",
    description: "Monitor your health trends with real-time graphs for Temperature, SP02, Heart Rate, and more.",
    icon: <FaChartLine size={30} color="white" />,
    position: "right",
  },
];

function TimeLine() {
  return (
    <div>
    <h1 className="text-4xl font-bold text-slate-900 text-center mt-10 mb-2">Steps To Follow </h1>
    <div className="timeline relative max-w-[1200px] mx-auto my-2
      after:content-[''] after:absolute after:w-[6px] after:h-full 
      after:bg-black after:top-0 after:left-1/2 after:-ml-[3px] after:z-[-1]">
      
      {steps.map((step) => (
        <div
          key={step.id}
          className={`container py-[10px] px-[50px] relative w-[50%] ${
            step.position === "left" ? "left-0" : "left-[50%]"
          }`}
        >
          <div 
            className={`absolute w-[40px] h-[40px] flex items-center justify-center rounded-full bg-red-500 text-white shadow-lg 
              top-[28px] z-[10] ${step.position === "left" ? "right-[-20px]" : "left-[-20px]"}`}
          >
            {step.icon}
          </div>

          <div className="px-[20px] py-[30px] relative rounded-2xl bg-blue-200 shadow-md">
            <h3 className="font-bold text-lg">{step.title}</h3>
            <p>{step.description}</p>
            <span className={step.position === "left" ? "left-container-arrow" : "right-container-arrow"}></span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default TimeLine;
