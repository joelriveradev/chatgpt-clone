import { ReactNode } from 'react'

interface Props {
  when: boolean
  children: ReactNode
}

export const Show = ({ when, children }: Props) => {
  return <>{when ? children : null}</>
}
