import { LinkReturn, RegisterStyled } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerFormSchema } from "../../Validators/formsSchemas";
import api from "../../services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerFormSchema) });

  const handleRegister = async (data: any) => {
    try {
      console.log(data);
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error("Email já existente");
    }
  };

  return (
    <RegisterStyled>
      <div className="topContainer">
        <LinkReturn to="/login">Voltar</LinkReturn>
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
            <input
              type="password"
              placeholder="Confirme sua Senha"
              {...register("confirmPassowrd")}
            />
            <span>
              <>{errors.confirmPassowrd?.message}</>
            </span>
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
