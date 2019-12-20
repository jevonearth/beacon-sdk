import { FileStorage } from './FileStorage'
import { LocalStorage } from './LocalStorage'
import { Storage } from './Storage'
import { ChromeStorage } from './ChromeStorage'

export const getStorage: () => Promise<Storage> = async (): Promise<Storage> => {
  const local: LocalStorage = new LocalStorage()
  const file: FileStorage = new FileStorage()
  const chrome: ChromeStorage = new ChromeStorage()
  if (await chrome.isSupported()) {
    return chrome
  } else if (await local.isSupported()) {
    return local
  } else if (await file.isSupported()) {
    return file
  } else {
    throw new Error('no storage type supported')
  }
}
