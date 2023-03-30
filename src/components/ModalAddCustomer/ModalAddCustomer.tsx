import { ModalAddCustomerStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addCustomerSchema } from "../../Validators/formsSchemas";

const ModalAddCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addCustomerSchema) });

  const handleAddCustomer = (data: any) => {
    console.log(data);
  };

  return (
    <ModalAddCustomerStyled>
      <div className="overlay">
        <div className="content">
          <div className="header">
            <h2>Cadastrar Cliente</h2>
            <button>X</button>
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
