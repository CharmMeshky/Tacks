"use client";

import { toast } from "react-toastify";

interface IProps {
  message: string;
  status: "success" | "error";
}
const GenerateToast = ({ message, status }: IProps) => {
  if (status === "success") toast.success(message);
  else if (status === "error") toast.error(message);
};
export default GenerateToast;
