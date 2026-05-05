import { useState } from "react";
import { MdAddCircle, MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Avatar from "../../componentes/Avatar/Avatar";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import normalizarString from "../../utils/normalizarString";
import "./ListaPranchas.css";

function ListaPranchas() {
  const navigate = useNavigate();

  const [termoBusca, setTermoBusca] = useState("");

  const pranchasDoLocalStorage = JSON.parse(localStorage.getItem("pranchas")) || [];

  const removerPrancha = (pranchaParaRemover) => {
    if (confirm(`Tem certeza que deseja remover a prancha ${pranchaParaRemover.nome} ?`)) {
      const pranchasAtualizadas = pranchasDoLocalStorage.filter(
        (prancha) => prancha.id !== pranchaParaRemover.id
      );
      localStorage.setItem("pranchas", JSON.stringify(pranchasAtualizadas));
      navigate("/lista-pranchas");
    }
  };

  const pranchasFiltradas = pranchasDoLocalStorage.filter((prancha) =>
    normalizarString(prancha.marca).includes(normalizarString(termoBusca)) ||
    normalizarString(prancha.modelo).includes(normalizarString(termoBusca))
  );

  return (
    <Principal titulo="Lista de Pranchas" voltarPara="/">
      <CampoCustomizado
        type="search"
        placeholder="Buscar Prancha pela marca ou modelo."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />

      {pranchasFiltradas.map((prancha) => {
        return (
          <div key={prancha.id} className="lista-pranchas__item">
            <div className="lista-pranchas__item-informacoes">
              <Avatar nome={prancha.nome} imagem={prancha.foto} />

              {prancha.nome}
            </div>
            <div>
              <MdEdit size={24} onClick={() => navigate(`/cadastro-prancha/${prancha.id}`)} />
              <MdDelete size={24} color="red" onClick={() => removerPrancha(prancha)} />
            </div>
          </div>
        );
      })}

      {pranchasFiltradas.length === 0 && (
        <p className="lista-pranchas__mensagem-vazia">Nenhuma prancha encontrada.</p>
      )}

      <MdAddCircle
        className="lista-pranchas__botao-adcionar"
        size={64}
        color="#ff9100"
        onClick={() => navigate("/cadastro-prancha")}
      />
    </Principal>
  );
}

export default ListaPranchas;
