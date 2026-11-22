import type { ComponentProps } from "react";
import { useId } from "react";
import { cn } from "../../lib/cn";

type InputSize = 'sm' | 'md' | 'lg'

const SIZES: Record<InputSize, string> = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg'
}

export interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
    size?: InputSize
    label?: string
    hint?: string
    error?: string
    fullWidth?: boolean
}

export function Input({
    size = 'md',
    label,
    hint,
    error,
    fullWidth = true,
    disabled,
    type = 'text',
    id,
    className,
    ...props
}: InputProps) {
    const autoId = useId()
    const inputId = id ?? autoId
    const messageId = `${inputId}-message`
    const message = error ?? hint

    return (
        <div className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-fit')}>
            {label && (
                <label htmlFor={inputId} className="text-sm font-medium text-foreground">
                    {label}
                </label>
            )}

            <input
                id={inputId}
                type={type}
                disabled={disabled}
                aria-invalid={!!error}
                aria-describedby={message ? messageId : undefined}
                className={cn(
                    'w-full rounded-control border bg-surface text-foreground transition placeholder:text-muted',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    error ? 'border-danger-500' : 'border-border hover:border-muted',
                    SIZES[size],
                    className
                )}
                {...props}
            />

            {message && (
                <p
                    id={messageId}
                    className={cn('text-sm', error ? 'text-danger-600' : 'text-muted')}
                >
                    {message}
                </p>
            )}
        </div>
    )
}
