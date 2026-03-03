import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const PATHS = [
    { name: "Smart Contracts", href: "smart-contracts" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Whitepaper", href: "/whitepaper" },
  ]

  const ICONS = [
    { src: "/icons/facebook.svg", alt: "Facebook" },
    { src: "/icons/instagram.svg", alt: "Instagram" },
    { src: "/icons/twitter.svg", alt: "Twitter" },
    { src: "/icons/youtube.svg", alt: "YouTube" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-transparent">
      <nav className="max-w-[1440px] mx-auto px-8 h-[80px] flex items-center justify-between">

        <Link
          href="/"
          className="text-white text-xl font-semibold tracking-wide hover:opacity-80 transition"
        >
          SITE NAME
        </Link>
        <ul className="flex items-center gap-10 text-white text-sm font-medium">
          {PATHS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          {ICONS.map((icon) => (
            <Link
              key={icon.alt}
              href="#"
              className="opacity-80 hover:opacity-100 hover:scale-110 transition"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}
