const pranchasDoLocalStorage = JSON.parse(localStorage.getItem("pranchas")) || [];

export const buscarPranchasPeloUsuario = (idUsuario) => {
  return pranchasDoLocalStorage.filter((prancha) => prancha.idUsuario === idUsuario);
};

export const buscarPranchaPeloId = (idPrancha) => {
  return pranchasDoLocalStorage.find((prancha) => prancha.id === idPrancha);
};

export const adicionarPrancha = (prancha, idUsuario) => {
  const novaPrancha = { id: crypto.randomUUID(), idUsuario, ...prancha };
  pranchasDoLocalStorage.push(novaPrancha);
  localStorage.setItem("pranchas", JSON.stringify(pranchasDoLocalStorage));
};

export const atualizarPrancha = (PranchaAtualizada) => {
  const indexDaPrancha = pranchasDoLocalStorage.findIndex(
    (prancha) => prancha.id === PranchaAtualizada.id
  );
  pranchasDoLocalStorage[indexDoCliente] = PranchaAtualizada;
  localStorage.setItem("pranchas", JSON.stringify(pranchasDoLocalStorage));
};

export const removerClientePeloId = (idPrancha) => {
  const PranchaAtualizadas = pranchasDoLocalStorage.filter((prancha) => prancha.id !== idPrancha);
  localStorage.setItem("pranchas", JSON.stringify(PranchaAtualizadas));
};
