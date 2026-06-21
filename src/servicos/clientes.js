const obterPranchasDoLocalStorage = () => {
  return JSON.parse(localStorage.getItem("pranchas")) || [];
};

export const buscarPranchasPeloUsuario = (idUsuario) => {
  return obterPranchasDoLocalStorage().filter((prancha) => prancha.idUsuario === idUsuario);
};

export const buscarPranchaPeloId = (idPrancha) => {
  return obterPranchasDoLocalStorage().find((prancha) => prancha.id === idPrancha);
};

export const adicionarPrancha = (prancha, idUsuario) => {
  const pranchasDoLocalStorage = obterPranchasDoLocalStorage();
  const novaPrancha = { id: crypto.randomUUID(), idUsuario, ...prancha };
  pranchasDoLocalStorage.push(novaPrancha);
  localStorage.setItem("pranchas", JSON.stringify(pranchasDoLocalStorage));
};

export const atualizarPrancha = (PranchaAtualizada) => {
  const pranchasDoLocalStorage = obterPranchasDoLocalStorage();
  const indexDaPrancha = pranchasDoLocalStorage.findIndex(
    (prancha) => prancha.id === PranchaAtualizada.id
  );
  if (indexDaPrancha >= 0) {
    pranchasDoLocalStorage[indexDaPrancha] = PranchaAtualizada;
    localStorage.setItem("pranchas", JSON.stringify(pranchasDoLocalStorage));
  }
};

export const removerPranchaPeloId = (idPrancha) => {
  const pranchasDoLocalStorage = obterPranchasDoLocalStorage();
  const pranchasAtualizadas = pranchasDoLocalStorage.filter((prancha) => prancha.id !== idPrancha);
  localStorage.setItem("pranchas", JSON.stringify(pranchasAtualizadas));
};
