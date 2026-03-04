'use client'

import { useEffect } from "react";
import Link from "next/link";
import { PATHS } from "@/constants/path";
import { SOCIAL_ICONS } from "@/constants/icons";
import Image from "next/image";

interface MobileNavbarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileNavbar({ isOpen, onClose }: MobileNavbarProps) {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
        >
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                onClick={onClose}
            />

            <div className="relative h-full flex flex-col items-center justify-center p-8">
                <nav className="flex flex-col items-center gap-8">
                    {PATHS.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className={`text-3xl font-bold text-white tracking-tighter transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className={`w-12 h-px bg-purple-500/50 my-10 transition-all duration-1000 ${isOpen ? "w-24" : "w-0"}`} />

                <div className="flex gap-8">
                    {SOCIAL_ICONS.map((icon, index) => (
                        <Link
                            key={index}
                            href={icon.src}
                            className={`text-gray-400 hover:text-purple-400 transition-all duration-500 ${isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
                                }`}
                            style={{ transitionDelay: `${(PATHS.length + index) * 50}ms` }}
                        >
                            <Image src={icon.src} width={24} height={24} alt={icon.alt} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}