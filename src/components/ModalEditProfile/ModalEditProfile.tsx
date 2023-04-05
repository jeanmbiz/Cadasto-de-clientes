import { ModalEditProfileStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../Validators/formsSchemas";
import { useContext } from "react";
import { DashboardContext } from "../../Providers/Contexts/DashboardContext";
import api from "../../services/api";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ModalEditProfile = () => {

  const {setshowModalEditProfile, userId, setUser} = useContext(DashboardContext)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(editProfileSchema) });

  const handleEditProfile = async (data: any) => {
    const keysWithValues = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== '')
    );

    try {
      const token = localStorage.getItem("@CustomerBase: Token")
      await api.patch(`/users/${userId}`, keysWithValues, {headers: {Authorization: `Bearer ${token}`}})
      setshowModalEditProfile(false)
      setUser(keysWithValues)
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error('Houve um erro na requisição com o servidor')
    }
  };

  const handleAccountDeletion = (id:string|undefined) =>{
    try {
      api.delete(`/users/${id}`)
      toast.success("Conta excluída com sucesso!");
      navigate('/login')
    } catch (error) {
      toast.error("Ops! Não foi possível excluir!");
      console.log(error);
    }
  }

  return (
    <ModalEditProfileStyled>
      <div className="overlay">
        <div className="content">
          <div className="header">
            <h2>Editar Perfil</h2>
            <button onClick={()=> setshowModalEditProfile(false)} >X</button>
          </div>
          <div className="mainContent">
            <div>
              <label>
                <input type="text" placeholder="Nome" {...register("name")} />
              </label>
            </div>

            <form onSubmit={handleSubmit(handleEditProfile)}>
              <div>
                <label>
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                  />
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="text"
                    placeholder="Telefone"
                    {...register("phone")}
                  />
                </label>
              </div>
              <button type="submit">Salvar</button>
            </form>
              <button onClick={()=> handleAccountDeletion(userId)} >Excluir Conta</button>
          </div>
        </div>
      </div>
    </ModalEditProfileStyled>
  );
};

export default ModalEditProfile;
