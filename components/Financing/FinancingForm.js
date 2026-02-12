"use client";

import { FaRegCreditCard } from "react-icons/fa";
import { useState } from "react";
import { CheckCircleIcon, CurrencyDollarIcon, DocumentTextIcon, BanknotesIcon, ArrowTrendingDownIcon, AdjustmentsHorizontalIcon, TagIcon } from "@heroicons/react/24/solid";

function FinancingInfo() {
    return (
        <div className="bg-black p-8 rounded-2xl mb-10 shadow-2xl flex flex-col items-center text-center text-white relative overflow-hidden border border-gold-400">
            <div className="flex items-center gap-3 mb-4">
                <FaRegCreditCard className="text-gold-400 text-4xl" />
                <span className="text-3xl font-extrabold tracking-wide text-gold-400">Financing</span>
            </div>
            <h2 className="text-2xl font-thin mb-3 text-white drop-shadow-lg uppercase tracking-tight">Professional Auto Financing</h2>
            <p className="text-lg font-light text-gray-200 max-w-2xl mx-auto mb-2">Unlock flexible, transparent, and competitive financing options. Our process is designed for your convenience, with expert support every step of the way. Get pre-approved and drive your dream car with confidence.</p>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-400 opacity-10 rounded-full blur-2xl" />
        </div>
    );
}



function PaymentCalculator() {
    // State
    const [vehiclePrice, setVehiclePrice] = useState(35000);
    const [downPayment, setDownPayment] = useState(5000);
    const [interestRate, setInterestRate] = useState(5.5);
    const [tradeIn, setTradeIn] = useState(0);
    const [loanTerm, setLoanTerm] = useState(60);

    // Calculation
    const principal = Math.max(vehiclePrice - downPayment - tradeIn, 0);
    const monthlyRate = interestRate / 100 / 12;
    const monthlyPayment = loanTerm > 0 && monthlyRate > 0
        ? (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm))
        : 0;
    const totalPayment = monthlyPayment * loanTerm;
    const loanTerms = [24, 36, 48, 60, 72, 84];

    // UI
    return (
        <div className="flex flex-col lg:flex-row gap-8 w-full bg-linear-to-br from-blue-950 via-gray-900 to-gray-800 rounded-2xl p-4 md:p-8">
            {/* Calculator Card */}
            <div className="flex-1 bg-gray-900/80 rounded-2xl shadow-2xl p-6 md:p-10 border border-gold-400 min-w-[320px] max-w-xl w-full mx-auto lg:mx-0 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6 text-center tracking-tight">Payment Calculator</h3>
                {/* Vehicle Price */}
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-white font-semibold flex items-center gap-2"><TagIcon className="w-5 h-5 text-gold-400" /> Vehicle Price</label>
                    <div className="flex items-center gap-3">
                        <div className="relative w-32">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gold-400">
                                <CurrencyDollarIcon className="w-5 h-5" />
                            </span>
                            <input
                                type="number"
                                min={0}
                                max={200000}
                                value={vehiclePrice}
                                onChange={e => setVehiclePrice(Number(e.target.value))}
                                className="w-full pl-8 pr-2 py-1 rounded bg-gray-900 text-white border border-gold-400 focus:outline-none"
                            />
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={200000}
                            step={500}
                            value={vehiclePrice}
                            onChange={e => setVehiclePrice(Number(e.target.value))}
                            className="flex-1 accent-gold-400"
                        />
                    </div>
                </div>
                {/* Down Payment */}
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-white font-semibold flex items-center gap-2"><BanknotesIcon className="w-5 h-5 text-gold-400" /> Down Payment</label>
                    <div className="flex items-center gap-3">
                        <div className="relative w-32">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gold-400">
                                <BanknotesIcon className="w-5 h-5" />
                            </span>
                            <input
                                type="number"
                                min={0}
                                max={vehiclePrice}
                                value={downPayment}
                                onChange={e => setDownPayment(Number(e.target.value))}
                                className="w-full pl-8 pr-2 py-1 rounded bg-gray-900 text-white border border-gold-400 focus:outline-none"
                            />
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={vehiclePrice}
                            step={500}
                            value={downPayment}
                            onChange={e => setDownPayment(Number(e.target.value))}
                            className="flex-1 accent-gold-400"
                        />
                    </div>
                </div>
                {/* Interest Rate */}
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-white font-semibold flex items-center gap-2"><ArrowTrendingDownIcon className="w-5 h-5 text-gold-400" /> Interest Rate (%)</label>
                    <div className="flex items-center gap-3">
                        <div className="relative w-32">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gold-400">
                                <ArrowTrendingDownIcon className="w-5 h-5" />
                            </span>
                            <input
                                type="number"
                                min={0}
                                max={25}
                                step={0.01}
                                value={interestRate}
                                onChange={e => setInterestRate(Number(e.target.value))}
                                className="w-full pl-8 pr-2 py-1 rounded bg-gray-900 text-white border border-gold-400 focus:outline-none"
                            />
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={25}
                            step={0.01}
                            value={interestRate}
                            onChange={e => setInterestRate(Number(e.target.value))}
                            className="flex-1 accent-gold-400"
                        />
                    </div>
                </div>
                {/* Trade-In Value */}
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-white font-semibold flex items-center gap-2"><AdjustmentsHorizontalIcon className="w-5 h-5 text-gold-400" /> Trade-In Value</label>
                    <div className="flex items-center gap-3">
                        <div className="relative w-32">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gold-400">
                                <AdjustmentsHorizontalIcon className="w-5 h-5" />
                            </span>
                            <input
                                type="number"
                                min={0}
                                max={vehiclePrice}
                                value={tradeIn}
                                onChange={e => setTradeIn(Number(e.target.value))}
                                className="w-full pl-8 pr-2 py-1 rounded bg-gray-900 text-white border border-gold-400 focus:outline-none"
                            />
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={vehiclePrice}
                            step={500}
                            value={tradeIn}
                            onChange={e => setTradeIn(Number(e.target.value))}
                            className="flex-1 accent-gold-400"
                        />
                    </div>
                </div>
                {/* Loan Term */}
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-white font-semibold">Loan Term (months)</label>
                    <div className="flex flex-wrap gap-2">
                        {loanTerms.map(term => (
                            <button
                                key={term}
                                type="button"
                                onClick={() => setLoanTerm(term)}
                                className={`px-4 py-2 rounded font-bold border transition-colors duration-150 ${loanTerm === term ? 'bg-gold-400 text-yellow-600 border-gold-400' : 'bg-gray-900 text-white border-gray-700 hover:bg-gold-400 hover:text-white'}`}
                            >
                                {term}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Apply Button */}
                <button className="w-full mt-6 py-3 rounded-xl bg-gold-400 text-white font-extrabold text-lg shadow-md hover:bg-gold-500 transition-colors duration-150 flex items-center justify-center gap-2">
                    <CheckCircleIcon className="w-6 h-6 text-white" /> Apply for Pre-Approval
                </button>
            </div>

            {/* Right Side: Cards */}
            <div className="flex flex-col gap-6 flex-1 w-full max-w-xl mx-auto lg:w-96 xl:w-120 lg:mx-0">
                {/* Estimated Payment Card */}
                <div className="bg-gray-800/90 rounded-2xl p-8 text-white shadow-xl flex flex-col items-center border border-gold-500 w-full min-h-44 backdrop-blur-sm">
                    <CurrencyDollarIcon className="w-10 h-10 text-gold-400 mb-2" />
                    <p className="text-lg font-bold mb-1">Estimated Monthly Payment</p>
                    <p className="text-5xl font-extrabold mb-2">${monthlyPayment ? monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 2}) : '0.00'}</p>
                    <p className="text-base text-white">Total: ${totalPayment ? totalPayment.toLocaleString(undefined, {maximumFractionDigits: 2}) : '0.00'}</p>
                </div>
                {/* Loan Breakdown Card */}
                <div className="bg-gray-800/90 rounded-2xl p-8 text-white shadow-xl border border-gold-500 w-full min-h-64 flex flex-col justify-between lg:self-stretch lg:h-full backdrop-blur-sm">
                    <div className="h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <DocumentTextIcon className="w-8 h-8 text-gold-400" />
                            <h4 className="text-xl font-bold text-gold-400">Loan Breakdown</h4>
                        </div>
                        <div className="flex flex-wrap justify-between text-base mb-2 text-white/90">
                            <span>Vehicle Price:</span>
                            <span>${vehiclePrice.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-wrap justify-between text-base mb-2 text-white/90">
                            <span>Down Payment:</span>
                            <span>${downPayment.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-wrap justify-between text-base mb-2 text-white/90">
                            <span>Trade-In Value:</span>
                            <span>${tradeIn.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-wrap justify-between text-base mb-2 text-white/90">
                            <span>Loan Amount:</span>
                            <span>${principal.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                        </div>
                        <div className="flex flex-wrap justify-between text-base mb-2 text-white/90">
                            <span>Interest Rate:</span>
                            <span>{interestRate}%</span>
                        </div>
                        <div className="flex flex-wrap justify-between text-base text-white/90">
                            <span>Loan Term:</span>
                            <span>{loanTerm} months</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function FinancingForm() {
    return (
        <div className="px-2 sm:px-4 md:px-8 py-8 w-full mx-auto">
            <FinancingInfo />
            <PaymentCalculator />
            <div className="w-full flex justify-center mt-10">
                <div className="  flex items-center justify-center px-8 py-6">
                    <button className="flex items-center gap-2 text-white font-extrabold text-lg px-6 py-3 rounded-xl bg-yellow-600 hover:bg-yellow-700 transition-colors duration-150 shadow-md">
                        Apply for Pre-Approval
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}