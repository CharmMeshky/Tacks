import { cookies } from "next/headers";
import { IUserResponse } from "./type";
import Form from "./components/form";
import { ToastContainer } from "react-toastify";

const getResponse = async () : Promise<Response> => {
  const res = await fetch("http://localhost:3000/api/token");
  return res;
};

const page = async () => {
  const response = await getResponse();
  const data : IUserResponse = await response.json()
  const {token} = data

  const cookieAction = async (token : string) => {
    "use server"
      const cookieStore = await cookies();
      cookieStore.set("token", token, { maxAge: 22222 });
  };

  const setCookie = cookieAction.bind(null, token);

  return (
    <div className="w-full h-screen bg-blue-950 text-white flex flex-col justify-center items-center">
      <Form setCookie={setCookie} status={response.ok} />
      <ToastContainer />
    </div>
  );
};

export default page;
