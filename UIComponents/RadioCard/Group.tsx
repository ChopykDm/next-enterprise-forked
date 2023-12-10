'use client';

import { useState } from 'react'
import { RadioGroup as ExtRadioGroup } from '@headlessui/react'
import { RadioOption, RadioOptionComponentType } from './Option';

const memoryOptions = [
  { name: '4 GB', inStock: true },
  { name: '8 GB', inStock: true },
  { name: '16 GB', inStock: true },
  { name: '32 GB', inStock: true },
  { name: '64 GB', inStock: true },
  { name: '128 GB', inStock: false },
]

export interface RadioGroupProps {
}

export type RadioGroupComponentType = React.FC<React.PropsWithChildren<RadioGroupProps>> & {
  Option: RadioOptionComponentType;
}

const RadioGroup: RadioGroupComponentType = ({
  children,
}) => {
  const [mem, setMem] = useState(memoryOptions[2])

  return (
    <div className=" ">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium leading-6 text-gray-900">RAM</h2>
        <a href="#" className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500   ">
          See performance specs
        </a>
      </div>

      <ExtRadioGroup value={mem} onChange={setMem} className="mt-2">
        <ExtRadioGroup.Label className="sr-only">Choose a memory option</ExtRadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {children}
        </div>
      </ExtRadioGroup>
    </div>
  )
}

RadioGroup.Option = RadioOption;

export { RadioGroup }