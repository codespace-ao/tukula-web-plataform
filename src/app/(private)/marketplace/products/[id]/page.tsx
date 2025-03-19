import { Fragment } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import alface from "@/assets/images/products/alface.jpg";
import Image from "next/image";

// Ajustando o produto para o contexto da Tukula
const product = {
    name: "Kit de Vegetais Excedentes",
    version: { name: "1.0", date: "19 de Março, 2025", datetime: "2025-03-19" },
    price: "Kz 25,00",
    description:
        "O Kit de Vegetais Excedentes da Tukula inclui uma seleção de vegetais frescos e excedentes, como alface, cenoura e tomate, perfeitos para uma semana saudável e sustentável. Ajude a reduzir o desperdício alimentar enquanto desfruta de produtos de qualidade!",
    highlights: [
        "5kg de vegetais frescos e excedentes",
        "Produzido por agricultores locais em Angola",
        "Embalagem sustentável e ecológica",
    ],
    imageSrc: alface.src,
    imageAlt: "Kit de vegetais excedentes com alface, cenoura e tomate.",
};

// Ajustando os comentários para o contexto do produto
const reviews = {
    average: 4.5,
    featured: [
        {
            id: 1,
            rating: 5,
            content: `
                <p>Este kit de vegetais excedentes é perfeito para a minha família! A alface estava super fresca e adorei saber que estou ajudando a reduzir o desperdício. A Tukula está de parabéns!</p>
            `,
            date: "10 de Março, 2025",
            datetime: "2025-03-10",
            author: "Ana Silva",
            avatarSrc:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
        },
        {
            id: 2,
            rating: 4,
            content: `
                <p>Adorei a ideia de comprar vegetais excedentes! O kit chegou em ótimas condições, e os vegetais são de alta qualidade. Só achei que poderia ter mais variedade, mas no geral, é uma excelente iniciativa.</p>
            `,
            date: "5 de Março, 2025",
            datetime: "2025-03-05",
            author: "João Mendes",
            avatarSrc:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
        },
    ],
};

// Ajustando as FAQs para o contexto do produto
const faqs = [
    {
        question: "De onde vêm os vegetais deste kit?",
        answer: "Os vegetais são fornecidos por agricultores locais em Angola, que trabalham com a Tukula para reduzir o desperdício alimentar. Todos os produtos são frescos e excedentes, garantindo qualidade e sustentabilidade.",
    },
    {
        question: "Posso escolher os vegetais do kit?",
        answer: "Atualmente, os kits são pré-selecionados para garantir a melhor combinação de vegetais excedentes disponíveis. No entanto, estamos trabalhando para oferecer opções personalizáveis no futuro!",
    },
];

// Ajustando a licença para o contexto da Tukula
const license = {
    href: "#",
    summary:
        "Para uso pessoal e doméstico. Não é permitido revender ou redistribuir os produtos em seu estado original ou modificado.",
    content: `
        <h4>Visão Geral</h4>
        
        <p>Para uso pessoal e doméstico. Não é permitido revender ou redistribuir os produtos em seu estado original ou modificado.</p>
        
        <ul role="list">
            <li>Você pode usar os vegetais para consumo próprio ou para doação.</li>
            <li>Não é necessário atribuir crédito à Tukula ao usar os produtos.</li>
        </ul>
        
        <h4>O que você pode fazer</h4>
        
        <ul role="list">
            <li>Usar os vegetais livremente para consumo pessoal ou familiar.</li>
            <li>Preparar refeições e compartilhar com amigos e familiares.</li>
        </ul>
        
        <h4>O que você não pode fazer</h4>
        
        <ul role="list">
            <li>Não revenda os vegetais em seu estado original ou modificado.</li>
            <li>Não use os produtos para atividades comerciais sem autorização da Tukula.</li>
        </ul>
    `,
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function ProductPage() {
    return (
        <div className="bg-white">
            <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {/* Product */}
                <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                    {/* Product image */}
                    <div className="lg:col-span-4 lg:row-end-1">
                        <Image
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="aspect-4/3 w-full rounded-lg bg-gray-100 object-cover"
                        />
                    </div>

                    {/* Product details */}
                    <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
                        <div className="flex flex-col-reverse">
                            <div className="mt-4">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                    {product.name}
                                </h1>

                                <h2
                                    id="information-heading"
                                    className="sr-only"
                                >
                                    Informações do Produto
                                </h2>
                                <p className="mt-2 text-sm text-gray-500">
                                    Versão {product.version.name} (Atualizado em{" "}
                                    <time dateTime={product.version.datetime}>
                                        {product.version.date}
                                    </time>
                                    )
                                </p>
                            </div>

                            <div>
                                <h3 className="sr-only">Avaliações</h3>
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            aria-hidden="true"
                                            className={classNames(
                                                reviews.average > rating
                                                    ? "text-pr"
                                                    : "text-gray-300",
                                                "size-5 shrink-0"
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">
                                    {reviews.average} de 5 estrelas
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 text-gray-500">
                            {product.description}
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                            <button
                                type="button"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-pr px-8 py-3 text-base font-medium text-white bg-primary focus:ring-2 focus:ring-pr focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                            >
                                Comprar por {product.price}
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center justify-center rounded-md border border-pr bg-white px-8 py-3 text-base font-medium text-pr hover:bg-orange-50 focus:ring-2 focus:ring-pr focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                            >
                                Adicionar ao Carrinho
                            </button>
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h3 className="text-sm font-medium text-gray-900">
                                Destaques
                            </h3>
                            <div className="mt-4">
                                <ul
                                    role="list"
                                    className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300"
                                >
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className="pl-2">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h3 className="text-sm font-medium text-gray-900">
                                Termos de Uso
                            </h3>
                            <p className="mt-4 text-sm text-gray-500">
                                {license.summary}{" "}
                                <a
                                    href={license.href}
                                    className="font-medium text-pr hover:text-primary"
                                >
                                    Leia os termos completos
                                </a>
                            </p>
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h3 className="text-sm font-medium text-gray-900">
                                Compartilhar
                            </h3>
                            <ul
                                role="list"
                                className="mt-4 flex items-center space-x-6"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="flex size-6 items-center justify-center text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">
                                            Compartilhar no Facebook
                                        </span>
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                            className="size-5"
                                        >
                                            <path
                                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex size-6 items-center justify-center text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">
                                            Compartilhar no Instagram
                                        </span>
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className="size-6"
                                        >
                                            <path
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex size-6 items-center justify-center text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">
                                            Compartilhar no X
                                        </span>
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                            className="size-5"
                                        >
                                            <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
                        <TabGroup>
                            <div className="border-b border-gray-200">
                                <TabList className="-mb-px flex space-x-8">
                                    <Tab className="border-b-2 border-transparent py-6 text-sm font-medium whitespace-nowrap text-gray-700 hover:border-gray-300 hover:text-gray-800 data-selected:border-pr data-selected:text-pr">
                                        Avaliações de Clientes
                                    </Tab>
                                    <Tab className="border-b-2 border-transparent py-6 text-sm font-medium whitespace-nowrap text-gray-700 hover:border-gray-300 hover:text-gray-800 data-selected:border-pr data-selected:text-pr">
                                        Perguntas Frequentes
                                    </Tab>
                                    <Tab className="border-b-2 border-transparent py-6 text-sm font-medium whitespace-nowrap text-gray-700 hover:border-gray-300 hover:text-gray-800 data-selected:border-pr data-selected:text-pr">
                                        Termos de Uso
                                    </Tab>
                                </TabList>
                            </div>
                            <TabPanels as={Fragment}>
                                <TabPanel className="-mb-10">
                                    <h3 className="sr-only">
                                        Avaliações de Clientes
                                    </h3>

                                    {reviews.featured.map(
                                        (review, reviewIdx) => (
                                            <div
                                                key={review.id}
                                                className="flex space-x-4 text-sm text-gray-500"
                                            >
                                                <div className="flex-none py-10">
                                                    <Image
                                                        alt=""
                                                        src={review.avatarSrc}
                                                        className="size-10 rounded-full bg-gray-100"
                                                    />
                                                </div>
                                                <div
                                                    className={classNames(
                                                        reviewIdx === 0
                                                            ? ""
                                                            : "border-t border-gray-200",
                                                        "py-10"
                                                    )}
                                                >
                                                    <h3 className="font-medium text-gray-900">
                                                        {review.author}
                                                    </h3>
                                                    <p>
                                                        <time
                                                            dateTime={
                                                                review.datetime
                                                            }
                                                        >
                                                            {review.date}
                                                        </time>
                                                    </p>

                                                    <div className="mt-4 flex items-center">
                                                        {[0, 1, 2, 3, 4].map(
                                                            (rating) => (
                                                                <StarIcon
                                                                    key={rating}
                                                                    aria-hidden="true"
                                                                    className={classNames(
                                                                        review.rating >
                                                                            rating
                                                                            ? "text-pr"
                                                                            : "text-gray-300",
                                                                        "size-5 shrink-0"
                                                                    )}
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                    <p className="sr-only">
                                                        {review.rating} de 5
                                                        estrelas
                                                    </p>

                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: review.content,
                                                        }}
                                                        className="mt-4 text-sm/6 text-gray-500"
                                                    />
                                                </div>
                                            </div>
                                        )
                                    )}
                                </TabPanel>

                                <TabPanel className="text-sm text-gray-500">
                                    <h3 className="sr-only">
                                        Perguntas Frequentes
                                    </h3>

                                    <dl>
                                        {faqs.map((faq) => (
                                            <Fragment key={faq.question}>
                                                <dt className="mt-10 font-medium text-gray-900">
                                                    {faq.question}
                                                </dt>
                                                <dd className="mt-2 text-sm/6 text-gray-500">
                                                    <p>{faq.answer}</p>
                                                </dd>
                                            </Fragment>
                                        ))}
                                    </dl>
                                </TabPanel>

                                <TabPanel className="pt-10">
                                    <h3 className="sr-only">Termos de Uso</h3>

                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: license.content,
                                        }}
                                        className="text-sm text-gray-500 [&_h4]:mt-5 [&_h4]:font-medium [&_h4]:text-gray-900 [&_li]:pl-2 [&_li::marker]:text-gray-300 [&_p]:my-2 [&_p]:text-sm/6 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-sm/6 [&>:first-child]:mt-0"
                                    />
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}
