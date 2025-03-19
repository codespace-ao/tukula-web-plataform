"use client";

import { ReusableForm } from "@/components/shared/authForm/authForm";
import Image from "next/image";
import Button from "@/components/shared/button/button";
import mail from "@/assets/doddles/email.svg";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface IConfirmContactProps {
    email: string;
}

const RegisterForm = ({ email }: IConfirmContactProps) => {
    const router = useRouter();

    const handleGoBack = () => {
        console.log(email);
        router.back();
    };

    return (
        <ReusableForm
            title="Confirmação"
            description={`Enviamos um link para o contacto fornecido. Verifique sua caixa de entrada e clique no link para verificar.`}
            onSubmit={() => {}}
        >
            <div className="w-full flex items-center justify-center">
                <Image src={mail} alt="" width={200} height={200} />
            </div>
            <Button
                label="Reenvie dentro de"
                variant="primary"
                type="button"
                timer={59}
                disabled={true}
                className="w-full"
            />
            <button
                onClick={handleGoBack}
                className="text-center w-full mt-4 text-dark flex items-center justify-center gap-x-2 px-4 py-2.5 rounded-[18px] h-max hover:bg-gray-50 transition-colors"
                aria-label="Crie uma conta"
            >
                <ArrowLeft strokeWidth={1.5} className="row-span-1" />
                <div className="flex flex-col items-center justify-end">
                    <p>Alterar o contacto</p>
                </div>
            </button>
        </ReusableForm>
    );
};

export default RegisterForm;
