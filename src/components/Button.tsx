import { classNames } from '../utils';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'icon' | 'outline';
  className?: string;
  [x: string]: any;
};

const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        variant === 'primary'
          ? 'bg-green-800 text-schemes-primary-container hover:opacity-80 py-3 px-4 rounded-xl'
          : variant === 'icon'
          ? 'max-w-12 h-auto xl:max-w-16 aspect-square rounded-full bg-schemes-surface-container-low flex-shrink-0'
          : 'border border-schemes-outline hover:bg-schemes-surface-container  py-3 px-4 rounded-xl',
        'w-full flex items-center justify-center gap-2 transition-all duration-300 ease-in-out',
        className as string
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
