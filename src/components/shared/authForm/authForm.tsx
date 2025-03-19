"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useState } from "react";
import { z } from "zod";

//@typescript-eslint/no-explicit-any
interface ReusableFormProps<T extends Record<string, unknown>> {
    onSubmit: (data: T) => Promise<void> | void;
    title: string;
    description?: string;
    schema?: z.ZodSchema<T>;
    children: ReactNode;
    submitButtonText?: string;
    className?: string;
}

export const ReusableForm = <T extends Record<string, unknown>>({
    onSubmit,
    title,
    description,
    schema,
    children,
    submitButtonText = "Enviar",
    className = "",
}: ReusableFormProps<T>) => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const methods = useForm<T>({
        resolver: schema ? zodResolver(schema) : undefined,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const handleFormSubmit = async (data: T) => {
        try {
            await onSubmit(data);
            setSuccessMessage("Encomenda realizada com sucesso!");
        } catch (error) {
            console.error("Submission error:", error);
            setSuccessMessage(null);
        }
    };

    return (
        <div
            className={`bg-white rounded-[24px] shadow-md p-8 w-[425px] ${className}`}
        >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 font-primary">
                {title}
            </h2>
            {description && (
                <p className="text-gray-600 font-regular mb-6">{description}</p>
            )}
            {successMessage && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                    {successMessage}
                </div>
            )}

            <FormProvider {...methods}>
                <form
                    onSubmit={handleSubmit(handleFormSubmit)}
                    className="space-y-6"
                    noValidate
                >
                    {children}
                </form>
            </FormProvider>
        </div>
    );
};
