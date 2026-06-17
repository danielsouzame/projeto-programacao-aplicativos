// imports de bibliotecas externas, instaladas via npm
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// imports de arquivos de estilos (CSS)
import "./App.css";
// imports de componentes/paginas internas do projeto React (arquivos .jsx)
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
// imports de páginas
import ValidarAutenticacao from "./componentes/ValidarAutenticacao/ValidarAutenticacao";
import AppContextProvider from "./contexto/AppContext";
import CadastroPrancha from "./paginas/CadastroPrancha/CadastroPrancha";
import ListaPranchas from "./paginas/ListaPranchas/ListaPranchas";
import Login from "./paginas/Login/Login";
import NovoUsuario from "./paginas/NovoUsuario/NovoUsuario";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PerfilUsuario from "./paginas/PerfilUsuario/PerfilUsuario";

const roteador = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "novo-usuario",
    element: <NovoUsuario />,
  },
  {
    path: "",
    element: <ValidarAutenticacao />,
    children: [
      // Rotas privadas ao app, ou seja, só podem ser acessadas por usuários autenticados
      {
        path: "/",
        element: <PaginaInicial />,
      },
      {
        path: "cadastro-prancha",
        element: <CadastroPrancha />,
      },
      {
        path: "cadastro-prancha/:pranchaId?",
        element: <CadastroPrancha />,
      },
      {
        path: "lista-pranchas",
        element: <ListaPranchas />,
      },
      {
        path: "meu-perfil",
        element: <PerfilUsuario />,
      },
    ],
  },
  {
    path: "*", //
    element: <h3>Página não encontrada!!</h3>,
  },
]);

function App() {
  return (
    <>
      <AppContextProvider>
        <Cabecalho />
        <RouterProvider router={roteador} />
        <Rodape />
        <ToastContainer />
      </AppContextProvider>
    </>
  );
}

export default App;
