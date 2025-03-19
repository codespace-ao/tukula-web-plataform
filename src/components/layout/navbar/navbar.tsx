"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { INavbarData } from "@/interfaces/navbar/navbarData.interface";
import { NavBarItemsTypes } from "@/enums/navbar/navbarItemsTypes";
import Button from "@/components/shared/button/button";

const navbarData: INavbarData[] = [
    {
        label: "Inicio",
        href: "/",
        show: true,
        type: NavBarItemsTypes.link,
    },
    {
        label: "Sobre",
        href: "/about",
        show: true,
        type: NavBarItemsTypes.link,
    },
    {
        label: "Responbilidades",
        href: "/responsabilities",
        show: true,
        type: NavBarItemsTypes.link,
    },
    {
        label: "Contacto",
        href: "/contact",
        show: false,
        type: NavBarItemsTypes.link,
    },
    {
        label: "Entrar",
        href: "/auth/login",
        show: true,
        type: NavBarItemsTypes.button,
    },
    {
        label: "Criar conta",
        href: "/auth/register",
        show: true,
        type: NavBarItemsTypes.button,
    },
];

export default function Navbar() {
    return (
        <nav className="w-full h-16 flex items-center justify-between px-[250px] pt-[42px] pb-[16px] text-white relative z-10">
            <div className="flex items-center justify-center">
                <Image src={logo} alt="logo" width={140} height={140} />
            </div>
            <ul>
                {navbarData.map((item, index) => {
                    if (item.show) {
                        return (
                            <li key={index} className="inline-block mx-2.5">
                                {item.type === NavBarItemsTypes.link ? (
                                    <Link href={item.href}>{item.label}</Link>
                                ) : (
                                    <Link href={item.href}>
                                        <Button
                                            label={item.label}
                                            variant="default"
                                            className={`${
                                                item.label === "Criar conta"
                                                    ? "text-dark bg-light "
                                                    : "bg-transparent border border-light"
                                            } rounded-full h-[47px] px-7`}
                                        />
                                    </Link>
                                )}
                            </li>
                        );
                    }
                })}
            </ul>
        </nav>
    );
}
