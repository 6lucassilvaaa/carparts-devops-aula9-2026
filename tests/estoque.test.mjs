import test from 'node:test';
import assert from 'node:assert/strict';
import { podeReservar } from '../apps/api/estoque.mjs';
test('reserva inclusive todo o estoque disponível', () => {
  assert.equal(podeReservar(10, 10), true);
  assert.equal(podeReservar(10, 3), true);
});
test('recusa falta de estoque e quantidades inválidas', () => {
  for (const args of [[2, 3], [0, 1], [10, 0], [10, -1], [-1, 1], [3, 1.5], [3, '1']]) {
    assert.equal(podeReservar(...args), false);
  }
});

