import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css";

import { useNavigate } from "react-router-dom";

function PaginaInicial() {
  const navigate = useNavigate();

  return (
    <Principal>
      <BotaoCustomizado tipo="primario" aoClicar={() => navigate("/cadastro-prancha")}>
        Cadastrar Pranchas
      </BotaoCustomizado>

      <BotaoCustomizado tipo="secundario" aoClicar={() => navigate("/lista-pranchas")}>
        Lista Pranchas
      </BotaoCustomizado>
    </Principal>
  );

}

export default PaginaInicial;
