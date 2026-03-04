import { Advantages, Reviews, WelcomeHero } from "@/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black font-sans flex flex-col items-stretch">
      <WelcomeHero />
      <div className="w-full">
        <Advantages />
        <Reviews />
      </div>
    </main>
  );
}