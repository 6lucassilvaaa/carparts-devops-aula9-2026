export function podeReservar(estoque, quantidade) {
  return Number.isInteger(estoque) && Number.isInteger(quantidade)
    && estoque >= 0 && quantidade > 0 && quantidade <= estoque;
}

