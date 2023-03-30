import React from 'react'
import { ModalEditProfileStyled } from './styles'

const ModalEditProfile = () => {
  return (
    <ModalEditProfileStyled>
    <div className="overlay">
      <div className="content">
        <div className="header">
          <h2>Editar Perfil</h2>
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
            <button>Salvar</button>
          </form>
        </div>
      </div>
    </div>
  </ModalEditProfileStyled>
  )
}

export default ModalEditProfile