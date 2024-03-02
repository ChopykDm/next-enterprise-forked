'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react'
import { RadioGroup as ExtRadioGroup } from '@headlessui/react'
import { RadioOption, RadioOptionComponentType } from './Option';

export interface RadioGroupProps {
  className?: string;
  label?: string
  onChange: RadioGroupProps['onChange']
}

export type RadioGroupComponentType = React.FC<React.PropsWithChildren<RadioGroupProps>> & {
  Option: RadioOptionComponentType;
}

const RadioGroup = React.forwardRef<HTMLElement, Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & RadioGroupProps>(({
  children,
  onChange,
  label,
  className,
  ...htmlProps
}, ref) => {
  return (
    <div className={className}>
      <ExtRadioGroup {...htmlProps} onChange={(val) => {onChange('val')}} ref={ref} className="mt-2">
        <ExtRadioGroup.Label className="sr-only">{label}</ExtRadioGroup.Label>
          {children}
      </ExtRadioGroup>
    </div>
  )
})

RadioGroup.Option = RadioOption;

export { RadioGroup }