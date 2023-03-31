import { LinkNewAcount, LoginStyled } from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginFormSchema } from '../../../Validators/formsSchemas'
import api from '../../../services/api'
import axios from 'axios'

const Login = () => {

    const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(loginFormSchema)})

    const handleLogin = async (data:any) => {
        console.log(data)
        try {
            console.log(data)
            const response = await api.post('/login', data)
            // const {} = response.data
        } catch (error) {
            axios.isAxiosError(error) && console.log(error.response)
        }
    }

  return (
    <LoginStyled>
        <div className='formContainer'>
        <form onSubmit={handleSubmit(handleLogin)} action="">
            <div>
                <input id='email' type="email" placeholder='Email' {...register('email')} />
                <span> <>{errors.email?.message}</> </span>
            </div>
            <div>
                <input id='password' type="password" placeholder='Senha' {...register('password')} />
                <span><>{errors.email?.message}</></span>
            </div>
            <button type='submit'>Entrar</button>         
        </form>
        <div className='criarConta'>
            <LinkNewAcount to='/register'>Criar nova conta</LinkNewAcount>
        </div>
        </div>
    </LoginStyled>
  )
}

export default Login