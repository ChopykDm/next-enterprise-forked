import clsx from "clsx"
import React from "react"

export const SectionSubTitle: React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3
      {...props}
      className={
        clsx(
         //className,
          "mt-4 text-2xl tracking-tight text-black"
        )
      }
    >
      {children}
    </h3>
  )
}
