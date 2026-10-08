"use client"

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { ToastContainer,toast } from "react-toastify";
import setTokenCookie from "./Action";
import { IToastClientProps } from "./type";

export default function ToastClient({success,data}: IToastClientProps) {
    const {token} = data
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