// import React from "react";

const Setup = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Setup Page</h1>
      <p className="text-lg mb-4">
        This is a demo setup page. Here you can find instructions on how to set up the application.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Clone the repository from GitHub.</li>
        <li>Install the dependencies using <code>npm install</code>.</li>
        <li>Run the application with <code>npm start</code>.</li>
      </ol>
      <h2 className="text-2xl font-semibold mb-2">Configuration</h2>
      <p className="text-lg mb-4">
        Make sure to configure your environment variables as needed. Refer to the documentation for more details.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Troubleshooting</h2>
      <p className="text-lg">
        If you encounter any issues, please check the FAQ section or reach out to support.
      </p>
    </div>
  );
};

export default Setup;
