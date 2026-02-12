
import React from "react";
import { FaCalendarAlt, FaUsers, FaSmile, FaGlobe } from "react-icons/fa";

const stats = [
  {
    icon: FaCalendarAlt,
    label: "Years in Business",
    value: "10+",
  },
  {
    icon: FaUsers,
    label: "Happy Clients",
    value: "5,000+",
  },
  {
    icon: FaSmile,
    label: "Satisfaction Rate",
    value: "98%",
  },
  {
    icon: FaGlobe,
    label: "Countries Served",
    value: "50+",
  },
];

const HeroAbout = () => (
  <section className="relative bg-gray-900 text-white min-h-screen px-4 py-24 flex flex-col items-center justify-center overflow-hidden">
    {/* Decorative background */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gray-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-800/20 rounded-full blur-2xl" />
    </div>

    {/* Main Content as Cards */}
    <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {/* Card 1: Our Story */}
      <div className="bg-[#18181b] rounded-md shadow-xl p-4 flex flex-col items-center text-center hover:shadow-yellow-400/20 transition-shadow">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2 tracking-tight drop-shadow">Our Story</h2>
        <p className="text-sm text-gray-400 leading-relaxed font-light">
          Agape Autos was founded with a vision to transform the automotive experience. What began as a small team of passionate car enthusiasts has grown into a trusted name, known for integrity, innovation, and a relentless commitment to our clients.
        </p>
      </div>
      {/* Card 2: Driven By Excellence */}
      <div className="bg-[#18181b] rounded-md shadow-xl p-4 flex flex-col items-center text-center hover:shadow-yellow-400/20 transition-shadow">
        <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-tight">Driven By Excellence</h3>
        <p className="text-sm text-gray-400 leading-relaxed font-light">
          Our journey is defined by our pursuit of excellence in every aspect of our business. We believe in building lasting relationships, delivering exceptional service, and exceeding expectations at every turn.
        </p>
      </div>
      {/* Card 3: Our Growth */}
      <div className="bg-[#18181b] rounded-md shadow-xl p-4 flex flex-col items-center text-center hover:shadow-yellow-400/20 transition-shadow">
        <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-tight">Our Growth</h3>
        <p className="text-sm text-gray-400 leading-relaxed font-light">
          From our humble beginnings to serving clients in over 50 countries, our story is one of growth, dedication, and a passion for making a difference. We are proud of our achievements and grateful for the trust our clients place in us every day.
        </p>
      </div>
    </div>

    {/* Stats Cards */}
    <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-[#232326] border border-gray-800 rounded-md p-4 flex flex-col items-center shadow-md hover:scale-105 transition-transform duration-300 group"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400/20 mb-2 group-hover:bg-yellow-400/40 transition-colors">
              <Icon className="text-lg text-yellow-400 drop-shadow" />
            </span>
            <div className="text-xl md:text-2xl font-bold mb-1 text-yellow-400 drop-shadow-lg">{stat.value}</div>
            <div className="text-gray-300 text-base font-medium tracking-wide">{stat.label}</div>
          </div>
        );
      })}
    </div>

    
  </section>
);

export default HeroAbout;