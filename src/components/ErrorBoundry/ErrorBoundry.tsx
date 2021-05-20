import React from 'react'

import { AppError } from './AppError'

interface IErrorBoundaryProps {
  children: React.ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    this.setState({
      hasError: true,
    })

    console.error(error, info)
  }

  render(): React.ReactNode {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError && process.env.NODE_ENV === 'production') {
      return <AppError />
    }

    return children
  }
}
