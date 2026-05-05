import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="cabecalho__root">
      <img src="/logo.png" height="48" alt="Logo" />
      <Avatar nome="Filipe Toledo" />
    </header>
  );
}

export default Cabecalho;
