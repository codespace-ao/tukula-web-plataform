"use client";

import { registerSchema } from "@/validators/registerForm.validator";
import { ReusableForm } from "@/components/shared/authForm/authForm";
import Input from "@/components/shared/input/input";
import Button from "@/components/shared/button/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (data: {
        name: string;
        emailOrPhone: string;
        password: string;
        repeatPassword: string;
    }) => {
        const requestBody = {
            name: data.name,
            email: data.emailOrPhone,
            password: data.password,
            password_confirmation: data.repeatPassword,
        };

        try {
            setIsLoading(true);
            const response = await fetch(
                "https://api-tukula.onrender.com/api/v01/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            if (!response.ok) {
                alert("Failed to register");
            }
            router.push(`/auth/confirm-contact/${data.emailOrPhone}`);
            alert("Registration successful");
        } catch (error) {
            console.error("Error during registration:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ReusableForm
            title="Registro"
            description="Hey, use o registro simplificado. Entre com seus provedores favoritos"
            onSubmit={handleSubmit}
            schema={registerSchema}
        >
            <div className="flex gap-4 mb-4">
                <Button
                    label="Google"
                    variant="primary"
                    className="flex-1"
                    disabled
                />
                <Button
                    label="Apple"
                    variant="default"
                    className="flex-1"
                    disabled
                />
            </div>

            <div className="text-center my-4 text-gray-400 flex items-center justify-center gap-x-2">
                <span className="flex-1 h-[1px] bg-zinc-200" />
                ou
                <span className="flex-1 h-[1px] bg-zinc-200" />
            </div>
            <Input name="name" placeholder="Nome" />

            <Input name="emailOrPhone" placeholder="E-mail" type="email" />
            <Input name="password" placeholder="Senha" type="password" />
            <Input
                name="repeatPassword"
                placeholder="Repita a senha"
                type="password"
            />

            <Button
                label="Registrar"
                variant="default"
                type="submit"
                loading={isLoading}
                className="w-full"
            />
            <Link
                href="/auth/login"
                className="text-center mt-4 text-dark flex items-center justify-between px-4 py-2.5 border rounded-[18px] h-max hover:bg-gray-50 transition-colors"
                aria-label="Crie uma conta"
            >
                <div className="flex flex-col items-start justify-start flex-1">
                    <p className="font-semibold">Já tem uma conta?</p>
                    <p className="text-[0.9rem]">
                        Entre agora, não espere mais.
                    </p>
                </div>
                <ArrowRight strokeWidth={1.5} className="row-span-1" />
            </Link>
        </ReusableForm>
    );
};

export default RegisterForm;
