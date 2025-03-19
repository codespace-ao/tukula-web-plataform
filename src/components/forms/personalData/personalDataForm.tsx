"use client";

import { ReusableForm } from "@/components/shared/authForm/authForm";
import Input from "@/components/shared/input/input";
import Button from "@/components/shared/button/button";
import { ArrowRight } from "lucide-react";
import { personalDataSchema } from "@/validators/personlData.validator";

const PersonalDataForm = () => {
    const handleSubmit = (data: {
        firstName: string;
        lastName: string;
        birthDate: string;
        gender: string;
        phone: string;
    }) => {
        console.log("personalData:", data);
    };

    return (
        <ReusableForm
            title="Dados pessoais"
            description="Bem vindo! Vamos criar o seu perfil."
            onSubmit={handleSubmit}
            schema={personalDataSchema}
        >
            <div className="flex gap-x-4 items-center justify-between">
                <Input name="firstName" placeholder="Nome" className="!mb-0" />
                <Input
                    name="lastName"
                    type="text"
                    placeholder="Sobrenome"
                    className="!mb-0"
                />
            </div>
            <Input name="birthDate" placeholder="Data de nascimento" />
            <Input name="gender" type="text" placeholder="Gênero" />
            <Input name="phone" type="tell" placeholder="Telefone" />
            <Button
                label="Avançar"
                variant="default"
                type="submit"
                icon={<ArrowRight color="#fff" strokeWidth={1.5} />}
                className="w-full"
            />
        </ReusableForm>
    );
};

export default PersonalDataForm;
