import { ReactNode } from "react";

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
}
