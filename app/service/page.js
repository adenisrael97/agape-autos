import IntroService from "@/components/Service/IntroService";
import SummaryService from "@/components/Service/SummaryService";


export default function ServicePage() {
    return (
        <section className="min-h-screen w-full bg-linear-to-br from-gray-600 via-black to-gray-700">
            <IntroService />
            <SummaryService />
        </section>
    )
}