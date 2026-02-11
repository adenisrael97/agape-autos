"use client";
import React from 'react';
import Image from 'next/image';

export default function Blog () {
    // ...existing code...
    // Imports
    // import React, { useState } from 'react';
    // import { FaCarBattery, FaBolt, FaTools, FaShoppingCart, FaPaintBrush, FaMicrochip, FaNewspaper } from 'react-icons/fa';

    // Categories and News Cards
    const categories = [
        { label: 'All', icon: <span>📰</span> },
        { label: 'Electric Vehicles', icon: <span>⚡</span> },
        { label: 'Buying Guide', icon: <span>🛒</span> },
        { label: 'Maintenance', icon: <span>🛠️</span> },
        { label: 'Design', icon: <span>🎨</span> },
        { label: 'Technology', icon: <span>💻</span> },
    ];
    const newsCards = [
        {
            title: 'The Rise of Electric Cars',
            category: 'Electric Vehicles',
            img: '/images/bmw/bmw1.avif',
            icon: <span>⚡</span>,
            desc: 'Explore how electric vehicles are changing the automotive landscape and what it means for buyers.'
        },
        {
            title: 'How to Buy Your First Car',
            category: 'Buying Guide',
            img: '/images/honda/honda1.avif',
            icon: <span>🛒</span>,
            desc: 'A step-by-step guide to buying your first car, from research to negotiation.'
        },
        {
            title: 'Maintaining Your Vehicle',
            category: 'Maintenance',
            img: '/images/mercedes/Mercedes1.avif',
            icon: <span>🛠️</span>,
            desc: 'Tips and tricks for keeping your car in top shape and extending its lifespan.'
        },
        {
            title: '2026 Car Design Trends',
            category: 'Design',
            img: '/images/lexus/lexus1.avif',
            icon: <span>🎨</span>,
            desc: 'Discover the latest design innovations in the automotive industry.'
        },
        {
            title: 'Tech Innovations in Cars',
            category: 'Technology',
            img: '/images/toyota/Toyota1.avif',
            icon: <span>💻</span>,
            desc: 'A look at the newest technology features in modern vehicles.'
        },
        {
            title: 'Agape Autos News',
            category: 'All',
            img: '/images/bmw/bmw2.avif',
            icon: <span>📰</span>,
            desc: 'Updates and news from Agape Autos, your trusted dealership.'
        },
        {
            title: 'Electric SUVs: The Future',
            category: 'Electric Vehicles',
            img: '/images/honda/honda2.avif',
            icon: <span>⚡</span>,
            desc: 'Why electric SUVs are becoming the go-to choice for families.'
        },
        {
            title: 'Luxury Car Maintenance',
            category: 'Maintenance',
            img: '/images/mercedes/Mercedes2.avif',
            icon: <span>🛠️</span>,
            desc: 'How to care for your luxury vehicle and keep it running smoothly.'
        },
        {
            title: 'Buying Guide: Used Cars',
            category: 'Buying Guide',
            img: '/images/lexus/lexus2.avif',
            icon: <span>🛒</span>,
            desc: 'Everything you need to know about buying a used car.'
        },
        {
            title: 'Smart Car Tech in 2026',
            category: 'Technology',
            img: '/images/toyota/Toyota2.avif',
            icon: <span>💻</span>,
            desc: 'The rise of smart technology in vehicles and what to expect next.'
        },
    ];

    // State
    const [search, setSearch] = React.useState('');
    const [activeCategory, setActiveCategory] = React.useState('All');
    const filteredCards = newsCards.filter(card =>
        (activeCategory === 'All' || card.category === activeCategory) &&
        (card.title.toLowerCase().includes(search.toLowerCase()) || card.desc.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <section className="w-full">
            <div className="w-full bg-linear-to-br from-gray-700 via-gray-900 to-black py-16 px-4 rounded-2xl shadow-2xl flex flex-col items-center text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-yellow-500 tracking-wide mb-2">BLOG and News</p>
                <p className="text-xl md:text-2xl font-semibold text-white mb-4">Automotive Insights</p>
                <p className="max-w-2xl text-gray-200 text-base md:text-lg font-light mb-8">
                    Stay up to date with the latest trends, news, and expert advice from the world of automobiles. From buying tips and maintenance guides to industry innovations and Agape Autos updates, our blog is your trusted source for all things automotive.
                </p>
                {/* Search and Filter */}
                <div className="w-full max-w-2xl flex flex-col md:flex-row items-center gap-4 mb-8">
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search news..."
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-400 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                        {categories.map(cat => (
                            <button
                                key={cat.label}
                                onClick={() => setActiveCategory(cat.label)}
                                className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 border transition-colors duration-200 ${activeCategory === cat.label ? 'bg-yellow-500 text-black border-yellow-500' : 'bg-gray-800 text-white border-gray-700 hover:bg-yellow-500 hover:text-black'}`}
                            >
                                {cat.icon}
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
                {/* News Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full max-w-6xl mx-auto">
                    {filteredCards.map((card, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-200">
                            <div className="relative w-full h-56">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    {card.icon}
                                    <span className="text-sm font-bold text-gray-700">{card.category}</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2">{card.title}</h3>
                                <p className="text-gray-600 flex-1 mb-4">{card.desc}</p>
                                <button className="mt-auto bg-black text-yellow-500 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors duration-200">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}