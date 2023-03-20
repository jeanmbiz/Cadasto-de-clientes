import React from 'react'
import { CustomerListStyled } from './styles'
import { VscTrash } from "react-icons/vsc";

const CustomerList = () => {
  return (
    <div className='mainContainer'>
    <CustomerListStyled>
         <li >
          <h4> Bruna Bambinetti </h4>
          <div>
            <h5> Ativa </h5>
            <VscTrash/>
          </div>
        </li>
        <li >
          <h4>Jean Michel Biz</h4>
          <div>
            <h5> Ativa </h5>
            <VscTrash/>
          </div>
        </li>
        <li >
          <h4>Cristian Dos Santos</h4>
          <div>
            <h5> Ativa </h5>
            <VscTrash/>
          </div>
        </li>
    </CustomerListStyled>
    </div>
  )
}

export default CustomerList