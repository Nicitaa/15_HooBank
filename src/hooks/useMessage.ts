import { create } from 'zustand'

interface MessageStore {
  isOpen:boolean
  showMessage:() => void
  setStatus:(error:boolean,success:boolean) => void
  error:boolean
  success:boolean
}

export const useMessage = create<MessageStore>((set, get) => ({
  isOpen:false,
  error:false,
  success:false,
  showMessage: () => {
    set({ isOpen: !get().isOpen})
  },
  setStatus:(error:boolean,success:boolean) => {
    set({error,success})
  }
}))

export default useMessage