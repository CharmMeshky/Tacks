"use client";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import useToastStore from "../stores/toast-store";

const ContainerToast = () => {
  const message = useToastStore((state) => state.toastMessage);
  const time = useToastStore((state) => state.toastTime);

  return (
      <div className="min-w-30 p-3 bg-green-800 absolute top-4 right-4 rounded-md flex justify-between text-white items-center gap-5">
        <FaCheck />
        <p>{message}</p>
        <FaXmark size={20} />
        <div className="absolute bottom-0 right-0 left-0 bg-gray-600/70">
          <div
            style={{
              animation: `toast-action ${time ? time : 2}s linear forwards`,
            }}
            className={` bg-white h-1`}
          ></div>
        </div>
      </div>
    )
};

export default ContainerToast;
