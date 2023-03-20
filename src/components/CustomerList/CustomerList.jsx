import React from 'react'
import { CustomerListStyled, CustomerHeaderStyled } from './styles'
import { VscTrash } from "react-icons/vsc";

const CustomerList = () => {
  return (
    <div className='mainContainer'>
      <CustomerHeaderStyled>
         <h1>Nome</h1>
          <h2>E-mail</h2>
          <h3>Telefone</h3>
      </CustomerHeaderStyled>
    <CustomerListStyled>
         <li >
          <div>
          <h1>Jean Michel Biz</h1>
          </div>
          <div>
          <h2>jeanmbiz@hotmail.com</h2>
          <h2>jeanmbiz@hotmail.com</h2>
          </div>
          <div>
          <h3>47-984851404</h3>
          <h3>47-984851404</h3>
          </div>
          <section>
            <VscTrash/>
          </section>
        </li>

        <li >
          <div>
          <h1>Jean Michel Biz</h1>
          </div>
          <div>
          <h2>jeanmbiz@hotmail.com</h2>
          </div>
          <div>
          <h3>47984851404</h3>
          <h3>47984851404</h3>
          </div>
          <section>
            <VscTrash/>
          </section>
        </li>

    </CustomerListStyled>
    </div>
  )
}

export default CustomerList