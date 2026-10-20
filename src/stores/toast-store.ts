import { create } from "zustand";
interface ToastStoreType {
    isToastExist : boolean
    toastTime : number
    toastMessage : string
    setCreateToast : () => void 
    setExpireToast : () => void
    setTimeToast : (toastTime : number | undefined) => void
    setMessageToast : (Message : string) => void
}

export const useToastStore = create<ToastStoreType>((set) => ({
    isToastExist : false,
    toastTime : 2,
    toastMessage : "",
    setCreateToast : () => set({isToastExist: true}),
    setExpireToast : () => set({isToastExist: false}),
    setTimeToast : (toastTime) => set({toastTime : toastTime ? toastTime : 2}),
    setMessageToast : (Message) => set({toastMessage: Message}),
}))

export default useToastStore