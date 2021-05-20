import { I$Store } from '../features/$Store'

export declare global {
  interface Window {
    store?: I$Store
  }
}
