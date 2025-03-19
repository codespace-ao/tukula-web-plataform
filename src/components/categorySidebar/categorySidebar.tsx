import { ChevronRight } from "lucide-react";
import React from "react";

interface Category {
    name: string;
    subCategories?: string[];
    isActive?: boolean;
}

const categories: Category[] = [
    { name: "Dietas" },
    { name: "Pratos de Carne", isActive: true },
    { name: "Sopas" },
    { name: "Saladas" },
    { name: "Sobremesas" },
    { name: "Especial" },
];

const SectionTitleAtom: React.FC<{ title: string }> = ({ title }) => {
    return (
        <h3 className="text-primary font-primary font-bold text-md py-4 pl-4 uppercase border border-b-0">
            {title}
        </h3>
    );
};

const CategoryListAtom: React.FC<{ categories: Category[] }> = ({
    categories,
}) => {
    return (
        <ul className="border mb-6">
            {categories.map((category) => (
                <li key={category.name} className="">
                    <a
                        href={`#${category.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        className={`text-gray-700 text-sm hover:text-primary flex items-center border-t py-4 pl-4 ${
                            category.isActive ? "text-primary font-medium" : ""
                        }`}
                    >
                        {category.name}
                        {category.subCategories && (
                            <ChevronRight className="w-4 h-4 ml-auto" />
                        )}
                    </a>
                    {category.subCategories && (
                        <ul className="ml-4 space-y-1">
                            {category.subCategories.map((sub, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-500 text-xs hover:text-primary py-1 block"
                                    >
                                        {sub}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

const CategorySidebar: React.FC = () => {
    return (
        <aside className="w-full lg:w-64 bg-white  rounded-none">
            <SectionTitleAtom title="Categorias" />
            <CategoryListAtom categories={categories} />
            <SectionTitleAtom title="Marcas" />
            <CategoryListAtom categories={categories} />
        </aside>
    );
};

export default CategorySidebar;
