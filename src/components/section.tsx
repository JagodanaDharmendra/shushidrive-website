import React from "react"

import MaxWithWrapper from "./maxWidthWrapper"

interface IProps {
  children: React.ReactNode
  className?: string
  withVerticalPadding?: boolean
}

export default function Section({ children, className, withVerticalPadding }: IProps) {
  return (
    <div className={
      `w-full ${className} ${withVerticalPadding ? 'py-8 sm:py-16' : ''}`
    }>
      <MaxWithWrapper>{children}</MaxWithWrapper>
    </div>
  )
}
