import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={`${className} btn
${!(className && className.includes('btn-outline')) ? 'btn-default' : ''}
        h-10 px-4 py-2
    `}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
