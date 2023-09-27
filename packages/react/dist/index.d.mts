import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
interface ButtonProps extends ComponentProps<'button'>, ButtonVariantsProps {
}
declare function Button({ variant, className, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

export { Button, ButtonVariantsProps };
