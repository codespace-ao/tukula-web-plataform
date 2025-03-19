"use client";

import SucessfulForm from "@/components/forms/successful/successful";
import { useRouter } from "next/navigation";

export default function Successful() {
    const router = useRouter();

    return (
        <main>
            <SucessfulForm
                title="Parabéns!"
                description="O seu contacto foi verificado."
                label="Preencher perfil"
                action={(data) => {
                    console.log(data);
                    router.push("/auth/personal-data");
                }}
            />
        </main>
    );
}
