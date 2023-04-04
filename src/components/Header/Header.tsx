import { useNavigate, useParams } from "react-router-dom";
import { HeaderStyled } from "./styles";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../Providers/Contexts/DashboardContext";
import api from "../../services/api";
import { iUserResponse } from "../../interfaces/User.interface";

const Header = () => {
  const {id} = useParams()

const {user, setUser} = useContext(DashboardContext)

  useEffect(()=>{
    async function getUserData() {
      const {data} = await api.get('/users/')
      const userFiltered = (data.filter((user:iUserResponse) => user.id === id))[0]
      setUser(userFiltered)
    }
    getUserData()
  }
  ,[setUser, id])


  const {setshowModalEditProfile} = useContext(DashboardContext)

  const navigate = useNavigate()

  const handleExit = () =>{
    localStorage.removeItem("@CustomerBase: Token")
    navigate('/Login')
  }
  
  return (
    <HeaderStyled>
      <div className="headerContainer mainContainer">
        <h1>Olá, {user?.name} </h1>
        <div>
        <button onClick={handleExit}>Sair</button>
        <button onClick={()=> setshowModalEditProfile(true)}>Editar Perfil</button>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
