import { useContext } from "react"
import { HomeContext } from "."

export const useHomeContext = () => {
    return useContext(HomeContext)
}