import { createContext } from "react";
import { useState } from "react";
import {
  iChildrenProps,
  iDashboardContext,
} from "../../interfaces/DashboardContext.Interface";
import {
  iCustomerResponse,
  iUserResponse,
} from "../../interfaces/User.interface";

export const DashboardContext = createContext({} as iDashboardContext);

export const DashboardProvider = ({ children }: iChildrenProps) => {
  const [customersList, setCustomersList] = useState<iCustomerResponse[]>([]);
  const [showModalAddCustomer, setShowModalAddCustomer] =
    useState<boolean>(false);
  const [showModalEditProfile, setshowModalEditProfile] =
    useState<boolean>(false);
  const [showModalEditCustomer, setShowModalEditCustomer] =
    useState<boolean>(false);
  const [customerId, setCustomerId] = useState<string>();
  const [userId, setUserId] = useState<string>();
  const [user, setUser] = useState<iUserResponse>();

  const handleModalAddCustomer = (status: boolean) => {
    setShowModalAddCustomer(status);
  };

  const handleModalEditProfile = (status: boolean) => {
    setShowModalAddCustomer(status);
  };

  return (
    <DashboardContext.Provider
      value={{
        handleModalAddCustomer,
        setShowModalAddCustomer,
        showModalAddCustomer,
        showModalEditProfile,
        setshowModalEditProfile,
        handleModalEditProfile,
        showModalEditCustomer,
        setShowModalEditCustomer,
        customerId,
        setCustomerId,
        userId,
        setUserId,
        user,
        setUser,
        customersList,
        setCustomersList,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
