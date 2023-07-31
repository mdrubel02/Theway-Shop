import { useEffect } from "react"

export const useTitle=(title)=>{
    useEffect(()=>{
        document.title=`ThewayShop || ${title}`
    },[title])
}