export const log = <T>(data: T, ...rest: unknown[]): void => {
  console.log(data, ...rest) // eslint-disable-line no-console
}
