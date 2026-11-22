import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'neutral'
type BadgeSize = 'sm' | 'md'

const VARIANTS: Record<BadgeVariant, string> = {
    primary: 'bg-primary-50 text-primary-600',
    success: 'bg-success-50 text-success-600',
    warning: 'bg-warning-50 text-warning-600',
    danger: 'bg-danger-50 text-danger-600',
    neutral: 'bg-slate-100 text-muted'
}

const SIZES: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm'
}

export interface BadgeProps extends ComponentProps<'span'> {
    variant?: BadgeVariant
    size?: BadgeSize
}

export function Badge({
    variant = 'primary',
    size = 'sm',
    className,
    children,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-1 rounded-full font-medium whitespace-nowrap',
                VARIANTS[variant],
                SIZES[size],
                className
            )}
            {...props}
        >
            {children}
        </span>
    )
}
