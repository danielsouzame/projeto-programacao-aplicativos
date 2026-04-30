// imports de bibliotecas externas, instaladas via npm
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// imports de arquivos de estilos (CSS)
import "./App.css";
// imports de componentes/paginas internas do projeto React (arquivos .jsx)
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
// imports de páginas
import CadastroPrancha from "./paginas/CadastroPrancha/CadastroPrancha";
import ListaPranchas from "./paginas/ListaPranchas/ListaPranchas"
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "cadastro-prancha",
    element: <CadastroPrancha />
  },
  {
    path: "lista-pranchas",
    element: <ListaPranchas />
  },
  {
    path: "*", //
    element: <h3>Página não encontrada!!</h3>,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={roteador} />
      <Rodape />

    </>
  );
}

export default App;
