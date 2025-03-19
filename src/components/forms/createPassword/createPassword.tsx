"use client";

import { ReusableForm } from "@/components/shared/authForm/authForm";
import Input from "@/components/shared/input/input";
import Button from "@/components/shared/button/button";
import { createPasswordSchema } from "@/validators/createPassword.validator";

const CreatePasswordForm = () => {
    const handleSubmit = (data: {
        password: string;
        repeatPassword: string;
    }) => {
        console.log("Login:", data);
    };

    return (
        <ReusableForm
            title="Senha"
            description="Viu como é fácil? Crie a nova senha."
            onSubmit={handleSubmit}
            schema={createPasswordSchema}
        >
            <Input name="password" placeholder="Senha" />
            <Input name="repeatPassword" placeholder="Repita a senha" />

            <Button
                label="Salvar"
                variant="default"
                type="submit"
                className="w-full"
            />
        </ReusableForm>
    );
};

export default CreatePasswordForm;
