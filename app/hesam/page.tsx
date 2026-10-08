import { cookies } from "next/headers"

interface userData{
    id: number,
    name: string,
    email: string,
    role: string
}
interface tokenResponse{
    token: string,
    userData: userData
}
const getResponse = async(): Promise<tokenResponse> => {
  const res = await fetch("http://localhost:3000/api/token")
  return res.json()
}

const hesam = async () => {
  const response = await getResponse()
  const cookeeStore= await cookies();
  cookeeStore.set({
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

export default hesam
