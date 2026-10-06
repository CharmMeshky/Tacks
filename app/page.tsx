const getResponse = async() => {
  const res = await fetch("http://localhost:3000/api/token")
  return res.json()
}

const page = async () => {
  const response = await getResponse()

  return (
    <div className="w-full h-screen bg-blue-950 text-white flex justify-center items-center">
      <span className="text-2xl">hello world</span>
    </div>
  )
}

export default page
