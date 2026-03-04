'use client'
import { Button } from '@/ui/basic';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const HERO_CONTENT = {
    label: "THE BEST WEBSITE EVER",
    title: "Scalable.",
    description: "Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.",
    buttons: {
        primary: "Get started",
        secondary: "Read more"
    }
} as const;

export default function WelcomeHero() {
    return (
        <section className="relative w-full bg-black flex flex-col items-center justify-start pt-10 md:pt-32 px-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-purple-600/20 blur-[80px] md:blur-[120px] rounded-full"
            />

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl text-center space-y-2 md:space-y-4"
            >

                <div>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-4xl md:text-7xl tracking-normal uppercase">
                        {HERO_CONTENT.label}
                    </span>

                    <h1 className="text-white text-4xl md:text-7xl tracking-normal">
                        {HERO_CONTENT.title}
                    </h1>
                </div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-gray-400 text-base md:text-xl leading-relaxed mt-6 md:mt-8 px-2"
                >
                    {HERO_CONTENT.description}
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10 w-full sm:w-auto"
                >
                    <Button variant="primary">{HERO_CONTENT.buttons.primary}</Button>
                    <Button variant="secondary">{HERO_CONTENT.buttons.secondary}</Button>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-6xl pointer-events-none mt-8 md:mt-auto flex justify-center pb-4 md:pb-0"
            >
                <Image
                    src="/assets/robot-infinity.png"
                    alt="Futuristic Robots"
                    width={1200}
                    height={600}
                    priority
                />
            </motion.div>
        </section>
    );
};