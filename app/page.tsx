import {cookieAction} from "./actions/cookieAction"

const getResponse = async() => {
  const res = await fetch("http://localhost:3000/api/token")
  return res.json()
}

const page = async () => {
  const response = await getResponse()

    const setCookie = cookieAction.bind(null, response.token)

  
  return (
    <div className="w-full h-screen bg-blue-950 text-white flex justify-center items-center">
      <span className="text-2xl">hello world</span>
      <form action={setCookie}><button type="submit">click</button></form>
    </div>
  )
}

export default page
