import clsx from "clsx"
import React from "react"

export const SectionTitle: React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      {...props}
      className={
        clsx(
          className,
          "font-display text-3xl tracking-tight text-black sm:text-4xl"
        )
      }
      style={{
        fontSize: "clamp(54px, 5.9vw, 80px)",
      }}
    >
      {children}
    </h2>
  )
}
