export const instant = false;
import ToastClient from "./ToastClient";

const getResponse = async (): Promise<Response> => {
  const res = await fetch("http://localhost:3000/api/token")
  if (!res.ok) {
    throw Error("Failed to fetch data")
  }
  return res
}

const Hesam = async () => {
  const response = await getResponse()
  const data = await response.json()
  return (
    <div className="w-full h-screen bg-blue-950 text-white flex justify-center items-center">
      <span className="text-2xl">hello world</span>
      <ToastClient success={response.ok} data={data} />
    </div>
  )
}

export default Hesam
