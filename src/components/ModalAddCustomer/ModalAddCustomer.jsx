import React from 'react'
import { ModalAddCustomerStyled } from './styles'

const ModalAddCustomer = () => {
  return (
    <ModalAddCustomerStyled>
    <div className="overlay">
      <div className="content">
        <div className="header">
          <h2>Cadastrar Cliente</h2>
          <button>
            X
          </button>
        </div>
        <div className="mainContent">
          <div>
            <label>
              <input
                type="text"
                placeholder="Nome"
               
              />
            </label>
            <span> mensagem de erro </span>
          </div>

          <form>
          <div>
            <label>
              <input
                type="text"
                placeholder="Email"
               
              />
            </label>
            <span> mensagem de erro </span>
          </div>
            
          <div>
            <label>
              <input
                type="text"
                placeholder="Telefone"
              />
            </label>
            <span> mensagem de erro </span>
          </div>
            <button>Cadastrar Cliente</button>
          </form>
        </div>
      </div>
    </div>
  </ModalAddCustomerStyled>
  )
}

export default ModalAddCustomer