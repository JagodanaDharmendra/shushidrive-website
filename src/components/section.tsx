import React from "react"

import MaxWithWrapper from "./maxWidthWrapper"

interface IProps {
  children: React.ReactNode
  className?: string
}

export default function Section({ children, className }: IProps) {
  return (
    <div className={className}>
      <MaxWithWrapper>{children}</MaxWithWrapper>
    </div>
  )
}
