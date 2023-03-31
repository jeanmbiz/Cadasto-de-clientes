import RoutesMain from "./Routes/RoutesMain";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Login from "./components/Pages/Login/Login"
import Register from "./components/Pages/Register/Register";
import Global from "./styles/global"

function App() {
  return (
    <div>
      <RoutesMain/>
      <Global/>
      {/* <Login/> */}
      {/* <Register/> */}
      <Dashboard/>
      
      
    </div>
  );
}

export default App;
