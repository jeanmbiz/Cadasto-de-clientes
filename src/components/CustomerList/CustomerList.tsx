import { useContext, useEffect } from "react";
import { CustomerListStyled, CustomerHeaderStyled } from "./styles";
import { VscTrash } from "react-icons/vsc";
import api from "../../services/api";
import { iCustomerResponseAPI } from "../../interfaces/User.interface";
import { DashboardContext } from "../../Providers/Contexts/DashboardContext";
import ModalEditCustomer from "../ModalEditCustomer/ModalEditCustomer";
import axios from "axios";
import { toast } from "react-toastify";

const CustomerList = () => {
  const {
    showModalEditCustomer,
    setShowModalEditCustomer,
    setCustomerId,
    customerId,
    customersList,
    setCustomersList,
    showModalAddCustomer,
  } = useContext(DashboardContext);

  const handleRemoveCustomer = async (id: string) => {
    try {
      await api.delete(`/customers/${id}`);
      toast.success("Contato apagado com sucesso");
    } catch (error) {
      toast.error("Ops! Não foi possível excluir!");
      console.log(error);
    }
  };

  useEffect(() => {
    async function getCustomersData() {
      const token = localStorage.getItem("@CustomerBase: Token");
      if (token) {
        try {
          const customersData: iCustomerResponseAPI = await api.get(
            "/customers",
            { headers: { Authorization: `Bearer ${token}` } }
          );
          const activeCustomers = customersData.data.filter(
            (customer) => customer.isActive === true
          );
          setCustomersList(activeCustomers);
        } catch (error) {
          axios.isAxiosError(error) && console.log(error.response);
          toast.error("Houve um erro na requisição com o servidor");
        }
      }
    }
    getCustomersData();
  }, [
    setCustomersList,
    showModalEditCustomer,
    showModalAddCustomer,
    customerId,
  ]);

  return (
    <div className="mainContainer">
      <CustomerHeaderStyled>
        <h1>Nome</h1>
        <h2>E-mail</h2>
        <h3>Telefone</h3>
      </CustomerHeaderStyled>
      <CustomerListStyled>
        {customersList &&
          customersList.map((customer, index) => (
            <li
              onClick={() => {
                setCustomerId(customer.id);
              }}
              key={index}
            >
              <div
                onClick={() => {
                  setShowModalEditCustomer(true);
                  setCustomerId(customer.id);
                }}
              >
                <h1> {customer.name} </h1>
              </div>
              <div
                onClick={() => {
                  setShowModalEditCustomer(true);
                  setCustomerId(customer.id);
                }}
              >
                <h2> {customer.email} </h2>
              </div>
              <div
                onClick={() => {
                  setShowModalEditCustomer(true);
                  setCustomerId(customer.id);
                }}
              >
                <h3> {customer.phone} </h3>
              </div>
              <section>
                <VscTrash onClick={() => handleRemoveCustomer(customer.id)} />
              </section>
            </li>
          ))}
        {showModalEditCustomer && <ModalEditCustomer />}
      </CustomerListStyled>
    </div>
  );
};

export default CustomerList;
