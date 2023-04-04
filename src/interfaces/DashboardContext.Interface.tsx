import { ReactNode } from "react";
import { iCustomerResponse, iUserResponse } from "./User.interface";

export interface iChildrenProps {
  children: ReactNode;
}

export interface iDashboardContext {
  showModalAddCustomer: boolean;
  setShowModalAddCustomer: React.Dispatch<React.SetStateAction<boolean>>;
  handleModalAddCustomer: (status: boolean) => void;
  showModalEditProfile: boolean;
  setshowModalEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  handleModalEditProfile: (status: boolean) => void;
  showModalEditCustomer: boolean,
  setShowModalEditCustomer: React.Dispatch<React.SetStateAction<boolean>>
  customerId: string | undefined;
  setCustomerId: React.Dispatch<React.SetStateAction<string | undefined>>
  userId: string | undefined,
  setUserId: React.Dispatch<React.SetStateAction<string | undefined>>
  user: iUserResponse | undefined
  setUser: React.Dispatch<any>
  customersList: iCustomerResponse[] | undefined
  setCustomersList: React.Dispatch<React.SetStateAction<iCustomerResponse[] | undefined>>
}
