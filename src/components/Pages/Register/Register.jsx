import React from 'react'
import { RegisterStyled } from './styles'

const Register = () => {
  return (
    <RegisterStyled>
        <div className='topContainer'>
        <p>Voltar</p>
        </div>
        <div>
        <form className='formContainer' action="">
            <div>
                <input type="text" placeholder='Nome' />
                <span>Digite seu nome</span>
            </div>
            <div>
                <input type="email" placeholder='Email' />
                <span>Digite seu email</span>
            </div>
            <div>
                <input type="password" placeholder='Senha' />
                <span>Digite sua senha</span>
            </div>
            <div>
                <input type="password" placeholder='Confirme sua Senha' />
                <span>Confirme sua senha</span>
            </div>
            <div>
                <input type="text" />
                <span>Digite seu telefone</span>
            </div>
            <button>Cadastrar</button>
        </form>
        </div>
    </RegisterStyled>
  )
}

export default Register