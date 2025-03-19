"use client"

import { ReusableForm } from "@/components/shared/authForm/authForm";
import Input from "@/components/shared/input/input";
import Button from "@/components/shared/button/button";
import { ArrowRight } from "lucide-react";
import { AddressSchema } from "@/validators/address.validator";

const AddressForm = () => {
    const handleSubmit = (data: { streetAddress: string; communeMunicipality: string; province: string; country: string}) => {
        console.log("personalData:", data);
    };

    return (
        <ReusableForm
            title="Endereço"
            description="Onde deseja receber as suas encomendas?"
            onSubmit={handleSubmit}
            schema={AddressSchema}
            defaultValues={{ streetAddress: "", communeMunicipality: "", province: "", country: "" }}
        >
            <Input name="streetAddress" placeholder="Casa, Rua, Bairro"/>
            <Input name="communeMunicipality" placeholder="Comuna, Município"/>
            <Input name="province" placeholder="Província" />
            <Input name="country" type="text" placeholder="País" />
            <div className="flex gap-4 items-center justify-between">
            <Button
                label="Pular"
                variant="primary"
                type="button"
                className="w-full"
            />
            <Button
                label="Avançar"
                variant="default"
                type="submit"
                icon={<ArrowRight color="#fff" strokeWidth={1.5} />}
                className="w-full"
            />
            </div>
        </ReusableForm>
    );
};

export default AddressForm;
