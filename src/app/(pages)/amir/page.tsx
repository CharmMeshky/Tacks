"use client"

import SuccessAction from "@/src/components/alert-actions/success-action"
import AmirToast from "../../../utils/amir-toast"
import ContainerToast from "@/src/components/container-toast"
import useToastStore from "@/src/stores/toast-store"

const Amir = () => {
  const toast = useToastStore((state) => state.isToastExist)
  return (
    <div className="bg-black w-full h-screen">
      <button className="bg-green-700 p-3 rounded-md" onClick={() => AmirToast.success({message: "amir", time : 10})}>Toast Success</button>
      {toast && <ContainerToast/>}
    </div>
  )
}

export default Amir