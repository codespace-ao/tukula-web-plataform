import { Truck, Users, Heart, Leaf } from "lucide-react";

interface Incentive {
    name: string;
    description: string;
    icon: React.ReactNode;
}

const incentives: Incentive[] = [
    {
        name: "Reduzir o Desperdício",
        description:
            "A Tukula trabalha para minimizar o desperdício de alimentos, conectando excedentes a quem precisa.",
        icon: <Leaf width={60} height={60} strokeWidth={1.5} color="#088841" />,
    },
    {
        name: "Promover a Inclusão",
        description:
            "Fomentamos a inclusão social ao apoiar comunidades vulneráveis com acesso a recursos essenciais.",
        icon: (
            <Users width={60} height={60} strokeWidth={1.5} color="#088841" />
        ),
    },
    {
        name: "Combater a Fome",
        description:
            "Nosso objetivo é combater a fome, garantindo que alimentos cheguem a quem mais precisa.",
        icon: (
            <Heart width={60} height={60} strokeWidth={1.5} color="#088841" />
        ),
    },
    {
        name: "Apoio Sustentável",
        description:
            "Colaboramos com parceiros para criar um impacto sustentável e duradouro na sociedade.",
        icon: (
            <Truck width={60} height={60} strokeWidth={1.5} color="#088841" />
        ),
    },
];

export default function CTA() {
    return (
        <div className="bg-primary bg-opacity-10">
            <div className="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                    {incentives.map((incentive) => (
                        <div key={incentive.name}>
                            {incentive.icon}
                            <h3 className="mt-6 text-sm font-medium text-primary">
                                {incentive.name}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">
                                {incentive.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
