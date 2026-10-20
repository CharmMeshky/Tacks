import SuccessAction, { useSuccessAction } from "../components/alert-actions/success-action"

export const AmirToast = {
    success : (data : {message : string, time : number}) => useSuccessAction({message:data.message,time:data.time}),
    error : "",
    info: "",
    alert : ""
}

export default AmirToast