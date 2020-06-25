import React from 'react';

import { AppError } from './AppError';

interface ErrorBoundaryProps {
  children: React.ReactNode,
}

interface ErrorBoundaryState {
  hasError: boolean,
}

export class ErrorBoundary extends React.Component<
ErrorBoundaryProps,
ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    this.setState({
      hasError: true,
    });

    console.error(error, info);
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <AppError />;
    }

    return children;
  }
}
