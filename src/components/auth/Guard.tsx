import {useGetMe} from "../../hooks/useGetMe";
import {PropsWithChildren} from "react";
import {exludedRoutes} from "../../constants/exludedRoutes";

export const Guard = ({children}: PropsWithChildren)=>{
    const {data: user} = useGetMe()
    console.log(user)

    const shoulCheckBeSkiped = exludedRoutes.includes(window.location.pathname)
    if(shoulCheckBeSkiped || user?.me) return <>{children}</>

    return null
}