import React from "react";

function Student(props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Student Information
      </h2>

      <p className="text-gray-700 mb-2">
        <strong className="text-gray-900">Name:</strong> {props.name}
      </p>

      <p className="text-gray-700 mb-2">
        <strong className="text-gray-900">Roll No:</strong> {props.rollNo}
      </p>

      <p className="text-gray-700 mb-2">
        <strong className="text-gray-900">Course:</strong> {props.course}
      </p>

      <p className="text-gray-700">
        <strong className="text-gray-900">Marks:</strong> {props.marks}
      </p>
    </div>
  );
}

export default Student;