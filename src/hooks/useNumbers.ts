import { create } from 'zustand'
import { numbers } from '../constant'

interface NumbersStore {
  onChange:() => void
}

const useNumbers = create<NumbersStore>((set) => ({
  onChange:() => set(() => {
    numbers.map(number => {

    })
  })
}))

export default useNumbers