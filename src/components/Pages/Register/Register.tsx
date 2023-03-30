import { RegisterStyled } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerFormSchema } from "../../../Validators/formsSchemas";
import api from "../../../services/api";
import axios from "axios"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerFormSchema) });

  console.log(errors);


  const handleRegister = async (data: any) => {
    try {
        console.log(data)
        await api.post('/users', data)
    } catch (error) {
        axios.isAxiosError(error) && console.log(error.response)
    }
  }

  return (
    <RegisterStyled>
      <div className="topContainer">
        <p>Voltar</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(handleRegister)} className="formContainer">
          <div>
            <input type="text" placeholder="Nome" {...register("name")} />

            <span>
              <>{errors.name?.message}</>
            </span>
          </div>
          <div>
            <input type="email" placeholder="Email" {...register("email")} />
            <span>
              <>{errors.email?.message}</>
            </span>
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <span>
              <>{errors.password?.message}</>
            </span>
          </div>
          <div>
            <input type="password" placeholder="Confirme sua Senha" {...register('confirmPassowrd')} />
            <span><>{errors.confirmPassowrd?.message}</></span>
          </div>
          <div>
            <input type="text" placeholder="Telefone" {...register("phone")} />
            <span>
              <>{errors.phone?.message}</>
            </span>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </RegisterStyled>
  );
};

export default Register;
