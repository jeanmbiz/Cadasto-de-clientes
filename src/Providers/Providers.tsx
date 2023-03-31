import { iChildrenProps } from "../interfaces/DashboardContext.Interface";
import { DashboardProvider } from "./Contexts/DashboardContext";

const Providers = ({ children }: iChildrenProps) => {
  return <DashboardProvider>{children}</DashboardProvider>;
};

export default Providers;
