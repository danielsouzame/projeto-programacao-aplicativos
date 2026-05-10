import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";

const marcas = [
  {
    nome: "Sharpeye",
    modelos: [
      { nome: "Inferno 72", foto: "/fotos/sharpInferno77.png" },
      { nome: "Cheat Code", foto: "/fotos/sharpCheatCode.png" },
      { nome: "File Fifty", foto: "/fotos/sharpFifty.png" },
      { nome: "Synergy", foto: "/fotos/sharpSynergy.png" },
      { nome: "#77", foto: "/fotos/sharp77.png" },
    ],
  },
  {
    nome: "Lost Mayhaem",
    modelos: [
      { nome: "Formula-1", foto: "/fotos/lostF1.png" },
      { nome: "The Ripper", foto: "/fotos/lostRipper.png" },
      { nome: "3.0 Stub Driver", foto: "/fotos/lostSub.png" },
      { nome: "El Patrón", foto: "/fotos/lostPatron.png" },
      { nome: "Pocket Rocket", foto: "/fotos/lostPocket.png" },
    ],
  },
  {
    nome: "DHD",
    modelos: [
      { nome: "MF Lighting", foto: "/fotos/dhdLighting.webp" },
      { nome: "EE Juliette", foto: "/fotos/dhdJuliette.webp" },
      { nome: "MF DNA", foto: "/fotos/dhdDna.webp" },
      { nome: "SG No.8", foto: "/fotos/dhdSg.webp" },
      { nome: "Nexus EPS", foto: "/fotos/dhdNexus.webp" },
    ],
  },
  {
    nome: "Channel Island",
    modelos: [
      { nome: "The Solution", foto: "/fotos/channelSolution.png" },
      { nome: "Goldie", foto: "/fotos/channelGoldie.png" },
      { nome: "Dumpster Diver 2", foto: "/fotos/channnelDumpster.png" },
      { nome: "CI 2.PRO", foto: "/fotos/channelCi.webp" },
      { nome: "Big Happy", foto: "/fotos/channelBig.png" },
    ],
  },
];

const lengths = [
  "4'8\"", "4'9\"", "4'10\"", "4'11\"", "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"",
  "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"", "6'0\"", "6'1\"", "6'2\"", "6'3\"",
  "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"",
];

const widths = [
  '18"', '18 1/16"', '18 1/8"', '18 3/16"', '18 1/4"', '18 5/16"', '18 3/8"', '18 7/16"',
  '18 1/2"', '18 9/16"', '18 5/8"', '18 11/16"', '18 3/4"', '18 13/16"', '18 7/8"', '18 15/16"',
  '19"', '19 1/16"', '19 1/8"', '19 3/16"', '19 1/4"', '19 5/16"', '19 3/8"', '19 7/16"',
  '19 1/2"', '19 9/16"', '19 5/8"', '19 11/16"', '19 3/4"', '19 13/16"', '19 7/8"', '19 15/16"',
  '20"', '20 1/16"', '20 1/8"', '20 3/16"', '20 1/4"', '20 5/16"', '20 3/8"', '20 7/16"',
  '20 1/2"', '20 9/16"', '20 5/8"', '20 11/16"', '20 3/4"', '20 13/16"', '20 7/8"', '20 15/16"',
  '21"',
];

const thicknesses = [
  '2"', '2 1/16"', '2 1/8"', '2 3/16"', '2 1/4"', '2 5/16"', '2 3/8"', '2 7/16"',
  '2 1/2"', '2 9/16"', '2 5/8"', '2 11/16"', '2 3/4"', '2 13/16"', '2 7/8"', '2 15/16"',
  '3"',
];

/** Dado marca + modelo, retorna o caminho da foto ou "" */
const getFotoDoModelo = (marcaNome, modeloNome) => {
  const marcaObj = marcas.find((m) => m.nome === marcaNome);
  const modeloObj = marcaObj?.modelos.find((m) => m.nome === modeloNome);
  return modeloObj?.foto || "";
};

function CadastroPrancha() {
  const navigate = useNavigate();
  const params = useParams();

  const [prancha, setPrancha] = useState({
    marca: "",
    modelo: "",
    tamanho: "",
    largura: "",
    espessura: "",
    observacao: "",
    foto: "",
  });

  useEffect(() => {
    if (params.pranchaId) {
      const pranchasDoLocalStorage = JSON.parse(localStorage.getItem("pranchas")) || [];
      const pranchaEncontrada = pranchasDoLocalStorage.find(
        (itemPrancha) => itemPrancha.id === params.pranchaId
      );
      if (pranchaEncontrada) {
        // Garante que a foto esteja sempre atualizada com base na marca/modelo
        const fotoAtual =
          getFotoDoModelo(pranchaEncontrada.marca, pranchaEncontrada.modelo) ||
          pranchaEncontrada.foto;
        setPrancha({ ...pranchaEncontrada, foto: fotoAtual });
      }
    }
  }, [params]);

  const handleMarcaChange = (e) => {
    const novaMarca = e.target.value;
    setPrancha({ ...prancha, marca: novaMarca, modelo: "", foto: "" });
  };

  const handleModeloChange = (e) => {
    const novoModelo = e.target.value;
    const foto = getFotoDoModelo(prancha.marca, novoModelo);
    setPrancha({ ...prancha, modelo: novoModelo, foto });
  };

  const salvar = () => {
    if (
      !prancha.marca?.trim() ||
      !prancha.modelo?.trim() ||
      !prancha.tamanho?.trim() ||
      !prancha.largura?.trim() ||
      !prancha.espessura?.trim()
    ) {
      toast.error("Preencha os campos obrigatórios!");
      return;
    }

    const pranchasDoLocalStorage = JSON.parse(localStorage.getItem("pranchas")) || [];

    if (prancha.id) {
      const indexDaPrancha = pranchasDoLocalStorage.findIndex(
        (itemPrancha) => itemPrancha.id === prancha.id
      );
      pranchasDoLocalStorage[indexDaPrancha] = prancha;
    } else {
      const novaPrancha = { id: crypto.randomUUID(), ...prancha };
      pranchasDoLocalStorage.push(novaPrancha);
    }

    localStorage.setItem("pranchas", JSON.stringify(pranchasDoLocalStorage));
    toast.success("Prancha salva com sucesso!");
    navigate("/lista-pranchas");
  };

  return (
    <Principal voltarPara="/" titulo="Cadastro de Prancha">
      {prancha.foto && (
        <img src={prancha.foto} alt="Foto da prancha" width={150} height={200} style={{ objectFit: "cover", borderRadius: 8, margin: "0 auto" }} />
      )}

      <CampoCustomizado
        label="Marca"
        placeholder="Selecione..."
        opcoes={marcas.map((marca) => ({ label: marca.nome, valor: marca.nome }))}
        value={prancha.marca}
        onChange={handleMarcaChange}
        obrigatorio
      />

      <CampoCustomizado
        label="Modelo"
        placeholder="Selecione..."
        opcoes={
          marcas
            .find((marca) => marca.nome === prancha.marca)
            ?.modelos.map((modelo) => ({ label: modelo.nome, valor: modelo.nome })) || []
        }
        value={prancha.modelo}
        onChange={handleModeloChange}
        obrigatorio
      />

      <CampoCustomizado
        label="Tamanho"
        placeholder="Selecione..."
        opcoes={lengths.map((l) => ({ label: l, valor: l }))}
        value={prancha.tamanho}
        onChange={(e) => setPrancha({ ...prancha, tamanho: e.target.value })}
        obrigatorio
      />

      <CampoCustomizado
        label="Largura"
        placeholder="Selecione..."
        opcoes={widths.map((w) => ({ label: w, valor: w }))}
        value={prancha.largura}
        onChange={(e) => setPrancha({ ...prancha, largura: e.target.value })}
        obrigatorio
      />

      <CampoCustomizado
        label="Espessura"
        placeholder="Selecione..."
        opcoes={thicknesses.map((t) => ({ label: t, valor: t }))}
        value={prancha.espessura}
        onChange={(e) => setPrancha({ ...prancha, espessura: e.target.value })}
        obrigatorio
      />

      <CampoCustomizado
        label="Observação"
        value={prancha.observacao}
        onChange={(e) => setPrancha({ ...prancha, observacao: e.target.value })}
      />

      <BotaoCustomizado aoClicar={salvar}>Salvar</BotaoCustomizado>
    </Principal>
  );
}

export default CadastroPrancha;
