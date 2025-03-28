import { loginSchema } from "@/validators/loginForm.validator";
import { ReusableForm } from "@/components/shared/authForm/authForm";
import Input from "@/components/shared/input/input";
import Button from "@/components/shared/button/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {useRouter} from 'next/navigation'
import Cookies from 'js-cookie'

const LoginForm = () => {
    const router = useRouter()
    const handleSubmit = async(data: { emailOrPhone: string; password: string }) => {
        const response = await fetch(
                "https://api-tukula.onrender.com/api/v01/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({email: data.emailOrPhone, password: data.password}),
                }
            );

            if (!response.ok) {
                alert("Failed to login");
            }
            Cookies.set('auth_token', 'aaaaaa')
            router.push(`/`);
            alert("Login successful");
    };

    return (
        <ReusableForm
            title="Login"
            description="Hey, use o login simplificado. Entre com seus provedores favoritos"
            onSubmit={handleSubmit}
            schema={loginSchema}
        >
            <div className="flex gap-4 mb-4">
                <Button label="Google" variant="primary" className="flex-1" />
                <Button label="Apple" variant="default" className="flex-1" />
            </div>

            <div className="text-center my-4 text-gray-400 flex items-center justify-center gap-x-2">
                <span className="flex-1 h-[1px] bg-zinc-200" />
                ou
                <span className="flex-1 h-[1px] bg-zinc-200" />
            </div>
            <Input name="emailOrPhone" placeholder="E-mail ou telefone" />
            <Input name="password" type="password" placeholder="Senha" />
            <div className="flex justify-end">
                <Link
                    href="/auth/recover-credentials"
                    className="text-sm text-dark font-regular cursor-pointer hover:underline"
                    aria-label="Esqueceu a senha?"
                >
                    Esqueceu a senha?
                </Link>
            </div>
            <Button
                label="Entrar"
                variant="default"
                type="submit"
                className="w-full"
            />
            <Link
                href="/auth/register"
                className="text-center mt-4 text-dark flex items-center justify-between px-4 py-2.5 border rounded-[18px] h-max hover:bg-gray-50 transition-colors"
                aria-label="Crie uma conta"
            >
                <div className="flex flex-col items-start justify-start flex-1">
                    <p className="font-semibold">Ainda não tem uma conta?</p>
                    <p className="text-[0.9rem]">
                        Crie uma conta, não espere mais.
                    </p>
                </div>
                <ArrowRight strokeWidth={1.5} className="row-span-1" />
            </Link>
        </ReusableForm>
    );
};

export default LoginForm;
