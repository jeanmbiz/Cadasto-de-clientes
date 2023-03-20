import React from 'react'
import CustomerList from '../../CustomerList/CustomerList'
import Header from '../../Header/Header'
import MainDashboard from '../../MainDashboard/MainDashboard'

const Dashboard = () => {
  return (
    <div>
       <Header/>
       <MainDashboard/>
       <CustomerList/>
       
    </div>
  )
}

export default Dashboard