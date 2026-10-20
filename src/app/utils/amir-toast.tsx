import { SuccessAction } from '../components/alert-actions/success-action';


export const amirToast = {
        success: (message : string,time? : number) => <SuccessAction message={message} time={time}/>,
        error: "",
        info: "",
        alert: "",
    }

export default amirToast