import { HeaderStyled } from "./styles";

const Header = () => {
  
  return (
    <HeaderStyled>
      <div className="headerContainer mainContainer">
        <h1>Olá, Jean Michel Biz </h1>
        <div>
        <h2>Sair</h2>
        <h2>Editar Perfil</h2>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
