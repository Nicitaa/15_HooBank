import { create } from "zustand";

/* usage
const message = useMessage()

message.show('status',?'title',?'subTitle')
e.g
message.show('success')
message.show('success','custom title')
message.show('success','custom title','custom subTitle')

*/

/* usage
const message = useMessage()

message.show('status',?'title',?'subTitle')
e.g
message.show('success')
message.show('success','custom title')
message.show('success','custom title','custom subTitle')

*/

interface MessageStore {
  isOpen: boolean;
  show: (status: string, subTitle?: string, title?: string) => void;
  _title?: string;
  _subTitle?: string;
  error?: boolean;
  success?: boolean;
}

export const useMessage = create<MessageStore>((set, get) => ({
  isOpen: false,
  error: false,
  success: false,
  _subTitle: "",
  show: (status: string, title?: string, subTitle?: string) => {
    set({ isOpen: !get().isOpen }),
      status === "success"
        ? set({ error: false, success: true })
        : set({ error: true, success: false });
    set({ _title: title }),
      set({ _subTitle: subTitle }),
      setTimeout(() => {
        set({ isOpen: !get().isOpen });
      }, 5000);
  },
}));

export default useMessage;
