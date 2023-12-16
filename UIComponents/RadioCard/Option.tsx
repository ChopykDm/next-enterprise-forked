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
          'cursor-pointer focus:outline-none',
          //option.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
          active ? 'ring-2 ring-indigo-600 ring-offset-2' : '',
          checked
            ? 'bg-black text-white hover:bg-gray-800'
            : 'bg-transparent ring-1 ring-inset ring-gray-300 text-gray-900 hover:bg-gray-50',
          'flex items-center justify-center border-2 border-black rounded-md p-3 text-sm font-semibold uppercase sm:flex-1'
        )
      }
    >
      <RadioGroup.Label as="span">{name}</RadioGroup.Label>
    </RadioGroup.Option>
  )
}
