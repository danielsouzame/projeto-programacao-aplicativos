import { useState } from 'react';
import './CadastroPrancha.css'
import BotaoCustomizado from '../../componentes/BotaoCustomizado/BotaoCustomizado';
import CampoCustomizado from '../../componentes/CampoCustomizado/CampoCustomizado'
import { useNavigate } from 'react-router-dom';

const marcas = [
  { nome: "Sharpeye", modelos: ["Inferno 72", "Zipper", "File Fifty", "Synergy", "#77"] },
  { nome: "Mayhaem", modelos: ["Formula-1", "The Ripper", "3.0 Stub Driver", "El Patrón", "Pocket Rocket"]},
  { nome: "DHD", modelos: ["MF Lighting", "EE Juliette", "MF DNA", "SG No.8", "Nexus EPS"]},
  {nome: "Channel Island", modelos: ["The Solution", "Goldie", "Dumpster Diver 2", "CI 2.PRO", "Big Happy"] }
];

const lengths = [
  "4'8\"", "4'9\"", "4'10\"", "4'11\"",
  "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"",
  "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\""
];

const widths = [
  "17 1/2\"", "17 9/16\"", "17 5/8\"", "17 11/16\"", "17 3/4\"", "17 13/16\"", "17 7/8\"", "17 15/16\"",
  "18\"", "18 1/16\"", "18 1/8\"", "18 3/16\"", "18 1/4\"", "18 5/16\"", "18 3/8\"", "18 7/16\"",
  "18 1/2\"", "18 9/16\"", "18 5/8\"", "18 11/16\"", "18 3/4\"", "18 13/16\"", "18 7/8\"", "18 15/16\"",
  "19\"", "19 1/16\"", "19 1/8\"", "19 3/16\"", "19 1/4\"", "19 5/16\"", "19 3/8\"", "19 7/16\"",
  "19 1/2\"", "19 9/16\"", "19 5/8\"", "19 11/16\"", "19 3/4\"", "19 13/16\"", "19 7/8\"", "19 15/16\"",
  "20\"", "20 1/16\"", "20 1/8\"", "20 3/16\"", "20 1/4\"", "20 5/16\"", "20 3/8\"", "20 7/16\"",
  "20 1/2\"", "20 9/16\"", "20 5/8\"", "20 11/16\"", "20 3/4\"", "20 13/16\"", "20 7/8\"", "20 15/16\"",
  "21\""
];

const thicknesses = [
  "2\"", "2 1/16\"", "2 1/8\"", "2 3/16\"", "2 1/4\"", "2 5/16\"", "2 3/8\"", "2 7/16\"",
  "2 1/2\"", "2 9/16\"", "2 5/8\"", "2 11/16\"", "2 3/4\"", "2 13/16\"", "2 7/8\"", "2 15/16\"",
  "3\""
];

function CadastroPrancha() {
  const navigate = useNavigate();

  const [marcaSelecionada, setMarcaSelecionada] = useState("");
  const [modeloSelecionado, setModeloSelecionado] = useState("");
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");
  const [larguraSelecionada, setLarguraSelecionada] = useState("");
  const [grossuraSelecionada, setGrossuraSelecionada] = useState("");

  const navegar = () => navigate("/cadastro-prancha")
  
  return (
    <>
      <CampoCustomizado label={"Marca"}
        placeholder={"Selecione..."}
        opcoes={marcas.map((marca) => ({ label: marca.nome, valor: marca.nome }))}
        value={marcaSelecionada}
        onChange={(e) => {
          setMarcaSelecionada(e.target.value);
          setModeloSelecionado("");
        }}
      />

      <CampoCustomizado label={"Modelo"}
        placeholder={"Selecione..."}
        opcoes={marcas.find((marca) => marca.nome === marcaSelecionada)?.modelos.map((modelo) => ({ label: modelo, valor: modelo })) || []}
        value={modeloSelecionado}
        onChange={(e) => setModeloSelecionado(e.target.value)}
      />

      <CampoCustomizado label={"Tamanho"} 
      placeholder={"5'10\""}
      opcoes= {lengths.map((lengths)=> ({label: lengths, valor: lengths}))} 
      value={tamanhoSelecionado}
      onChange={(e) => {setTamanhoSelecionado(e.target.value)}}/>
      
      <CampoCustomizado label={"Largura"} 
      placeholder={"19 1/2\""}
      opcoes= {widths.map((widths)=> ({label: widths, valor: widths}))} 
      value={larguraSelecionada}
      onChange={(e) => {setLarguraSelecionada(e.target.value)}}/>
      
      <CampoCustomizado label={"Grossura"} 
      placeholder={"2 1/2\""}
      opcoes= {thicknesses.map((thicknesses)=> ({label: thicknesses, valor: thicknesses}))} 
      value={grossuraSelecionada}
      onChange={(e) => {setGrossuraSelecionada(e.target.value)}}/>

      <CampoCustomizado label={"Cor"}/>



      <BotaoCustomizado onClick={navegar}/>
    </>
  );
}

export default CadastroPrancha;
