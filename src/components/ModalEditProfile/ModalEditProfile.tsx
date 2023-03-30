import { ModalEditProfileStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../Validators/formsSchemas";

const ModalEditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editProfileSchema) });

  const handleEditProfile = (data: any) => {
    console.log(data);
  };

  return (
    <ModalEditProfileStyled>
      <div className="overlay">
        <div className="content">
          <div className="header">
            <h2>Editar Perfil</h2>
            <button>X</button>
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

            <form onSubmit={handleSubmit(handleEditProfile)}>
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

export default ModalEditProfile;
