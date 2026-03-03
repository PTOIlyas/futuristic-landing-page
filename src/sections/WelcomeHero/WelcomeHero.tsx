import { Button } from '@/ui/basic';
import { HERO_CONTENT } from '@/constants/content';
import Image from 'next/image';

export default function WelcomeHero() {
    return (
        <section className="relative min-h-screen w-full bg-black flex flex-col items-center justify-start pt-32 px-4 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-4xl text-center space-y-6">

                <div>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-4xl md:text-7xl tracking-normal uppercase">
                        {HERO_CONTENT.label}
                    </span>

                    <h1 className="text-white text-4xl md:text-7xl tracking-normal">
                        {HERO_CONTENT.title}
                    </h1>
                </div>

                <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-xl leading-relaxed">
                    {HERO_CONTENT.description}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Button variant="primary">{HERO_CONTENT.buttons.primary}</Button>
                    <Button variant="secondary">{HERO_CONTENT.buttons.secondary}</Button>
                </div>
            </div>

            <div className="mt-auto w-full max-w-6xl pointer-events-none">
                <Image
                    src="/assets/robot-infinity.png"
                    alt="Futuristic Robots"
                    width={1200}
                    height={600}
                    priority
                />
            </div>
        </section>
    );
};