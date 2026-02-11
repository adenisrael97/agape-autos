export default function HeroSellTrade() {
    return (
        <div className="w-full bg-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Sell & Trade Your Car</h2>
                <p className="text-lg text-gray-700 font-light mb-2">Get the best value for your vehicle with Agape Autos—fast, fair, and hassle-free.</p>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">Whether you want to sell your car outright or trade it in for something new, our process is designed to be simple and rewarding. Let us help you make your next move with confidence.</p>
            </div>
            <div className="max-w-3xl mx-auto text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">How It Works</h3>
                <p className="text-gray-700 mb-6">Follow these easy steps to sell or trade your car with Agape Autos:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {/* Step 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <span className="text-2xl font-bold text-yellow-500 mb-2">1</span>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Get an Instant Quote</h4>
                    <p className="text-gray-600 text-sm">Provide your vehicle details online or in-store to receive a fast, competitive offer.</p>
                </div>
                {/* Step 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <span className="text-2xl font-bold text-yellow-500 mb-2">2</span>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Schedule an Inspection</h4>
                    <p className="text-gray-600 text-sm">Book a convenient time for a quick, professional inspection of your car.</p>
                </div>
                {/* Step 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <span className="text-2xl font-bold text-yellow-500 mb-2">3</span>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Accept the Offer</h4>
                    <p className="text-gray-600 text-sm">Review and accept our offer—no pressure, no obligation, just a fair deal.</p>
                </div>
                {/* Step 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-yellow-500">
                    <span className="text-2xl font-bold text-yellow-500 mb-2">4</span>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Get Paid or Trade Up</h4>
                    <p className="text-gray-600 text-sm">Choose cash payment or apply your value toward a new vehicle from our inventory.</p>
                </div>
            </div>
        </div>
    );
}