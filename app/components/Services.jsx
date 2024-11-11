import React from "react";
import { FaChartLine, FaTable, FaChartArea, FaTools } from "react-icons/fa";

const Services = ({ id }) => {
  const services = [
    {
      title: "Instant Financial Insights",
      description:
        "Get answers to any financial question instantly, from company performance over the past quarter to detailed investment analytics.",
      icon: <FaChartLine className="w-10 h-10 text-[#0670a8]" />,
    },
    {
      title: "Dynamic Data Tables",
      description:
        "View comprehensive data tables that break down financial metrics for easy and clear analysis.",
      icon: <FaTable className="w-10 h-10 text-[#0670a8]" />,
    },
    {
      title: "Real-Time Charts",
      description:
        "AWJ generates interactive Line, Composed, and Area charts to help visualize your data and identify trends.",
      icon: <FaChartArea className="w-10 h-10 text-[#0670a8]" />,
    },
    {
      title: "Highly Customizable",
      description:
        "Tailor AWJ to your specific financial needs, whether you’re managing a large portfolio, conducting market research, or analyzing quarterly results.",
      icon: <FaTools className="w-10 h-10 text-[#0670a8]" />,
    },
  ];

  return (
    <section
      id={id}
      
      className="py-24 bg-[radial-gradient(ellipse_200%_100%_at_top,rgba(200,240,245,1),rgba(245,255,255,0.8))]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl text-center mb-12 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text pb-2 pt-2">
          What We Offer{" "}
        </h2>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-1 ">
                  <h3 className="text-2xl font-semibold text-[#010D3E] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
                <div className="ml-4">{service.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
