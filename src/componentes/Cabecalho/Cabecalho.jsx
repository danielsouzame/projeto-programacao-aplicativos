import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";
import {useAppContext} from "../../contexto/AppContext"

function Cabecalho() {
  const { usuarioLogado } = useAppContext();

  return (
    <header className="cabecalho__root">
      <a href="/">
        <img src="/logo.png" height="48" alt="Logo" />
      </a>
      {usuarioLogado && (
        <a href="/meu-perfil">
          <Avatar nome={usuarioLogado.nome} imagem={usuarioLogado.foto} />
        </a>
      )}
    </header>
  );
}

export default Cabecalho;
