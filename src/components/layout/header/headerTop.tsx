import { Phone, Mail, Info } from "lucide-react";

const HeaderTop = () => {
    return (
        <div className="flex justify-between items-center p-3 px-[300px] text-dark text-sm border border-b">
            <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-200 transition-colors">
                    Sobre Nós
                </a>
                <a href="#" className="hover:text-yellow-200 transition-colors">
                    Serviços ao Cliente
                </a>
                <a href="#" className="hover:text-yellow-200 transition-colors">
                    Acompanhamento de Pedido
                </a>
                <a href="#" className="hover:text-yellow-200 transition-colors">
                    Entre em Contato
                </a>
            </div>
            <div className="flex space-x-4 items-center">
                <span className="flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    +244 948 951 028
                </span>
                <span className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    <a
                        href="mailto:destek@maichef.com"
                        className="hover:text-yellow-200"
                    >
                        geral@codespace.it.ao
                    </a>
                </span>
            </div>
        </div>
    );
};

export default HeaderTop;
