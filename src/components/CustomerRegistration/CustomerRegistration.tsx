
import { useContext } from 'react'
import { CustomerRegistrationStyled } from './styles'
import { DashboardContext } from '../../Providers/Contexts/DashboardContext'

const CustomerRegistration = () => {

  const {handleModalAddCustomer} = useContext(DashboardContext)




  return (
    <CustomerRegistrationStyled>
    <h2>Cadastrar Cliente</h2>
    <button onClick={()=>handleModalAddCustomer(true)}>+</button>
    </CustomerRegistrationStyled>
  )
}

export default CustomerRegistration