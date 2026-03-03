import { Advantage } from "@/types/advantages-card";
import AdvantageCard from "./AdvantagesCard";

const advantages: Advantage[] = [
    {
        icon: "Zap",
        title: "Скорость",
        description: "Молниеносный отклик системы и обработка данных в реальном времени (120K TPS)."
    },
    {
        icon: "Cpu",
        title: "Мощность",
        description: "Вычислительная мощность нового поколения для самых сложных алгоритмов."
    },
    {
        icon: "ShieldCheck",
        title: "Надёжность",
        description: "Многоуровневая AI-защита и стабильность протокола в любых условиях."
    },
] as const;

export default function AdvantagesSection() {
    return (
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 px-4 sm:px-6 lg:px-8">
                {advantages.map((adv, index) => (
                    <div className="w-full md:w-[calc((100%-4rem)/3)]" key={index}>
                        <AdvantageCard {...adv} />
                    </div>
                ))}
            </div>

        </section>
    );
}
