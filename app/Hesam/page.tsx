import { cookies } from "next/headers"

interface IuserData{
    id: number,
    name: string,
    email: string,
    role: string
}
interface ItokenResponse{
    token: string,
    userData: IuserData
}
const getResponse = async(): Promise<ItokenResponse> => {
  const res = await fetch("http://localhost:3000/api/token")
  return res.json()
}

const Hesam = async () => {
  const response = await getResponse()
  const cookieStore= await cookies();
  cookieStore.set({
    name: "token",
    value: response.token,
    maxAge: 259200
  })
  return (
    <div className="w-full h-screen bg-blue-950 text-white flex justify-center items-center">
      <span className="text-2xl">hello world</span>
    </div>
  )
}

export default Hesam
