import React from 'react'
import CustomerList from '../../CustomerList/CustomerList'
import Header from '../../Header/Header'
import MainDashboard from '../../MainDashboard/MainDashboard'
import ModalAddCustomer from '../../ModalAddCustomer/ModalAddCustomer'
import ModalEditProfile from '../../ModalEditProfile/ModalEditProfile'

const Dashboard = () => {
  return (
    <div>
       <Header/>
       <MainDashboard/>
       <CustomerList/>
       {/* <ModalAddCustomer/> */}
       {/* <ModalEditProfile/> */}
       
    </div>
  )
}

export default Dashboard