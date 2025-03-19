import Navbar from "@/components/layout/navbar/navbar";
import teamDoddle from "@/assets/doddles/team.svg"
import Image from "next/image";

interface IAuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
    return (
        <main className="w-full h-screen">
            <section className="mainAuth w-full h-1/2 relative">
            <Navbar/>
                <div className="absolute w-screen h-screen flex items-center justify-between px-[250px] top-0 left-0">
                    <div className="text-white text-start mt-[150px]">
                        <h1 className="text-6xl font-bold font-focus text-focus mb-[60px]">Transforme excedentes <br /> em soluções</h1>
                        <Image src={teamDoddle} alt="logo" width={300} height={300}/>
                        <p className="text-dark text-xl font-regular max-w-[600px]">Venda o excedente, ajude famílias com preços inclusivos, adquira receita pelos passivos. Combata a fome e promova inclusão com a Tukula. Todos ganham com essa mudança!</p>
                    </div>
                    {children}
                </div>
            </section>
            <section className="bg-light w-full h-1/2"></section>
        </main>
    );
}
