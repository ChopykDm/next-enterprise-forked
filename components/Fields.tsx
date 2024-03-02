import clsx from 'clsx'
import { InputHTMLAttributes, PropsWithChildren, forwardRef } from 'react';

const formClasses =
  'block shadow-brutal border w-full appearance-none rounded-lg border-black bg-neutral-100 px-2 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:bg-white focus:outline-none focus:ring-black sm:text-base'

function Label({ id, className, children }: PropsWithChildren<React.HTMLAttributes<HTMLLabelElement>>) {
  return (
    <label
      htmlFor={id}
      className={
        clsx(
          "mb-2 block font-medium",
          className
        )
      }
    >
      {children}
    </label>
  )
}

export interface Field {
  label: string;
}

export const TextField = forwardRef<HTMLInputElement, React.HTMLAttributes<HTMLInputElement> & Field>(({
  id,
  label,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} {...props} className={formClasses} ref={ref} />
    </div>
  )
});

export const TextareaField = forwardRef<HTMLTextAreaElement, React.HTMLAttributes<HTMLTextAreaElement> & Field>(({
  id,
  label,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <textarea id={id} {...props} ref={ref} className={formClasses} />
    </div>
  )
});

export const SelectField = forwardRef<HTMLSelectElement, React.HTMLAttributes<HTMLSelectElement> & Field>(({ id, label, className = '', ...props }, ref) => {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} ref={ref} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
});

export const ErrorMessage: React.FC<{message?: string}> = ({ message }) => {
  return (
    <div role="alert" className="text-red-600 font-medium mt-2">
       {message}
    </div>
  )
};