import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';

type FormData = Record<string, any>;

interface ReusableFormProps<T extends FormData> {
  onSubmit?: (data: T) => void;
  title: string;
  description?: string;
  schema?: any; 
  defaultValues?: T;
  children: ReactNode;
}

export const ReusableForm = <T extends FormData>({
  onSubmit,
  title,
  description,
  schema,
  defaultValues = {} as T,
  children,
}: ReusableFormProps<T>) => {
  const methods = useForm<T>({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
  });

  const { handleSubmit } = methods;

  return (
    <div className="bg-white rounded-[24px] shadow-md p-8 w-[425px]">
      <h2 className="text-3xl font-bold mb-4 font-primary">{title}</h2>
      {description && <p className="text-gray-600 font-regular mb-6">{description}</p>}

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit || (() => {}))} className="space-y-4" noValidate>
          {children}
        </form>
      </FormProvider>
    </div>
  );
};