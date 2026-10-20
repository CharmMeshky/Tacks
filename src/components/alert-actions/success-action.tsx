"use client"

import useToastStore from "@/src/stores/toast-store"

interface IParams {
    message : string
    time? : number
}
export const useSuccessAction = (params : IParams) => {
    const {message,time} = params
    const setCreateToast = useToastStore((state) => state.setCreateToast)
    const setExpireToast= useToastStore((state) => state.setExpireToast)
    const setMessageToast = useToastStore((state) => state.setMessageToast)
    const setTimeToast = useToastStore((state) => state.setTimeToast)
    setCreateToast()
    setMessageToast(message)
    setTimeToast(time)
    const timeout= (time ? time  : 2)*1000
    setTimeout(() => {
        setExpireToast()
    }, timeout);
    console.log(message)
}

export default useSuccessAction