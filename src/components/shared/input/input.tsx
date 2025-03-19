import { useFormContext, FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

export default function Input ({ name, type = 'text', placeholder, className }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;

  const baseStyles = 'w-full px-6 h-[54px] rounded-[18px] border border-[1.3px] bg-white text-dark focus:outline-none focus:ring-2 focus:ring-light transition-all';
  const variantStyles = {
    default: 'border-gray-300',
    error: 'border-red-500 ring-red-200',
    success: 'border-green-500 ring-green-200',
  };

  const getVariant = () => {
    if (error) return 'error';
    return 'default';
  };

  return (
    <div className={twMerge('mb-4', className)}>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={twMerge(baseStyles, variantStyles[getVariant()], className)}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error.message as string}</p>}
    </div>
  );
};