import React from 'react';

const ReportDownloadButton = () => {
  const handleDownload = (format) => {
    console.log(`Downloading report in ${format} format.`);
    // Add logic for generating and downloading reports
  };

  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => handleDownload('CSV')}
        className="bg-[#2c4a7c] text-white px-6 py-3 rounded hover:bg-[#4d7cc7]"
      >
        Download CSV
      </button>
      <button
        onClick={() => handleDownload('PDF')}
        className="bg-[#2c4a7c] text-white px-6 py-3 rounded hover:bg-[#4d7cc7]"
      >
        Download PDF
      </button>
    </div>
  );
};

export default ReportDownloadButton;
