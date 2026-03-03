import Script from "next/script";
import ReviewCard from "./ReviewCard";
import { Review } from "@/types/review";

export default function ReviewsSection() {

    const reviews: Review[] = [
        { 
            author: "Иван Иванов", 
            rating: 5, 
            content: "Технологии будущего уже здесь. Скорость транзакций и безопасность на высоте, Segway Powersports задает новый стандарт." 
        },
        { 
            author: "Алина Смирнова", 
            rating: 5, 
            content: "Архитектура проекта поражает. AI-защита данных работает безупречно. Лучшее решение на рынке в 2026 году." 
        },
        { 
            author: "Марк Девопс", 
            rating: 5, 
            content: "Интеграция прошла за считанные минуты. 120K TPS — это не просто цифры, это реальная мощность." 
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Ecosystem",
        "description": "Futuristic AI-powered blockchain platform",
        "review": reviews.map(r => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": r.author
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": r.rating,
                "bestRating": "5"
            },
            "reviewBody": r.content,
        })),
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": reviews.length.toString()
        }
    };

    return (
        <section className="relative py-24 bg-black overflow-hidden">
            <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                
                <div className="text-center mb-16">
                    <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Voices of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Future</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
                        Присоединяйтесь к тысячам инноваторов, которые уже выбрали масштабируемость и безопасность.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((r) => (
                        <ReviewCard key={r.author} {...r} />
                    ))}
                </div>
            </div>
            
            <Script
                id="reviews-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}