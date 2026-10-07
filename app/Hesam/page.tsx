export const instant = false;
import ToastClient from "./ToastClient";
interface IuserData {
  id: number,
  name: string,
  email: string,
  role: string
}
interface ItokenResponse {
  token: string,
  userData: IuserData
}
const getResponse = async (): Promise<ItokenResponse> => {
  const res = await fetch("http://localhost:3000/api/token")
  if (!res.ok) {
    throw Error("Failed to fetch data")
  }
  return res.json()
}

const Hesam = async () => {
  const response = await getResponse()
  let isSuccess = false;
  let tokenValue="";
  if (response.token) {
    isSuccess = true;
    tokenValue = response.token;
  }

  return (
    <div className="w-full h-screen bg-blue-950 text-white flex justify-center items-center">
      <span className="text-2xl">hello world</span>
      <ToastClient success={isSuccess} token={tokenValue} />
    </div>
  )
}

export default Hesam
