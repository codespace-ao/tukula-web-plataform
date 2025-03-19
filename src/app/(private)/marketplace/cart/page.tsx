"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
    CheckIcon,
    ClockIcon,
    QuestionMarkCircleIcon,
    XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import alface from "@/assets/images/products/alface.jpg";
import Image from "next/image";
import Link from "next/link";

// Produtos alimentares ajustados para a Tukula
const products = [
    {
        id: 1,
        name: "Kit de Vegetais Excedentes",
        href: "#",
        price: "Kz 25,00",
        type: "Orgânico",
        inStock: true,
        weight: "5kg",
        imageSrc: alface.src,
        imageAlt:
            "Kit de vegetais excedentes, incluindo cenouras, batatas e tomates.",
    },
    {
        id: 2,
        name: "Cesta Básica Solidária",
        href: "#",
        price: "Kz 50,00",
        type: "Essencial",
        inStock: false,
        leadTime: "2–3 dias",
        weight: "10kg",
        imageSrc: alface.src,
        imageAlt:
            "Cesta básica com arroz, feijão, macarrão e outros itens essenciais.",
    },
    {
        id: 3,
        name: "Pacote de Frutas Frescas",
        href: "#",
        price: "Kz 30,00",
        type: "Fresco",
        inStock: true,
        imageSrc: alface.src,
        imageAlt:
            "Pacote de frutas frescas, incluindo maçãs, bananas e laranjas.",
    },
];

// Produtos relacionados ajustados para a Tukula
const relatedProducts = [
    {
        id: 1,
        name: "Kit de Grãos Orgânicos",
        href: "#",
        imageSrc: alface.src,
        imageAlt: "Kit de grãos orgânicos, incluindo quinoa e lentilha.",
        price: "Kz 40,00",
        type: "Orgânico",
    },
    // Mais produtos podem ser adicionados aqui
];

export default function Example() {
    return (
        <div className="bg-white">
            <main className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Carrinho de Compras
                </h1>

                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section
                        aria-labelledby="cart-heading"
                        className="lg:col-span-7"
                    >
                        <h2 id="cart-heading" className="sr-only">
                            Itens no seu carrinho de compras
                        </h2>

                        <ul
                            role="list"
                            className="divide-y divide-gray-200 border-t border-b border-gray-200"
                        >
                            {products.map((product, productIdx) => (
                                <li
                                    key={product.id}
                                    className="flex py-6 sm:py-10"
                                >
                                    <div className="shrink-0">
                                        <Image
                                            alt={product.imageAlt}
                                            src={product.imageSrc}
                                            className="size-24 rounded-md object-cover sm:size-48"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm">
                                                        <a
                                                            href={product.href}
                                                            className="font-medium text-gray-700 hover:text-primary"
                                                        >
                                                            {product.name}
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="mt-1 flex text-sm">
                                                    <p className="text-gray-500">
                                                        {product.type}
                                                    </p>
                                                    {product.weight ? (
                                                        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                                                            {product.weight}
                                                        </p>
                                                    ) : null}
                                                </div>
                                                <p className="mt-1 text-sm font-medium text-gray-900">
                                                    {product.price}
                                                </p>
                                            </div>

                                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                                <div className="inline-grid w-full max-w-16 grid-cols-1">
                                                    <select
                                                        id={`quantity-${productIdx}`}
                                                        name={`quantity-${productIdx}`}
                                                        aria-label={`Quantidade, ${product.name}`}
                                                        className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                                    >
                                                        <option value={1}>
                                                            1
                                                        </option>
                                                        <option value={2}>
                                                            2
                                                        </option>
                                                        <option value={3}>
                                                            3
                                                        </option>
                                                        <option value={4}>
                                                            4
                                                        </option>
                                                        <option value={5}>
                                                            5
                                                        </option>
                                                    </select>
                                                    <ChevronDownIcon
                                                        aria-hidden="true"
                                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                                    />
                                                </div>

                                                <div className="absolute top-0 right-0">
                                                    <button
                                                        type="button"
                                                        className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                                    >
                                                        <span className="sr-only">
                                                            Remover
                                                        </span>
                                                        <XMarkIconMini
                                                            aria-hidden="true"
                                                            className="size-5"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                                            {product.inStock ? (
                                                <CheckIcon
                                                    aria-hidden="true"
                                                    className="size-5 shrink-0 text-green-500"
                                                />
                                            ) : (
                                                <ClockIcon
                                                    aria-hidden="true"
                                                    className="size-5 shrink-0 text-gray-300"
                                                />
                                            )}
                                            <span>
                                                {product.inStock
                                                    ? "Em estoque"
                                                    : `Entrega em ${product.leadTime}`}
                                            </span>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Resumo do pedido */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                    >
                        <h2
                            id="summary-heading"
                            className="text-lg font-medium text-gray-900"
                        >
                            Resumo do Pedido
                        </h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-gray-600">
                                    Subtotal
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">
                                    Kz 105,00
                                </dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex items-center text-sm text-gray-600">
                                    <span>Estimativa de entrega</span>
                                    <a
                                        href="#"
                                        className="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">
                                            Saiba mais sobre como a entrega é
                                            calculada
                                        </span>
                                        <QuestionMarkCircleIcon
                                            aria-hidden="true"
                                            className="size-5"
                                        />
                                    </a>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">
                                    Kz 10,00
                                </dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex text-sm text-gray-600">
                                    <span>Taxas</span>
                                    <a
                                        href="#"
                                        className="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">
                                            Saiba mais sobre como as taxas são
                                            calculadas
                                        </span>
                                        <QuestionMarkCircleIcon
                                            aria-hidden="true"
                                            className="size-5"
                                        />
                                    </a>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">
                                    Kz 5,00
                                </dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="text-base font-medium text-gray-900">
                                    Total do Pedido
                                </dt>
                                <dd className="text-base font-medium text-gray-900">
                                    Kz 120,00
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-6">
                            <Link
                                href={"/marketplace/cart/checkout"}
                                type="submit"
                                className="w-full rounded-md border border-transparent bg-primary px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                            >
                                Finalizar Compra
                            </Link>
                        </div>
                    </section>
                </form>

                {/* Produtos relacionados */}
                <section aria-labelledby="related-heading" className="mt-24">
                    <h2
                        id="related-heading"
                        className="text-lg font-medium text-gray-900"
                    >
                        Você também pode gostar…
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {relatedProducts.map((relatedProduct) => (
                            <div
                                key={relatedProduct.id}
                                className="group relative"
                            >
                                <Image
                                    alt={relatedProduct.imageAlt}
                                    src={relatedProduct.imageSrc}
                                    className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={relatedProduct.href}>
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                />
                                                {relatedProduct.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {relatedProduct.type}
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        {relatedProduct.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
