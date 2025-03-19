"use client";

import { SetStateAction, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import alface from "@/assets/images/products/alface.jpg";
import Image from "next/image";

// Produtos ajustados para a Tukula
const products = [
    {
        id: 1,
        title: "Kit de Vegetais Excedentes",
        href: "#",
        price: "Kz 25,00",
        type: "Orgânico",
        weight: "5kg",
        imageSrc: alface.src,
        imageAlt:
            "Kit de vegetais excedentes, incluindo cenouras, batatas e tomates.",
    },
];

// Endereços salvos (mockados para o exemplo)
const savedAddresses = [
    {
        id: 1,
        name: "Casa",
        address: "Rua das Flores, 123",
        apartment: "Apto 101",
        city: "Luanda",
        region: "Luanda",
        postalCode: "12345-678",
        phone: "+244 912 345 678",
    },
    {
        id: 2,
        name: "Trabalho",
        address: "Avenida Principal, 456",
        apartment: "",
        city: "Luanda",
        region: "Luanda",
        postalCode: "98765-432",
        phone: "+244 923 456 789",
    },
];

// Métodos de entrega ajustados para a Tukula
const deliveryMethods = [
    {
        id: 1,
        title: "Entrega Padrão",
        turnaround: "3–5 dias úteis",
        price: "Kz 10,00",
    },
    {
        id: 2,
        title: "Entrega Expressa",
        turnaround: "1–2 dias úteis",
        price: "Kz 20,00",
    },
];

// Métodos de pagamento ajustados para o contexto da Tukula
const paymentMethods = [
    { id: "credit-card", title: "Cartão de Crédito" },
    { id: "pix", title: "PIX" },
    { id: "boleto", title: "Boleto Bancário" },
];

export default function Checkout() {
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
        deliveryMethods[0]
    );
    const [selectedAddress, setSelectedAddress] = useState(null); // Endereço selecionado
    const [showNewAddressForm, setShowNewAddressForm] = useState(false); // Mostrar formulário de novo endereço

    const handleNewAddressClick = () => {
        setSelectedAddress(null); // Desmarca qualquer endereço salvo
        setShowNewAddressForm(true); // Mostra o formulário de novo endereço
    };

    const handleAddressSelect = (address: SetStateAction<null>) => {
        setSelectedAddress(address);
        setShowNewAddressForm(false); // Esconde o formulário ao selecionar um endereço salvo
    };

    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Finalizar Compra</h2>

                <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    <div>
                        <div>
                            <h2 className="text-lg font-medium text-gray-900">
                                Informações de Contato
                            </h2>

                            <div className="mt-4">
                                <label
                                    htmlFor="email-address"
                                    className="block text-sm/6 font-medium text-gray-700"
                                >
                                    Endereço de e-mail
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email-address"
                                        name="email-address"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h2 className="text-lg font-medium text-gray-900">
                                Informações de Entrega
                            </h2>

                            {/* Seleção de endereço salvo ou novo */}
                            <div className="mt-4">
                                <h3 className="text-sm font-medium text-gray-700">
                                    Escolher um endereço salvo ou criar novo
                                </h3>
                                <RadioGroup
                                    value={selectedAddress}
                                    onChange={handleAddressSelect}
                                    className="mt-4 space-y-4"
                                >
                                    {savedAddresses.map((address) => (
                                        <Radio
                                            key={address.id}
                                            value={address}
                                            className="group relative flex cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-orange-300 data-checked:border-primary data-checked:bg-orange-50"
                                        >
                                            <span className="flex flex-1">
                                                <span className="flex flex-col">
                                                    <span className="block text-sm font-medium text-gray-900">
                                                        {address.name}
                                                    </span>
                                                    <span className="mt-1 text-sm text-gray-500">
                                                        {address.address}
                                                        {address.apartment &&
                                                            `, ${address.apartment}`}
                                                    </span>
                                                    <span className="mt-1 text-sm text-gray-500">
                                                        {address.city},{" "}
                                                        {address.region},{" "}
                                                        {address.postalCode}
                                                    </span>
                                                    <span className="mt-1 text-sm text-gray-500">
                                                        {address.phone}
                                                    </span>
                                                </span>
                                            </span>
                                            <CheckCircleIcon
                                                aria-hidden="true"
                                                className="size-6 text-primary group-not-data-checked:hidden"
                                            />
                                            <span
                                                aria-hidden="true"
                                                className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-primary group-data-focus:border"
                                            />
                                        </Radio>
                                    ))}
                                </RadioGroup>

                                <div className="mt-6">
                                    <button
                                        type="button"
                                        onClick={handleNewAddressClick}
                                        className="flex items-center text-sm font-medium text-primary hover:text-orange-600 transition-colors duration-200"
                                    >
                                        <span className="mr-2">+</span> Criar
                                        novo endereço
                                    </button>
                                </div>
                            </div>

                            {/* Formulário para novo endereço (mostrado apenas se o usuário clicar em "Criar novo endereço") */}
                            {showNewAddressForm && (
                                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    <div>
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm/6 font-medium text-gray-700"
                                        >
                                            Nome
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="first-name"
                                                name="first-name"
                                                type="text"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm/6 font-medium text-gray-700"
                                        >
                                            Sobrenome
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="organization"
                                            className="block text-sm/6 font-medium text-gray-700"
                                        >
                                            Organização (opcional)
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="organization"
                                                name="organization"
                                                type="text"
                                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="address"
                                            className="block text-sm/6 font-medium text-gray-700"
                                        >
                                            Endereço
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="address"
                                                name="address"
                                                type="text"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="apartment"
                                            className="block text-sm/6 font-medium text-gray-700"
                                        >
                                            Complemento (opcional)
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="apartment"
                                                name="apartment"
                                                type="text"
                                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="city"
                                            className="block text-sm/6 font-medium text-gray-700"
                                        >
                                            Cidade
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="city"
                                                name="city"
                                                type="text"
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="country"
                                            className="block text-sm/6 font-medium text-gray-700"
                                        >
                                            País
                                        </label>
                                        <div className="mt-2 grid grid-cols-1">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 border border-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                            >
                                                <option>Angola</option>
                                            </select>
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="region"
                                            className="block text-sm/6 font-medium text-gray-700"
                                        >
                                            Província
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="region"
                                                name="region"
                                                type="text"
                                                autoComplete="address-level1"
                                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="postal-code"
                                            className="block text-sm/6 font-medium text-gray-700"
                                        >
                                            Código Postal
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="postal-code"
                                                name="postal-code"
                                                type="text"
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm/6 font-medium text-gray-700"
                                        >
                                            Telefone
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="text"
                                                autoComplete="tel"
                                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <fieldset>
                                <legend className="text-lg font-medium text-gray-900">
                                    Método de Entrega
                                </legend>
                                <RadioGroup
                                    value={selectedDeliveryMethod}
                                    onChange={setSelectedDeliveryMethod}
                                    className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
                                >
                                    {deliveryMethods.map((deliveryMethod) => (
                                        <Radio
                                            key={deliveryMethod.id}
                                            value={deliveryMethod}
                                            aria-label={deliveryMethod.title}
                                            aria-description={`${deliveryMethod.turnaround} por ${deliveryMethod.price}`}
                                            className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-xs focus:outline-hidden data-checked:border-transparent data-focus:ring-2 data-focus:ring-primary"
                                        >
                                            <span className="flex flex-1">
                                                <span className="flex flex-col">
                                                    <span className="block text-sm font-medium text-gray-900">
                                                        {deliveryMethod.title}
                                                    </span>
                                                    <span className="mt-1 flex items-center text-sm text-gray-500">
                                                        {
                                                            deliveryMethod.turnaround
                                                        }
                                                    </span>
                                                    <span className="mt-6 text-sm font-medium text-gray-900">
                                                        {deliveryMethod.price}
                                                    </span>
                                                </span>
                                            </span>
                                            <CheckCircleIcon
                                                aria-hidden="true"
                                                className="size-5 text-primary group-not-data-checked:hidden"
                                            />
                                            <span
                                                aria-hidden="true"
                                                className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-primary group-data-focus:border"
                                            />
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            </fieldset>
                        </div>

                        {/* Pagamento */}
                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h2 className="text-lg font-medium text-gray-900">
                                Pagamento
                            </h2>

                            <fieldset className="mt-4">
                                <legend className="sr-only">
                                    Tipo de pagamento
                                </legend>
                                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                    {paymentMethods.map(
                                        (paymentMethod, paymentMethodIdx) => (
                                            <div
                                                key={paymentMethod.id}
                                                className="flex items-center"
                                            >
                                                <input
                                                    defaultChecked={
                                                        paymentMethodIdx === 0
                                                    }
                                                    id={paymentMethod.id}
                                                    name="payment-type"
                                                    type="radio"
                                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-primary checked:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                                />
                                                <label
                                                    htmlFor={paymentMethod.id}
                                                    className="ml-3 block text-sm/6 font-medium text-gray-700"
                                                >
                                                    {paymentMethod.title}
                                                </label>
                                            </div>
                                        )
                                    )}
                                </div>
                            </fieldset>

                            <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                                <div className="col-span-4">
                                    <label
                                        htmlFor="card-number"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        Número do cartão
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="card-number"
                                            name="card-number"
                                            type="text"
                                            autoComplete="cc-number"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-4">
                                    <label
                                        htmlFor="name-on-card"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        Nome no cartão
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name-on-card"
                                            name="name-on-card"
                                            type="text"
                                            autoComplete="cc-name"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-3">
                                    <label
                                        htmlFor="expiration-date"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        Data de validade (MM/AA)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="expiration-date"
                                            name="expiration-date"
                                            type="text"
                                            autoComplete="cc-exp"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="cvc"
                                        className="block text-sm/6 font-medium text-gray-700"
                                    >
                                        CVC
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="cvc"
                                            name="cvc"
                                            type="text"
                                            autoComplete="csc"
                                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resumo do pedido */}
                    <div className="mt-10 lg:mt-0">
                        <h2 className="text-lg font-medium text-gray-900">
                            Resumo do Pedido
                        </h2>

                        <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-xs">
                            <h3 className="sr-only">Itens no seu carrinho</h3>
                            <ul
                                role="list"
                                className="divide-y divide-gray-200"
                            >
                                {products.map((product) => (
                                    <li
                                        key={product.id}
                                        className="flex px-4 py-6 sm:px-6"
                                    >
                                        <div className="shrink-0">
                                            <Image
                                                alt={product.imageAlt}
                                                src={product.imageSrc}
                                                className="w-20 rounded-md"
                                            />
                                        </div>

                                        <div className="ml-6 flex flex-1 flex-col">
                                            <div className="flex">
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-sm">
                                                        <a
                                                            href={product.href}
                                                            className="font-medium text-gray-700 hover:text-primary"
                                                        >
                                                            {product.title}
                                                        </a>
                                                    </h4>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {product.type}
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {product.weight}
                                                    </p>
                                                </div>

                                                <div className="ml-4 flow-root shrink-0">
                                                    <button
                                                        type="button"
                                                        className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                                                    >
                                                        <span className="sr-only">
                                                            Remover
                                                        </span>
                                                        <TrashIcon
                                                            aria-hidden="true"
                                                            className="size-5"
                                                        />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex flex-1 items-end justify-between pt-2">
                                                <p className="mt-1 text-sm font-medium text-gray-900">
                                                    {product.price}
                                                </p>

                                                <div className="ml-4">
                                                    <div className="grid grid-cols-1">
                                                        <select
                                                            id="quantity"
                                                            name="quantity"
                                                            aria-label="Quantidade"
                                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 border border-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
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
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Subtotal</dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        Kz 25,00
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Entrega</dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        Kz 10,00
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm">Taxas</dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        Kz 2,00
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <dt className="text-base font-medium">
                                        Total
                                    </dt>
                                    <dd className="text-base font-medium text-gray-900">
                                        Kz 37,00
                                    </dd>
                                </div>
                            </dl>

                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <button
                                    type="submit"
                                    className="w-full rounded-md border border-transparent bg-primary px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-orange-600 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                                >
                                    Confirmar Pedido
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
