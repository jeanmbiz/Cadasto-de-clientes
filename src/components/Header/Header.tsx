import { useNavigate } from "react-router-dom";
import { HeaderStyled } from "./styles";
import { useContext } from "react";
import { DashboardContext } from "../../Providers/Contexts/DashboardContext";

const Header = () => {

  const {setshowModalEditProfile} = useContext(DashboardContext)

  const navigate = useNavigate()

  const handleExit = () =>{
    navigate('/Login')
  }
  
  return (
    <HeaderStyled>
      <div className="headerContainer mainContainer">
        <h1>Olá, Jean Michel Biz</h1>
        <div>
        <button onClick={handleExit}>Sair</button>
        <button onClick={()=> setshowModalEditProfile(true)}>Editar Perfil</button>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
