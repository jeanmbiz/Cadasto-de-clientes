
import { useContext, useEffect } from 'react';
import { CustomerListStyled, CustomerHeaderStyled } from './styles'
import { VscTrash } from "react-icons/vsc";
import api from '../../services/api';
import { iCustomerResponseAPI } from '../../interfaces/User.interface';
import { DashboardContext } from '../../Providers/Contexts/DashboardContext';
import ModalEditCustomer from '../ModalEditCustomer/ModalEditCustomer';
import axios from 'axios';
import { toast } from 'react-toastify';

const CustomerList = () => {


  
  const {showModalEditCustomer, setShowModalEditCustomer, setCustomerId, customersList, setCustomersList} = useContext(DashboardContext)

  useEffect(()=>{
    async function getCustomersData() {
      const token = localStorage.getItem("@CustomerBase: Token")
      if (token){
        try {
          const customersData:iCustomerResponseAPI = await api.get('/customers', {headers: {Authorization: `Bearer ${token}`}})
          setCustomersList(customersData.data)
        } catch (error) {
          axios.isAxiosError(error) && console.log(error.response);
          toast.error('Houve um erro na requisição com o servidor')
        }
      }
    }
    getCustomersData()
  },[setCustomersList, showModalEditCustomer])


  return (
    <div className='mainContainer'>
      <CustomerHeaderStyled>
         <h1>Nome</h1>
          <h2>E-mail</h2>
          <h3>Telefone</h3>
      </CustomerHeaderStyled>
    <CustomerListStyled>
        {
          customersList && customersList.map(customer => (
            <li onClick={()=> {setShowModalEditCustomer(true); setCustomerId(customer.id)} } key={customer.id} >
          <div >
          <h1> {customer.name} </h1>
          </div>
          <div>
          <h2> {customer.email} </h2>
          </div>
          <div>
          <h3> {customer.phone} </h3>
          </div>
          <section>
            <VscTrash/>
          </section>    
        </li>

          ))
        }
        {
          showModalEditCustomer && <ModalEditCustomer/>
        }
    </CustomerListStyled>
    </div>
  )
}

export default CustomerList