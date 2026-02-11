import FinanceSummary from "@/components/Financing/FinanceSummary";
import FinancingForm from "@/components/Financing/FinancingForm";


export default function FinancingPage () {
    return (
        <section>
            <FinancingForm />
            <FinanceSummary />
        </section>
    )
}