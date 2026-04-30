import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import "./PaginaInicial.css";

import { useNavigate } from "react-router-dom";

function PaginaInicial() {
  const navigate = useNavigate();

  return (
    <>
      <BotaoCustomizado tipo="primario" aoClicar={() => navigate("/cadastro-prancha")}>
        Cadastrar Pranchas
      </BotaoCustomizado>

      <BotaoCustomizado tipo="secudario" aoClicar={() => navigate("/lista-pranchas")}>
        Lista Pranchas
      </BotaoCustomizado>
    </>
  );

}

export default PaginaInicial;
