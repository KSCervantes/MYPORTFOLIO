declare module 'next' {
  export * from 'next/types'
}

declare module 'next/font/google' {
  export interface FontConfig {
    subsets?: string[]
    display?: string
    weight?: string | string[]
    variable?: string
  }

  export function Inter(config: FontConfig): {
    className: string
    style: { fontFamily: string }
    variable: string
  }
}