import { LinkNewAcount, LoginStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../../Validators/formsSchemas";
import api from "../../services/api";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { iTokenInfo } from "../../interfaces/Login.Interface";

const Login = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormSchema) });

  const handleLogin = async (data: any) => {
    try {
      const response = await api.post("/login", data);
      const token = response.data.token
      const userInfo: iTokenInfo = jwt_decode(token)
      api.defaults.headers.authorization = `Bearer ${token}`;
      localStorage.setItem("@CustomerBase: Token", token)
      navigate(`/dashboard/${userInfo.sub}`)
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error('Usuário ou senha inválido')
    }
  };

  return (
    <LoginStyled>
      <div className="formContainer">
        <form onSubmit={handleSubmit(handleLogin)} action="">
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <span>
              {" "}
              <>{errors.email?.message}</>{" "}
            </span>
          </div>
          <div>
            <input
              id="password"
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <span>
              <>{errors.email?.message}</>
            </span>
          </div>
          <button type="submit">Entrar</button>
        </form>
        <div className="criarConta">
          <LinkNewAcount to="/register">Criar nova conta</LinkNewAcount>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
