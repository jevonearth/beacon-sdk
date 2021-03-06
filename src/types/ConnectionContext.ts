import { Origin } from '..'

export interface ConnectionContext {
  origin: Origin
  id: string
  extras?: { sender: chrome.runtime.MessageSender; sendResponse(response?: unknown): void }
}
