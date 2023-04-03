
import { useEffect, useState } from 'react';
import { CustomerListStyled, CustomerHeaderStyled } from './styles'
import { VscTrash } from "react-icons/vsc";
import api from '../../services/api';
import { iCustomerResponse, iCustomerResponseAPI } from '../../interfaces/User.interface';

const CustomerList = () => {

  const [customersList, setCustomersList] = useState<iCustomerResponse[]>()

  useEffect(()=>{
    async function getCustomersData() {
      const token = localStorage.getItem("@CustomerBase: Token")
      const customersData:iCustomerResponseAPI = await api.get('/customers', {headers: {Authorization: `Bearer ${token}`}})
      setCustomersList(customersData.data)
    }
    getCustomersData()
  },[])

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
            <li key={customer.id} >
          <div>
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
    </CustomerListStyled>
    </div>
  )
}

export default CustomerList