import { Advantages, Reviews, WelcomeHero } from "@/sections";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans flex-col">
      <WelcomeHero/>
      <Advantages/>
      <Reviews/>
    </div>
  );
}
