import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";

type CardVariant = 'outlined' | 'elevated'

const VARIANTS: Record<CardVariant, string> = {
    outlined: 'border border-border',
    elevated: 'shadow-lg shadow-slate-200'
}

export interface CardProps extends ComponentProps<'div'> {
    variant?: CardVariant
    interactive?: boolean
}

export function Card({
    variant = 'outlined',
    interactive = false,
    className,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                'flex flex-col overflow-hidden rounded-card bg-surface text-foreground',
                VARIANTS[variant],
                interactive && 'cursor-pointer transition hover:shadow-xl hover:shadow-slate-200',
                className
            )}
            {...props}
        />
    )
}

export function CardHeader({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('flex flex-col gap-1 p-6 pb-3', className)} {...props} />
}

export function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
    return <h3 className={cn('text-lg font-semibold', className)} {...props} />
}

export function CardDescription({ className, ...props }: ComponentProps<'p'>) {
    return <p className={cn('text-sm text-muted', className)} {...props} />
}

export function CardContent({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('px-6 py-3', className)} {...props} />
}

export function CardFooter({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('mt-auto flex items-center gap-2 p-6 pt-3', className)} {...props} />
}
