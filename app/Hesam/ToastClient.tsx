"use client"

import { useEffect } from "react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import setTokenCookie from "./Action";
interface IToastClientProps {
    success: boolean,
    token: string
}
export default function ToastClient({success,token}: IToastClientProps) {
    useEffect(() => {
        if(success && token){
            toast.success("Token fetched successfully!", {
                position: "top-right",
            })
            setTokenCookie(token)
        }else{
            toast.error("Failed to fetch token...!", {
                position: "top-right",
            });
        }
}, [success ,token]);
return(<ToastContainer position="top-right" autoClose={5000} />)
}