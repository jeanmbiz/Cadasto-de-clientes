import { ModalAddCustomerStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addCustomerSchema } from "../../Validators/formsSchemas";
import { useContext } from "react";
import { DashboardContext } from "../../Providers/Contexts/DashboardContext";
import api from "../../services/api";
import axios from "axios";
import { toast } from "react-toastify";

const ModalAddCustomer = () => {
  const { setShowModalAddCustomer} = useContext(DashboardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addCustomerSchema) });

  const handleAddCustomer = async (data: any) => {
    const token = localStorage.getItem("@CustomerBase: Token")
    if(token){
      try {
        await api.post("/customers", data, {headers: {Authorization: `Bearer ${token}`}})
        toast.success("Contato cadastrado");
        setShowModalAddCustomer(false)
      } catch (error) {
        axios.isAxiosError(error) && console.log(error.response);
        toast.error('Houve um erro na requisição com o servidor')
  
      }
    }
  };

  return (
    <ModalAddCustomerStyled>
      <div className="overlay">
        <div className="content">
          <div className="header">
            <h2>Cadastrar Cliente</h2>
            <button onClick={() => setShowModalAddCustomer(false)}>X</button>
          </div>
          <div className="mainContent">
            <div>
              <label>
                <input type="text" placeholder="Nome" {...register("name")} />
              </label>
              <span>
                {" "}
                <>{errors.name?.message}</>{" "}
              </span>
            </div>

            <form onSubmit={handleSubmit(handleAddCustomer)}>
              <div>
                <label>
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                  />
                </label>
                <span>
                  {" "}
                  <>{errors.email?.message}</>{" "}
                </span>
              </div>

              <div>
                <label>
                  <input
                    type="text"
                    placeholder="Telefone"
                    {...register("phone")}
                  />
                </label>
                <span>
                  {" "}
                  <span>
                    {" "}
                    <>{errors.phone?.message}</>{" "}
                  </span>{" "}
                </span>
              </div>
              <button type="submit">Cadastrar Cliente</button>
            </form>
          </div>
        </div>
      </div>
    </ModalAddCustomerStyled>
  );
};

export default ModalAddCustomer;
