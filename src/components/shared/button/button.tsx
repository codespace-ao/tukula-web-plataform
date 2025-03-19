import { tv } from 'tailwind-variants';
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';
import { TailSpin } from 'react-loader-spinner';

const buttonVariants = tv({
  base: 'px-6 h-[54px] rounded-[18px] font-medium transition-colors duration-200 flex items-center justify-center gap-2 relative',
  variants: {
    variant: {
      primary: 'bg-light text-dark border border-dark',
      default: 'bg-dark text-white',
    },
    loading: {
      true: 'opacity-70 cursor-wait',
      false: '',
    },
    iconPosition: {
      right: 'flex-row-reverse',
    },
    hasTimer: {
      true: 'bg-transparent border border-dark text-dark cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'default',
    loading: false,
  },
  compoundVariants: [
    {
      loading: false,
      hasTimer: false,
      class: 'disabled:text-dark disabled:bg-transparent disabled:border-[#9FA6AB] disabled:border disabled:cursor-not-allowed',
    },
  ],
});

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'default';
  label: string;
  loading?: boolean;
  iconPosition?: 'right';
  timer?: number;
  icon?: ReactNode;
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      variant = 'default',
      loading = false,
      iconPosition,
      timer,
      icon,
      onClick,
      type = 'button',
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const renderTimer = () => {
      if (timer && !loading) {
        return <span className="text-sm absolute right-4 text-dark">{timer}s</span>;
      }
      return null;
    };

    const renderIcon = () => {
      if (icon && !loading && !timer) {
        return <span className="absolute right-4">{icon}</span>;
      }
      return null;
    };

    const renderLoading = () => {
      if (loading) {
        return <TailSpin width={20} />;
      }
      return null;
    };

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading || !!timer}
        className={buttonVariants({
          variant,
          loading,
          iconPosition,
          hasTimer: !!timer,
          className,
        })}
        {...props}
      >
        <span className="flex items-center justify-center gap-2">
          {renderLoading()}
          {!loading && (
            <>
              {label}
              {renderIcon()}
              {renderTimer()}
            </>
          )}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;