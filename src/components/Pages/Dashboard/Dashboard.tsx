import React, { useContext } from 'react'
import CustomerList from '../../CustomerList/CustomerList'
import Header from '../../Header/Header'
import MainDashboard from '../../MainDashboard/MainDashboard'
import ModalAddCustomer from '../../ModalAddCustomer/ModalAddCustomer'
import { DashboardContext } from '../../../Providers/Contexts/DashboardContext'
import ModalEditProfile from '../../ModalEditProfile/ModalEditProfile'

const Dashboard = () => {

  const {showModalAddCustomer, showModalEditProfile} = useContext(DashboardContext)

  return (
    <div>
       <Header/>
       <MainDashboard/>
       <CustomerList/>
       {showModalAddCustomer && <ModalAddCustomer/>}
       {showModalEditProfile && <ModalEditProfile/> }
    </div>
  )
}

export default Dashboard