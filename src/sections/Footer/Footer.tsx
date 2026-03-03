import { PATHS } from "@/constants/path";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-transparent text-gray-400 py-10 border-t border-gray-700 ">
            <div className="pl-5 md:pl-0 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

                <div>
                    <h4 className="text-white font-semibold mb-4">Навигация</h4>
                    <ul className="space-y-2">
                        {PATHS.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="hover:text-white">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Контакты</h4>
                    <p>+7 777 123 45 67</p>
                    <p>info@site.kz</p>
                    <p>г. Алматы, Казахстан</p>
                </div>

            </div>
        </footer>
    );
}
