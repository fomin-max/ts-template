export interface ErrorState {
  message: string,
  code?: string,
}

export interface BackendError {
  title: string,
  status: number,
  message?: string,
}
