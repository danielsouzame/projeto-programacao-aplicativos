import { useState } from "react";
import { MdAddCircle, MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import normalizarString from "../../utils/normalizarString";
import "./ListaPranchas.css";

function ListaPranchas() {
  const navigate = useNavigate();

  const [termoBusca, setTermoBusca] = useState("");

  const pranchasDoLocalStorage = JSON.parse(localStorage.getItem("pranchas")) || [];

  const removerPrancha = (pranchaParaRemover) => {
    if (confirm(`Tem certeza que deseja remover a prancha ${pranchaParaRemover.modelo} ?`)) {
      const pranchasAtualizadas = pranchasDoLocalStorage.filter(
        (prancha) => prancha.id !== pranchaParaRemover.id
      );
      localStorage.setItem("pranchas", JSON.stringify(pranchasAtualizadas));
      navigate("/lista-pranchas");
    }
  };

  const pranchasFiltradas = pranchasDoLocalStorage.filter(
    (prancha) =>
      normalizarString(prancha.marca).includes(normalizarString(termoBusca)) ||
      normalizarString(prancha.modelo).includes(normalizarString(termoBusca))
  );

  const iniciais = (marca) =>
    marca
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <Principal titulo="Lista de Pranchas" voltarPara="/">
      <CampoCustomizado
        type="search"
        placeholder="Buscar Prancha pela marca ou modelo."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />

      <div className="lista-pranchas__grid">
        {pranchasFiltradas.map((prancha) => (
          <div key={prancha.id} className="lista-pranchas__card">
            {prancha.foto ? (
              <img
                className="lista-pranchas__card-foto"
                src={prancha.foto}
                alt={`${prancha.marca} ${prancha.modelo}`}
              />
            ) : (
              <div className="lista-pranchas__card-foto-placeholder">
                {iniciais(prancha.marca)}
              </div>
            )}

            <div className="lista-pranchas__card-info">
              <div className="lista-pranchas__card-campo">
                <span className="lista-pranchas__card-label">Marca</span>
                <span className="lista-pranchas__card-valor">{prancha.marca}</span>
              </div>
              <div className="lista-pranchas__card-campo">
                <span className="lista-pranchas__card-label">Modelo</span>
                <span className="lista-pranchas__card-valor">{prancha.modelo}</span>
              </div>
              <div className="lista-pranchas__card-campo">
                <span className="lista-pranchas__card-label">Tamanho</span>
                <span className="lista-pranchas__card-valor">{prancha.tamanho}</span>
              </div>
              <div className="lista-pranchas__card-campo">
                <span className="lista-pranchas__card-label">Largura</span>
                <span className="lista-pranchas__card-valor">{prancha.largura}</span>
              </div>
              <div className="lista-pranchas__card-campo">
                <span className="lista-pranchas__card-label">Espessura</span>
                <span className="lista-pranchas__card-valor">{prancha.espessura}</span>
              </div>
              {prancha.observacao && (
                <div className="lista-pranchas__card-campo">
                  <span className="lista-pranchas__card-label">Observações</span>
                  <span className="lista-pranchas__card-valor">{prancha.observacao}</span>
                </div>
              )}
            </div>

            <div className="lista-pranchas__card-footer">
              <span
                className="lista-pranchas__card-icone"
                onClick={() => navigate(`/cadastro-prancha/${prancha.id}`)}
              >
                <MdEdit size={22} color="#3f50b5" />
              </span>
              <span
                className="lista-pranchas__card-icone"
                onClick={() => removerPrancha(prancha)}
              >
                <MdDelete size={22} color="#eb0014" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {pranchasFiltradas.length === 0 && (
        <p className="lista-pranchas__mensagem-vazia">Nenhuma prancha encontrada.</p>
      )}

      <MdAddCircle
        className="lista-pranchas__botao-adcionar"
        size={48}
        color="#29c229"
        onClick={() => navigate("/cadastro-prancha")}
      />
    </Principal>
  );
}

export default ListaPranchas;
