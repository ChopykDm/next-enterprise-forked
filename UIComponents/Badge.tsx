import clsx from 'clsx';
import { forwardRef } from 'react'

export interface BadgeProps {
  className?: string
  children?: React.ReactNode
}

export const Bandge = forwardRef<HTMLDivElement, BadgeProps & React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...htmlProps }, ref) => (
  <div
      {...htmlProps}
      ref={ref}
      className={clsx(
        className,
        "relative inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium"
      )}
    >
      {children}
    </div>
));


Bandge.displayName = 'Bandge';