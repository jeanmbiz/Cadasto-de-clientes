import { useNavigate } from "react-router-dom";
import { HeaderStyled, LinkEditProfile } from "./styles";

const Header = () => {

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
        <h2>Editar Perfil</h2>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
