"use client";

import { useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import alface from "@/assets/images/products/alface.jpg";
import { ShoppingBagIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
};

// Ajustando breadcrumbs

// Ajustando filtros para produtos alimentares
const filters = [
    {
        id: "tipo",
        name: "Tipo",
        options: [
            { value: "organico", label: "Orgânico" },
            { value: "excedente", label: "Excedente" },
            { value: "fresco", label: "Fresco" },
        ],
    },
    {
        id: "categoria",
        name: "Categoria",
        options: [
            { value: "novos-kits", label: "Novos Kits" },
            { value: "vegetais", label: "Vegetais" },
            { value: "frutas", label: "Frutas" },
            { value: "raizes", label: "Raízes" },
        ],
    },
    {
        id: "peso",
        name: "Peso",
        options: [
            { value: "1kg", label: "1kg" },
            { value: "2kg", label: "2kg" },
            { value: "5kg", label: "5kg" },
            { value: "10kg", label: "10kg" },
        ],
    },
];

// Ajustando produtos para alimentos
const products = [
    {
        id: 1,
        name: "Kit de Vegetais Excedentes",
        href: "#",
        price: "Kz 25,00",
        description: "Um kit com vegetais excedentes, perfeito para a semana.",
        options: "5kg, Orgânico",
        imageSrc: alface.src,
        imageAlt: "Kit de vegetais excedentes com alface, cenoura e tomate.",
    },
    {
        id: 2,
        name: "Tomates Frescos",
        href: "#",
        price: "Kz 15,00",
        description: "Tomates frescos e suculentos, direto do produtor.",
        options: "2kg, Fresco",
        imageSrc: alface.src,
        imageAlt: "Tomates frescos e vermelhos.",
    },
    {
        id: 3,
        name: "Cenouras Orgânicas",
        href: "#",
        price: "Kz 10,00",
        description: "Cenouras orgânicas, cultivadas sem agrotóxicos.",
        options: "1kg, Orgânico",
        imageSrc: alface.src,
        imageAlt: "Cenouras orgânicas frescas.",
    },
    {
        id: 4,
        name: "Batatas Excedentes",
        href: "#",
        price: "Kz 20,00",
        description: "Batatas excedentes, ideais para várias receitas.",
        options: "5kg, Excedente",
        imageSrc: alface.src,
        imageAlt: "Batatas excedentes frescas.",
    },
    {
        id: 5,
        name: "Mandioca Fresca",
        href: "#",
        price: "Kz 18,00",
        description: "Mandioca fresca, perfeita para pratos tradicionais.",
        options: "3kg, Fresco",
        imageSrc: alface.src,
        imageAlt: "Mandioca fresca e pronta para uso.",
    },
    {
        id: 6,
        name: "Bananas Maduras",
        href: "#",
        price: "Kz 12,00",
        description: "Bananas maduras e doces, direto da fazenda.",
        options: "2kg, Fresco",
        imageSrc: alface.src,
        imageAlt: "Cacho de bananas maduras.",
    },
];

export default function ProductsSection() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog
                    open={mobileFiltersOpen}
                    onClose={setMobileFiltersOpen}
                    className="relative z-40 lg:hidden"
                >
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Filtros
                                </h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="relative -mr-2 flex size-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                                >
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Fechar menu</span>
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="size-6"
                                    />
                                </button>
                            </div>

                            {/* Filtros */}
                            <form className="mt-4">
                                {filters.map((section) => (
                                    <Disclosure
                                        key={section.name}
                                        as="div"
                                        className="border-t border-gray-200 pt-4 pb-4"
                                    >
                                        <fieldset>
                                            <legend className="w-full px-2">
                                                <DisclosureButton className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                                    <span className="text-sm font-medium text-gray-900">
                                                        {section.name}
                                                    </span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        <ChevronDownIcon
                                                            aria-hidden="true"
                                                            className="size-5 rotate-0 transform group-data-open:-rotate-180"
                                                        />
                                                    </span>
                                                </DisclosureButton>
                                            </legend>
                                            <DisclosurePanel className="px-4 pt-4 pb-2">
                                                <div className="space-y-6">
                                                    {section.options.map(
                                                        (option, optionIdx) => (
                                                            <div
                                                                key={
                                                                    option.value
                                                                }
                                                                className="flex gap-3"
                                                            >
                                                                <div className="flex h-5 shrink-0 items-center">
                                                                    <div className="group grid size-4 grid-cols-1">
                                                                        <input
                                                                            defaultValue={
                                                                                option.value
                                                                            }
                                                                            id={`${section.id}-${optionIdx}-mobile`}
                                                                            name={`${section.id}[]`}
                                                                            type="checkbox"
                                                                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                        />
                                                                        <svg
                                                                            fill="none"
                                                                            viewBox="0 0 14 14"
                                                                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                        >
                                                                            <path
                                                                                d="M3 8L6 11L11 3.5"
                                                                                strokeWidth={
                                                                                    2
                                                                                }
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="opacity-0 group-has-checked:opacity-100"
                                                                            />
                                                                            <path
                                                                                d="M3 7H11"
                                                                                strokeWidth={
                                                                                    2
                                                                                }
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="opacity-0 group-has-indeterminate:opacity-100"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <label
                                                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                                                    className="text-sm text-gray-500"
                                                                >
                                                                    {
                                                                        option.label
                                                                    }
                                                                </label>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </DisclosurePanel>
                                        </fieldset>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
                    <div className="border-b border-gray-200 pt-24 pb-10">
                        <h1 className="text-4xl font-bold tracking-tight font-focus text-primary">
                            Novos Kits
                        </h1>
                        <p className="mt-4 text-base text-gray-500">
                            Confira os novos kits de alimentos excedentes e
                            orgânicos, perfeitos para sua semana!
                        </p>
                    </div>

                    <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                        <aside>
                            <h2 className="sr-only">Filtros</h2>

                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="inline-flex items-center lg:hidden"
                            >
                                <span className="text-sm font-medium text-gray-700">
                                    Filtros
                                </span>
                                <PlusIcon
                                    aria-hidden="true"
                                    className="ml-1 size-5 shrink-0 text-gray-400"
                                />
                            </button>

                            <div className="hidden lg:block">
                                <form className="divide-y divide-gray-200">
                                    {filters.map((section) => (
                                        <div
                                            key={section.name}
                                            className="py-10 first:pt-0 last:pb-0"
                                        >
                                            <fieldset>
                                                <legend className="block text-sm font-medium text-gray-900">
                                                    {section.name}
                                                </legend>
                                                <div className="space-y-3 pt-6">
                                                    {section.options.map(
                                                        (option, optionIdx) => (
                                                            <div
                                                                key={
                                                                    option.value
                                                                }
                                                                className="flex gap-3"
                                                            >
                                                                <div className="flex h-5 shrink-0 items-center">
                                                                    <div className="group grid size-4 grid-cols-1">
                                                                        <input
                                                                            defaultValue={
                                                                                option.value
                                                                            }
                                                                            id={`${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            type="checkbox"
                                                                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                        />
                                                                        <svg
                                                                            fill="none"
                                                                            viewBox="0 0 14 14"
                                                                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                        >
                                                                            <path
                                                                                d="M3 8L6 11L11 3.5"
                                                                                strokeWidth={
                                                                                    2
                                                                                }
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="opacity-0 group-has-checked:opacity-100"
                                                                            />
                                                                            <path
                                                                                d="M3 7H11"
                                                                                strokeWidth={
                                                                                    2
                                                                                }
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="opacity-0 group-has-indeterminate:opacity-100"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <label
                                                                    htmlFor={`${section.id}-${optionIdx}`}
                                                                    className="text-sm text-gray-600"
                                                                >
                                                                    {
                                                                        option.label
                                                                    }
                                                                </label>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </fieldset>
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </aside>

                        <section
                            aria-labelledby="product-heading"
                            className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
                        >
                            <h2 id="product-heading" className="sr-only">
                                Produtos
                            </h2>

                            <Link
                                href={"/marketplace/products/mk39j282md29"}
                                className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3"
                            >
                                {products.map((product) => (
                                    <Link
                                        href={"/marketplace/products/prodteste"}
                                        key={product.id}
                                        className="group relative flex flex-col overflow-hidden rounded-[22px] border border-gray-200 bg-white transition-all duration-200 hover:shadow-md"
                                    >
                                        {/* Imagem com desconto e ícone de localização */}
                                        <div className="relative">
                                            <Image
                                                alt={product.imageAlt}
                                                src={product.imageSrc}
                                                className="aspect-3/4 bg-gray-200 object-cover group-hover:opacity-75 sm:h-64 -full"
                                            />
                                            {/* Desconto 50% OFF */}
                                            <div className="absolute top-2 right-2 flex items-center space-x-2">
                                                <div className="bg-primary bg-opacity-10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                                                    50% OFF
                                                </div>
                                                {/* Ícone de localização */}
                                                <div className="flex items-center text-primary">
                                                    <MapPinIcon className="h-5 w-5" />
                                                    <span className="ml-1 text-xs font-medium">
                                                        Fazenda Verde
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Conteúdo do card */}
                                        <div className="flex flex-1 flex-col space-y-2 p-4">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                <Link href={product.href}>
                                                    <span
                                                        aria-hidden="true"
                                                        className="absolute inset-0"
                                                    />
                                                    {product.name}
                                                </Link>
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {truncateDescription(
                                                    product.description,
                                                    100
                                                )}
                                            </p>
                                            <div className="flex flex-1 flex-col justify-end">
                                                <p className="text-sm text-gray-500 italic">
                                                    {product.options}
                                                </p>
                                                <p className="text-lg font-bold font-focus  text-primary">
                                                    {product.price}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Rodapé com botões */}
                                        <div className="flex items-center justify-between px-4 pb-4 space-x-3">
                                            {/* Botão circular com ícone de carrinho */}
                                            <button className="flex items-center justify-center w-10 h-10 bg-transparent text-primary rounded-full border border-primary transition-colors duration-200">
                                                <ShoppingBagIcon className="h-5 w-5" />
                                            </button>
                                            {/* Botão "Comprar Agora" */}
                                            <Link
                                                href={"/marketplace/cart"}
                                                className="flex-1 bg-primary text-white  py-2 rounded-full hover:bg-orange-50 transition-colors duration-200"
                                            >
                                                Comprar Agora
                                            </Link>
                                        </div>
                                    </Link>
                                ))}
                            </Link>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
