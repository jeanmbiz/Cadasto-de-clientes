import React from 'react'
import { LoginStyled } from './styles'

const Login = () => {
  return (
    <LoginStyled>
        <div className='formContainer'>
        <form action="">
            <div>
                <input id='email' type="email" placeholder='Email' />
                <span>Digite seu email</span>
            </div>
            <div>
                <input id='password' type="password" placeholder='Senha' />
                <span>Digite sua senha</span>
            </div>
            <button type='submit'>Entrar</button>         
        </form>
        <div className='criarConta'>
            <p>Criar nova conta</p>
        </div>
        </div>
    </LoginStyled>
  )
}

export default Login