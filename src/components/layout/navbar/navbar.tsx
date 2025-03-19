"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.png"; // Certifique-se de que o logo da Tukula está no caminho correto
import Link from "next/link";
import { INavbarData } from "@/interfaces/navbar/navbarData.interface";
import { NavBarItemsTypes } from "@/enums/navbar/navbarItemsTypes";
import Button from "@/components/shared/button/button";

// Dados de navegação ajustados para a Tukula
const navbarData: INavbarData[] = [
    {
        label: "Início",
        href: "/",
        show: true,
        type: NavBarItemsTypes.link,
    },
    {
        label: "Sobre a Tukula",
        href: "/about",
        show: true,
        type: NavBarItemsTypes.link,
    },
    {
        label: "Nossa Missão",
        href: "/mission",
        show: true,
        type: NavBarItemsTypes.link,
    },
    {
        label: "Impacto Social",
        href: "/impact",
        show: true,
        type: NavBarItemsTypes.link,
    },
    {
        label: "Contato",
        href: "/contact",
        show: true,
        type: NavBarItemsTypes.link,
    },
    {
        label: "Entrar",
        href: "/auth/login",
        show: true,
        type: NavBarItemsTypes.button,
    },
    {
        label: "Junte-se a Nós",
        href: "/auth/register",
        show: true,
        type: NavBarItemsTypes.button,
    },
];

export default function Navbar() {
    return (
        <nav className="w-full h-16 flex items-center justify-between px-[150px] pt-[42px] pb-[16px] text-white relative z-10 bg-gray-50 shadow-sm">
            <div className="flex items-center justify-center">
                <Image
                    src={logo}
                    alt="Logo da Tukula"
                    width={140}
                    height={140}
                />
            </div>
            <ul className="flex items-center">
                {navbarData.map((item, index) => {
                    if (item.show) {
                        return (
                            <li key={index} className="inline-block mx-3">
                                {item.type === NavBarItemsTypes.link ? (
                                    <Link
                                        href={item.href}
                                        className="text-gray-700 hover:text-orange-500 transition font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <Link href={item.href}>
                                        <Button
                                            label={item.label}
                                            variant="default"
                                            className={`${
                                                item.label === "Junte-se a Nós"
                                                    ? "text-white bg-orange-500 hover:bg-orange-600"
                                                    : "bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-50"
                                            } rounded-full h-[47px] px-7 transition`}
                                        />
                                    </Link>
                                )}
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        </nav>
    );
}
