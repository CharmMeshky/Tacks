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
export interface IToastClientProps {
    success: boolean,
    data: ItokenResponse
}