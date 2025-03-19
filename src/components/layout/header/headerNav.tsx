const navItems = [
    "Dieta",
    "Carne",
    "Sopas",
    "Saladas",
    "Sobremesas",
    "Especial",
];

const HeaderNav = () => {
    return (
        <nav className="flex-1 flex justify-center space-x-4">
            {navItems.map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-primary font-semibold transition-colors"
                >
                    {item}
                </a>
            ))}
        </nav>
    );
};

export default HeaderNav;
