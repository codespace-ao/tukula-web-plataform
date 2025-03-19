import SucessfulForm from "@/components/forms/successful/successful";

export default function Successful() {
    return (
        <main>
            <SucessfulForm
                title={"Sucesso!"}
                description={"O seu contacto foi verificado com sucesso!"}
                label="Preencher perfil"
                action={(data) => {
                    console.log(data);
                }}
            />
        </main>
    );
}
