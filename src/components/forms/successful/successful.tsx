import { ReusableForm } from "@/components/shared/authForm/authForm";
import Image from "next/image";
import Button from "@/components/shared/button/button";
import success from "@/assets/doddles/strategy.svg";
import { ArrowRight } from "lucide-react";

interface  ISuccessFormProps {
    title: string;
    description: string;
    label: string;
    action: (data: FormData)=>void;
}

const SucessfulForm = ({title, description, label, action}: ISuccessFormProps) => {

    return (
        <ReusableForm
            title={title}
            description={description}
            onSubmit={action}
        >
            <div className="w-full flex items-center justify-center">
                <Image src={success} alt="" width={400} height={400} />
            </div>
            <Button
                label={label}
                variant="default"
                type="submit"
                icon={<ArrowRight color="#fff" strokeWidth={1.5} />}
                className="w-full"
            />
        </ReusableForm>
    );
};

export default SucessfulForm;
