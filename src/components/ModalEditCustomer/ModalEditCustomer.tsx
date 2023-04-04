import { ModalEditProfileStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../Validators/formsSchemas";
import { useContext } from "react";
import { DashboardContext } from "../../Providers/Contexts/DashboardContext";
import api from "../../services/api";
import axios from "axios";
import { toast } from "react-toastify";

const ModalEditCustomer = () => {


  const { setShowModalEditCustomer, customerId} = useContext(DashboardContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editProfileSchema) });

  const handleEditCustomer = async (data: any) => {
    const keysWithValues = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== '')
    );

    try {
      const token = localStorage.getItem("@CustomerBase: Token")
      await api.patch(`/customers/${customerId}`, keysWithValues, {headers: {Authorization: `Bearer ${token}`}})
      setShowModalEditCustomer(false)
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error('Houve um erro na requisição com o servidor')
    }
  };

  return (
    <ModalEditProfileStyled>
      <div className="overlay">
        <div className="content">
          <div className="header">
            <h2>Editar Contato</h2>
            <button onClick={()=> setShowModalEditCustomer(false)}>X</button>
          </div>
          <div className="mainContent">
            <div>
              <label>
                <input type="text" placeholder="Nome" {...register("name")} />
              </label>
              <span>
                {" "}
                <> {errors.name?.message} </>{" "}
              </span>
            </div>

            <form onSubmit={handleSubmit(handleEditCustomer)}>
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
                  <> {errors.email?.message} </>{" "}
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
                  <> {errors.phone?.message} </>{" "}
                </span>
              </div>
              <button type="submit">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </ModalEditProfileStyled>
  );
};

export default ModalEditCustomer;
