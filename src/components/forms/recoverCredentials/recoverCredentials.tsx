import { loginSchema } from "@/validators/registerForm.validator";
import { ReusableForm } from "@/components/shared/authForm/authForm";
import Input from "@/components/shared/input/input";
import Button from "@/components/shared/button/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const RecoverCredentialsForm = () => {
    const handleSubmit = (data: { emailOrPhone: string }) => {
        console.log("Login:", data);
    };

    return (
        <ReusableForm
            title="Recuperação"
            description="Hey, esqueceu a sua senha? Não faça pranto."
            onSubmit={handleSubmit}
            schema={loginSchema}
        >
            <Input name="emailOrPhone" placeholder="E-mail ou telefone" />

            <Button
                label="Recuperar senha"
                variant="default"
                type="submit"
                className="w-full"
            />
            <Link
                href="/auth/login"
                className="text-center mt-4 text-dark flex items-center justify-between px-4 py-2.5 border rounded-[18px] h-max hover:bg-gray-50 transition-colors"
                aria-label="Crie uma conta"
            >
                <div className="flex flex-col items-start justify-start flex-1">
                    <p className="font-semibold">Ainda não tem uma conta?</p>
                    <p className="text-[0.9rem]">
                        Crie uma conta agora, não espere mais.
                    </p>
                </div>
                <ArrowRight strokeWidth={1.5} className="row-span-1" />
            </Link>
        </ReusableForm>
    );
};

export default RecoverCredentialsForm;
