export default function Map () {
    return (
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 flex justify-center items-center min-h-75 h-[60vh] md:h-[90vh]">
            <iframe
                title="Agape Autos Location"
                src="https://www.google.com/maps?q=123+Agape+Street,+Lagos,+Nigeria&output=embed"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-75 md:min-h-125"
            ></iframe>
        </div>
    );
}


