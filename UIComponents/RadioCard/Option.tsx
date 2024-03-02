import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

export interface RadioOptionProps {
  name: string;
  value: string;
}

export type RadioOptionComponentType = React.FC<RadioOptionProps>;

export const RadioOption: RadioOptionComponentType = ({
  name,
  value,
}) => {
  return (
    <RadioGroup.Option
      value={value}
      className={({ active, checked }) =>
        clsx(
          //option.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
          active ? 'ring-2 ring-black ring-offset-2' : '',
          checked
            ? 'bg-black text-white border-white'
            : 'ring-inset text-gray-900 bg-white border-white hover:bg-neutral-100',
          'border cursor-pointer focus:outline-none transition shadow-brutal ease-in flex items-center justify-center rounded-md p-2 text-sm font-semibold uppercase sm:flex-1'
        )
      }
    >
      <RadioGroup.Label as="span">{name}</RadioGroup.Label>
    </RadioGroup.Option>
  )
}
