import { FaHandshake, FaRegLightbulb, FaBalanceScale, FaUsers } from 'react-icons/fa';
import Link from 'next/link';

export default function ValueAbout() {
  return (
    <section className="w-full max-w-5xl mt-15 mx-auto my-16 px-4 font-thin">
      <h2 className="text-2xl md:text-3xl font-thin text-yellow-400 mt-20 mb-4 text-center">Our Values</h2>
      <p className="text-gray-700 text-base md:text-lg mb-10 text-center max-w-2xl mx-auto mt-6 font-thin">
        At Agape Autos, our values are the compass that guides every decision and interaction. Rooted in trust, innovation, fairness, and community, these principles shape our culture and ensure we deliver exceptional experiences for every client, every day.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Value Card 1: Trust */}
        <div className="bg-gray-200 rounded-md p-6 flex flex-col items-center text-center shadow-md font-thin">
          <FaHandshake className="text-yellow-500 text-4xl mb-3" />
          <div className="text-lg font-thin text-yellow-600 mb-1">Trust</div>
          <div className="text-gray-600 text-sm font-thin">We build lasting relationships through honesty, transparency, and reliability in all our dealings.</div>
        </div>
        {/* Value Card 2: Innovation */}
        <div className="bg-gray-200 rounded-md p-6 flex flex-col items-center text-center shadow-md font-thin">
          <FaRegLightbulb className="text-yellow-500 text-4xl mb-3" />
          <div className="text-lg font-thin text-yellow-600 mb-1">Innovation</div>
          <div className="text-gray-600 text-sm font-thin">We embrace creativity and forward-thinking solutions to continually improve our services and your experience.</div>
        </div>
        {/* Value Card 3: Fairness */}
        <div className="bg-gray-200 rounded-md p-6 flex flex-col items-center text-center shadow-md font-thin">
          <FaBalanceScale className="text-yellow-500 text-4xl mb-3" />
          <div className="text-lg font-thin text-yellow-600 mb-1">Fairness</div>
          <div className="text-gray-600 text-sm font-thin">We treat everyone with respect and ensure every client receives equitable and just service.</div>
        </div>
        {/* Value Card 4: Community */}
        <div className="bg-gray-200 rounded-md p-6 flex flex-col items-center text-center shadow-md font-thin">
          <FaUsers className="text-yellow-500 text-4xl mb-3" />
          <div className="text-lg font-thin text-yellow-600 mb-1">Community</div>
          <div className="text-gray-600 text-sm font-thin">We foster a sense of belonging and give back to the communities that support us, making a positive impact together.</div>
        </div>
      </div>
      {/* Our Journey Section */}
      <div className="w-full max-w-4xl mx-auto mt-16 bg-black rounded-xl shadow-lg p-8 flex flex-col items-center font-thin">
        <h3 className="text-2xl md:text-3xl font-thin text-yellow-400 mb-4 text-center">Our Journey</h3>
        <p className="text-gray-200 text-base md:text-lg mb-2 text-center max-w-2xl mx-auto font-thin">
          From humble beginnings, Agape Autos has grown into a trusted name in automotive excellence. Our journey is marked by dedication, innovation, and a relentless pursuit of quality. We started with a vision to redefine the car buying experience—making it more transparent, reliable, and customer-focused. Over the years, our commitment to integrity and community has helped us build lasting relationships and deliver exceptional value to every client. Today, we continue to evolve, embracing new technologies and ideas, while staying true to the principles that set us apart.
        </p>
      </div>
      {/* Journey Timeline - Vertical Flow Chart */}
      <div className="w-full max-w-2xl mx-auto mt-8 flex flex-col items-center font-thin">
        <div className="relative w-full flex flex-col items-center">
          {/* Milestone 1 */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center font-thin mb-2 shadow-lg">1</div>
            <div className="text-black text-sm font-thin mb-1">Founded <span className='text-gray-500 text-xs'>(2012)</span></div>
            <div className="text-gray-800 text-xs text-center max-w-xs font-thin mb-2">Started with a vision to redefine car buying with integrity and transparency.</div>
            <div className="w-1 h-8 bg-yellow-400"></div>
          </div>
          {/* Milestone 2 */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center font-thin mb-2 shadow-lg">2</div>
            <div className="text-black text-sm font-thin mb-1">Growth <span className='text-gray-500 text-xs'>(2015)</span></div>
            <div className="text-gray-800 text-xs text-center max-w-xs font-thin mb-2">Expanded our team and services, focusing on reliability and customer satisfaction.</div>
            <div className="w-1 h-8 bg-yellow-400"></div>
          </div>
          {/* Milestone 3 */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center font-thin mb-2 shadow-lg">3</div>
            <div className="text-black text-sm font-thin mb-1">Innovation <span className='text-gray-500 text-xs'>(2018)</span></div>
            <div className="text-gray-800 text-xs text-center max-w-xs font-thin mb-2">Embraced new technologies to enhance the client experience and streamline operations.</div>
            <div className="w-1 h-8 bg-yellow-400"></div>
          </div>
          {/* Milestone 4 */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center font-thin mb-2 shadow-lg">4</div>
            <div className="text-black text-sm font-thin mb-1">Community <span className='text-gray-500 text-xs'>(2026)</span></div>
            <div className="text-gray-800 text-xs text-center max-w-xs font-thin mb-2">Built strong relationships and gave back to the community, making a positive impact.</div>
          </div>
        </div>
      </div>
      {/* Meet Our Team Section */}
      <div className="w-full max-w-5xl mx-auto mt-20 mb-10 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-thin text-yellow-400 mb-4 text-center">Meet Our Team</h2>
        <p className="text-gray-700 text-base md:text-lg mb-10 text-center max-w-2xl mx-auto font-thin">
          Our dedicated team brings together expertise, passion, and a commitment to excellence. Get to know the people who drive Agape Autos forward every day.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {/* Team Member Cards */}
          {[
            {
              name: "Sophia Williams",
              role: "CEO",
              desc: "Visionary leader, shaping our strategy and culture.",
              instagram: "#",
              linkedin: "#",
            },
            {
              name: "James Lee",
              role: "Head of Sales",
              desc: "Connecting clients with their dream cars.",
              instagram: "#",
              linkedin: "#",
            },
            {
              name: "Priya Patel",
              role: "Marketing Director",
              desc: "Crafting our brand and outreach.",
              instagram: "#",
              linkedin: "#",
            },
            {
              name: "Michael Chen",
              role: "Lead Technician",
              desc: "Ensuring every vehicle meets our high standards.",
              instagram: "#",
              linkedin: "#",
            },
            {
              name: "Emily Johnson",
              role: "Customer Relations",
              desc: "Delivering exceptional service and support.",
              instagram: "#",
              linkedin: "#",
            },
            {
              name: "David Brown",
              role: "Finance Manager",
              desc: "Helping clients find the best financial solutions.",
              instagram: "#",
              linkedin: "#",
            },
          ].map((member, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl shadow-lg p-6 flex flex-col items-center text-center font-thin">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xl font-thin mb-4">
                {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
              </div>
              <div className="text-lg text-black font-thin mb-1">{member.name}</div>
              <div className="text-sm text-yellow-600 font-thin mb-1">{member.role}</div>
              <div className="text-xs text-gray-700 font-thin mb-3">{member.desc}</div>
              <div className="flex gap-4 mt-2">
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.974.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.981.981-1.264 2.093-1.323 3.374C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.946.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.281.072-1.69.072-4.946V9.333c0-3.256-.013-3.665-.072-4.946-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.602 2.001 3.602 4.601v5.595z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Experience Agape Autos Section */}
      <div className="w-full max-w-3xl mx-auto mt-16 mb-10 flex flex-col items-center bg-linear-to-br from-gray-700 via-gray-900 to-black rounded-2xl shadow-2xl p-10">
        <h2 className="text-2xl md:text-3xl font-thin text-yellow-400 mb-4 text-center">Ready to Experience Agape Autos?</h2>
        <p className="text-gray-200 text-base md:text-lg mb-8 text-center max-w-2xl mx-auto font-thin">
          Discover a new standard in automotive excellence. Whether you&apos;re searching for your next vehicle or want to visit our showroom, our team is here to help you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/Inventory" className="px-7 py-3 rounded-full bg-linear-to-r from-yellow-400 via-yellow-500 to-red-500 text-black font-thin text-base shadow-lg hover:scale-105 hover:from-yellow-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 border border-yellow-400">
            Browse Inventory
          </Link>
          <Link href="/contact" className="px-7 py-3 rounded-full bg-linear-to-r from-gray-200 via-gray-400 to-black text-black font-thin text-base shadow-lg hover:scale-105 hover:from-gray-300 hover:to-black focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300 border border-gray-400">
            Visit Showroom
          </Link>
        </div>
      </div>
    </section>
  );
}
