"use client"

import SucessfulForm from "@/components/forms/successful/successful";

export default function Successful() {
    return (
        <main>
            <SucessfulForm
                title="Sucesso!"
                description="O seu perfil está pronto! Entre agora."
                label="Explorar Tukula"
                action={(data) => {
                    console.log(data);
                }}
            />
        </main>
    );
}
