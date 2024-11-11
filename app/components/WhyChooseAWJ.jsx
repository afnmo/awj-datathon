import React from "react";
import { FaLock, FaTools, FaRocket, FaSearch, FaChartBar } from 'react-icons/fa';

const WhyChooseAWJ = ({id}) => {
  return (
    <section id={id} 
    className="py-24 bg-[radial-gradient(ellipse_200%_100%_at_bottom,rgba(200,240,245,1),rgba(245,255,255,0.8))]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl text-center mb-12 font-bold tracking-tighter text-[#010D3E]">
          Why Choose AWJ?
        </h2>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* On-Premises Operations */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-6">
              <FaLock className="w-12 h-12 text-[#0670a8]" />
              <h4 className="text-xl font-semibold text-[#010D3E]">On-Premises Operations</h4>
            </div>
            <p className="text-gray-700">
              Keep your financial data secure and private. AWJ operates locally, minimizing data exposure and ensuring faster access to critical insights.
            </p>
          </div>

          {/* No Fine-Tuning Required */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-6">
              <FaTools className="w-12 h-12 text-[#0670a8]" />
              <h4 className="text-xl font-semibold text-[#010D3E]">No Fine-Tuning Required</h4>
            </div>
            <p className="text-gray-700">
              AWJ is ready to use. Thanks to its function calling capabilities, it adapts to your unique needs without the need for manual adjustments.
            </p>
          </div>

          {/* Optimized for Speed */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-6">
              <FaRocket className="w-12 h-12 text-[#0670a8]" />
              <h4 className="text-xl font-semibold text-[#010D3E]">Optimized for Speed</h4>
            </div>
            <p className="text-gray-700">
              Powered by LLAMA 3.2-90B, AWJ delivers fast, real-time responses while maintaining low memory usage—ideal for businesses seeking efficient, scalable solutions.
            </p>
          </div>

          {/* Accurate, Reference-Based Responses */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-6">
              <FaSearch className="w-12 h-12 text-[#0670a8]" />
              <h4 className="text-xl font-semibold text-[#010D3E]">Accurate, Reference-Based Responses</h4>
            </div>
            <p className="text-gray-700">
              AWJ uses Retrieval Augmented Generation (RAG) to provide trustworthy, citation-backed answers, ensuring data accuracy and reliability.
            </p>
          </div>

          {/* Data-Driven Decision Making */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-6">
              <FaChartBar className="w-12 h-12 text-[#0670a8]" />
              <h4 className="text-xl font-semibold text-[#010D3E]">Data-Driven Decision Making</h4>
            </div>
            <p className="text-gray-700">
              Generate clear, detailed reports and visualizations that help you make informed, data-backed decisions quickly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAWJ;
