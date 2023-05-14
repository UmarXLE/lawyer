import { createContext , useState } from "react"
export const CustomContext = createContext()

export const Context = (props) => {
    const [open , setOpen ] = useState(false)
    const value = {
        open,setOpen
    }
    return <CustomContext.Provider value={value}>
        {
            props.children
        }
    </CustomContext.Provider>
}