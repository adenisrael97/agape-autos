export default function WhyUs() {
    return (
        <div className="w-full max-w-5xl mx-auto py-12 px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Why Sell & Trade With Us?</h2>
                <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
                    Agape Autos makes selling or trading your car simple, transparent, and rewarding. Discover the benefits of working with a trusted team that puts your needs first.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">Best Value Offers</h4>
                    <p className="text-gray-600 text-sm">We provide competitive, market-based offers so you get the most for your vehicle—no haggling, no hassle.</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">Fast & Easy Process</h4>
                    <p className="text-gray-600 text-sm">Our streamlined process means you can sell or trade your car quickly, with minimal paperwork and maximum convenience.</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">Trusted Transparency</h4>
                    <p className="text-gray-600 text-sm">We’re honest and upfront at every step, so you always know what to expect—no surprises, just great service.</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">Personalized Support</h4>
                    <p className="text-gray-600 text-sm">Our friendly team is here to guide you, answer your questions, and help you make the best decision for your needs.</p>
                </div>
            </div>
        </div>
    );
}