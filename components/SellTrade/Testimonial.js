"use client";
import Link from "next/link";





import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './testimonial-swiper.css';
import { UserCircleIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Chinedu Okafor',
    job: 'Software Engineer',
    text: 'Agape Autos made selling my car so easy! The process was fast and transparent. Highly recommended.',
    icon: <UserCircleIcon className="w-10 h-10 text-yellow-500 mx-auto mb-2" />,
  },
  {
    name: 'Aisha Bello',
    job: 'Banker',
    text: 'I traded in my old car and got a great deal. The staff were friendly and professional.',
    icon: <UserCircleIcon className="w-10 h-10 text-yellow-500 mx-auto mb-2" />,
  },
  {
    name: 'Emeka Umeh',
    job: 'Entrepreneur',
    text: 'Best value for my car and no stress at all. I will definitely use Agape Autos again.',
    icon: <BriefcaseIcon className="w-10 h-10 text-yellow-500 mx-auto mb-2" />,
  },
  {
    name: 'Ngozi Nwosu',
    job: 'Doctor',
    text: 'The trade-in process was smooth and I found my dream car. Thank you Agape Autos!',
    icon: <UserCircleIcon className="w-10 h-10 text-yellow-500 mx-auto mb-2" />,
  },
  {
    name: 'Tunde Balogun',
    job: 'Civil Engineer',
    text: 'Very professional team and excellent customer service. I got a fair price for my car.',
    icon: <BriefcaseIcon className="w-10 h-10 text-yellow-500 mx-auto mb-2" />,
  },
  {
    name: 'Funke Adeyemi',
    job: 'Fashion Designer',
    text: 'I loved how easy it was to sell my car. The staff explained everything clearly.',
    icon: <UserCircleIcon className="w-10 h-10 text-yellow-500 mx-auto mb-2" />,
  },
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="pb-12!"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center h-full animate-fade-in">
              {t.icon}
              <p className="text-gray-700 mb-4">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-2 mt-auto">
                <span className="font-bold text-gray-900">{t.name}</span>
                <span className="text-xs text-gray-500">• {t.job}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
      <Link
        href="/contact"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 text-sm rounded-full shadow-md transition-colors duration-200 min-w-30 flex items-center justify-center gap-1 mx-auto"
      >
        Contact Us
      </Link>
      <Link
        href="/Inventory"
        className="bg-black hover:bg-gray-800 text-white font-semibold px-4 py-2 text-sm rounded-full shadow-md transition-colors duration-200 min-w-30 flex items-center justify-center gap-1 mx-auto"
      >
        View Inventory
      </Link>
    </div>
    </div>
  );
}
