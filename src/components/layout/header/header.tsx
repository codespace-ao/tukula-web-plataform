"use client";

import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from "@headlessui/react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    HeartIcon,
    XMarkIcon as XMarkIconOutline,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, Fragment } from "react";
import logo from "@/assets/images/logo2.png";
import Link from "next/link";

// Dados de navegação ajustados para a Tukula
const navigation = {
    categories: [
        {
            id: "impacto",
            name: "Impacto Social",
            featured: [
                {
                    name: "Combate à Fome",
                    href: "/impact/food-security",
                    imageSrc:
                        "https://via.placeholder.com/300x300?text=Combate+a+Fome",
                    imageAlt:
                        "Voluntários distribuindo alimentos para comunidades carentes.",
                },
                {
                    name: "Redução de Desperdício",
                    href: "/impact/waste-reduction",
                    imageSrc:
                        "https://via.placeholder.com/300x300?text=Reducao+Desperdicio",
                    imageAlt:
                        "Alimentos excedentes sendo organizados para doação.",
                },
            ],
            sections: [
                {
                    id: "projetos",
                    name: "Projetos",
                    items: [
                        { name: "Distribuição de Alimentos", href: "#" },
                        { name: "Educação Alimentar", href: "#" },
                        { name: "Parcerias com Produtores", href: "#" },
                        { name: "Campanhas de Conscientização", href: "#" },
                        { name: "Ver Todos", href: "#" },
                    ],
                },
                {
                    id: "como_ajudar",
                    name: "Como Ajudar",
                    items: [
                        { name: "Doar Alimentos", href: "#" },
                        { name: "Ser Voluntário", href: "#" },
                        { name: "Parcerias", href: "#" },
                        { name: "Doações Financeiras", href: "#" },
                    ],
                },
                {
                    id: "parceiros",
                    name: "Parceiros",
                    items: [
                        { name: "Produtores Locais", href: "#" },
                        { name: "ONGs", href: "#" },
                        { name: "Empresas Sustentáveis", href: "#" },
                        { name: "Comunidades", href: "#" },
                    ],
                },
            ],
        },
        {
            id: "sustentabilidade",
            name: "Sustentabilidade",
            featured: [
                {
                    name: "Práticas Sustentáveis",
                    href: "/sustainability/practices",
                    imageSrc:
                        "https://via.placeholder.com/300x300?text=Praticas+Sustentaveis",
                    imageAlt:
                        "Imagem de práticas sustentáveis para redução de desperdício.",
                },
                {
                    name: "Educação Comunitária",
                    href: "/sustainability/education",
                    imageSrc:
                        "https://via.placeholder.com/300x300?text=Educacao+Comunitaria",
                    imageAlt:
                        "Workshop de educação alimentar em uma comunidade.",
                },
            ],
            sections: [
                {
                    id: "iniciativas",
                    name: "Iniciativas",
                    items: [
                        { name: "Logística Verde", href: "#" },
                        { name: "Reaproveitamento", href: "#" },
                        { name: "Educação Ambiental", href: "#" },
                        { name: "Ver Todas", href: "#" },
                    ],
                },
                {
                    id: "como_participar",
                    name: "Como Participar",
                    items: [
                        { name: "Voluntariado", href: "#" },
                        { name: "Doações", href: "#" },
                        { name: "Parcerias", href: "#" },
                    ],
                },
                {
                    id: "resultados",
                    name: "Resultados",
                    items: [
                        { name: "Alimentos Doados", href: "#" },
                        { name: "Famílias Apoiadas", href: "#" },
                        { name: "Desperdício Reduzido", href: "#" },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: "Sobre a Tukula", href: "/about" },
        { name: "Contato", href: "/contact" },
    ],
};

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Dialog
                open={open}
                onClose={setOpen}
                className="relative z-40 lg:hidden"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
                    >
                        <div className="flex px-4 pt-5 pb-2">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Fechar menu</span>
                                <XMarkIconOutline
                                    aria-hidden="true"
                                    className="size-6"
                                />
                            </button>
                        </div>

                        {/* Links */}
                        <TabGroup className="mt-2">
                            <div className="border-b border-gray-200">
                                <TabList className="-mb-px flex space-x-8 px-4">
                                    {navigation.categories.map((category) => (
                                        <Tab
                                            key={category.name}
                                            className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-orange-500 data-selected:text-orange-500"
                                        >
                                            {category.name}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                            <TabPanels as={Fragment}>
                                {navigation.categories.map((category) => (
                                    <TabPanel
                                        key={category.name}
                                        className="space-y-10 px-4 pt-10 pb-8"
                                    >
                                        <div className="grid grid-cols-2 gap-x-4">
                                            {category.featured.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="group relative text-sm"
                                                >
                                                    <Image
                                                        alt={item.imageAlt}
                                                        src={item.imageSrc}
                                                        className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                                    />
                                                    <Link
                                                        href={item.href}
                                                        className="mt-6 block font-medium text-gray-900"
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0 z-10"
                                                        />
                                                        {item.name}
                                                    </Link>
                                                    <p
                                                        aria-hidden="true"
                                                        className="mt-1"
                                                    >
                                                        Saiba mais
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        {category.sections.map((section) => (
                                            <div key={section.name}>
                                                <p
                                                    id={`${category.id}-${section.id}-heading-mobile`}
                                                    className="font-medium text-gray-900"
                                                >
                                                    {section.name}
                                                </p>
                                                <ul
                                                    role="list"
                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                    className="mt-6 flex flex-col space-y-6"
                                                >
                                                    {section.items.map(
                                                        (item) => (
                                                            <li
                                                                key={item.name}
                                                                className="flow-root"
                                                            >
                                                                <Link
                                                                    href={
                                                                        item.href
                                                                    }
                                                                    className="-m-2 block p-2 text-gray-500"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        ))}
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <Link
                                        href={page.href}
                                        className="-m-2 block p-2 font-medium text-gray-900"
                                    >
                                        {page.name}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            <div className="flow-root">
                                <Link
                                    href="/auth/login"
                                    className="-m-2 block p-2 font-medium text-gray-900"
                                >
                                    Entrar
                                </Link>
                            </div>
                            <div className="flow-root">
                                <Link
                                    href="/auth/register"
                                    className="-m-2 block p-2 font-medium text-gray-900"
                                >
                                    Junte-se a Nós
                                </Link>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-primary px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Participe da nossa missão para combater a fome e reduzir o
                    desperdício!
                </p>

                <nav
                    aria-label="Top"
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Abrir menu</span>
                                <Bars3Icon
                                    aria-hidden="true"
                                    className="size-6"
                                />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <span className="sr-only">Tukula</span>
                                    <Image
                                        alt="Logo da Tukula"
                                        src={logo}
                                        className="h-8 w-auto"
                                    />
                                </Link>
                            </div>

                            {/* Flyout menus */}
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover
                                            key={category.name}
                                            className="flex"
                                        >
                                            <div className="relative flex">
                                                <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-orange-500 data-open:border-orange-500 data-open:text-orange-500">
                                                    {category.name}
                                                </PopoverButton>
                                            </div>

                                            <PopoverPanel
                                                transition
                                                className="absolute inset-x-0 top-full z-10 text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                                            >
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute inset-0 top-1/2 bg-white shadow-sm"
                                                />

                                                <div className="relative bg-white">
                                                    <div className="mx-auto max-w-7xl px-8">
                                                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                {category.featured.map(
                                                                    (item) => (
                                                                        <div
                                                                            key={
                                                                                item.name
                                                                            }
                                                                            className="group relative text-base sm:text-sm"
                                                                        >
                                                                            <Image
                                                                                alt={
                                                                                    item.imageAlt
                                                                                }
                                                                                src={
                                                                                    item.imageSrc
                                                                                }
                                                                                className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                                                            />
                                                                            <Link
                                                                                href={
                                                                                    item.href
                                                                                }
                                                                                className="mt-6 block font-medium text-gray-900"
                                                                            >
                                                                                <span
                                                                                    aria-hidden="true"
                                                                                    className="absolute inset-0 z-10"
                                                                                />
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </Link>
                                                                            <p
                                                                                aria-hidden="true"
                                                                                className="mt-1"
                                                                            >
                                                                                Saiba
                                                                                mais
                                                                            </p>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                {category.sections.map(
                                                                    (
                                                                        section
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                section.name
                                                                            }
                                                                        >
                                                                            <p
                                                                                id={`${section.name}-heading`}
                                                                                className="font-medium text-gray-900"
                                                                            >
                                                                                {
                                                                                    section.name
                                                                                }
                                                                            </p>
                                                                            <ul
                                                                                role="list"
                                                                                aria-labelledby={`${section.name}-heading`}
                                                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                            >
                                                                                {section.items.map(
                                                                                    (
                                                                                        item
                                                                                    ) => (
                                                                                        <li
                                                                                            key={
                                                                                                item.name
                                                                                            }
                                                                                            className="flex"
                                                                                        >
                                                                                            <Link
                                                                                                href={
                                                                                                    item.href
                                                                                                }
                                                                                                className="hover:text-orange-500"
                                                                                            >
                                                                                                {
                                                                                                    item.name
                                                                                                }
                                                                                            </Link>
                                                                                        </li>
                                                                                    )
                                                                                )}
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </PopoverPanel>
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <Link
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-orange-500"
                                        >
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>
                            </PopoverGroup>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <Link
                                        href="/auth/login"
                                        className="text-sm font-medium text-gray-700 hover:text-orange-500"
                                    >
                                        Entrar
                                    </Link>
                                    <span
                                        aria-hidden="true"
                                        className="h-6 w-px bg-gray-200"
                                    />
                                    <Link
                                        href="/auth/register"
                                        className="text-sm font-medium text-gray-700 hover:text-orange-500"
                                    >
                                        Junte-se a Nós
                                    </Link>
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <Link
                                        href="#"
                                        className="p-2 text-gray-400 hover:text-orange-500"
                                    >
                                        <span className="sr-only">
                                            Pesquisar
                                        </span>
                                        <MagnifyingGlassIcon
                                            aria-hidden="true"
                                            className="size-6"
                                        />
                                    </Link>
                                </div>

                                {/* Ícone de apoio (substituí o carrinho por algo mais relacionado à Tukula) */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link
                                        href="/donate"
                                        className="group -m-2 flex items-center p-2"
                                    >
                                        <HeartIcon
                                            aria-hidden="true"
                                            className="size-6 shrink-0 text-gray-400 group-hover:text-orange-500"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-orange-500">
                                            Doar
                                        </span>
                                        <span className="sr-only">
                                            fazer uma doação
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
