"use client"

import GenerateToast from "../utils/generate-toast";

interface IProp {
  setCookie: () => Promise<void>;
  status: boolean;
}

const Form = ({ setCookie, status }: IProp) => {
  const submitForm = () => {
    GenerateToast({
      message: `${status ? "عملیات موفقیت آمیز بود" : "عملیات با شکست مواجه شد"}`,
      status: status ? "success" : "error",
    });
  };
  
  return (
    <>
      <form
        className="border border-white w-60 h-60 flex justify-center items-center rounded-md"
        action={setCookie}
      >
        <button
          onClick={submitForm}
          className="p-3 border border-white rounded-md cursor-pointer bg-black text-white"
          type="submit"
        >
          click
        </button>
      </form>
    </>
  );
};

export default Form;
