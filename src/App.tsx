import RoutesMain from "./Routes/RoutesMain";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Global from "./styles/global";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div>
      <Global />
      <RoutesMain />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
