import { createContext } from 'react'
import { useState } from 'react'
import { iChildrenProps, iDashboardContext } from '../../interfaces/DashboardContext.Interface'

export const DashboardContext = createContext({} as iDashboardContext)

export const DashboardProvider = ({children}:iChildrenProps) => {

    const [showModalAddCustomer, setShowModalAddCustomer ] = useState<boolean>(false)
    const [showModalEditProfile, setshowModalEditProfile ] = useState<boolean>(false)

    const handleModalAddCustomer = (status:boolean) => {
      setShowModalAddCustomer(status)
    }

    const handleModalEditProfile = (status:boolean) => {
        setShowModalAddCustomer(status)
      }




    return (
        <DashboardContext.Provider value={{handleModalAddCustomer, setShowModalAddCustomer, showModalAddCustomer, showModalEditProfile, setshowModalEditProfile, handleModalEditProfile}} >
            {children}
        </DashboardContext.Provider>
    )
}