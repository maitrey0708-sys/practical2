import React from "react";
import Student from "./components/Student";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Student Details
      </h1>

      <div className="space-y-4 max-w-2xl mx-auto">
        <Student
          name="Rahul Kumar"
          rollNo="101"
          course="BCA"
          marks="85%"
        />

        <Student
          name="Priya Singh"
          rollNo="102"
          course="BCA"
          marks="92%"
        />

        <Student
          name="Amit Sharma"
          rollNo="103"
          course="BCA"
          marks="78%"
        />
      </div>
    </div>
  );
}

export default App;