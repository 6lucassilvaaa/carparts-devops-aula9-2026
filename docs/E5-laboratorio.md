# E5 — Laboratório de conflito, rebase, revert e bisect

O script scripts/laboratorio.mjs cria um repositório Git temporário isolado e preserva sua pasta para inspeção. Execute node scripts/laboratorio.mjs na raiz do projeto. O log já produzido nesta entrega está em evidencias/laboratorio-git.txt. Cada comando registra sua saída real; o script interrompe ao receber código inesperado ou se a verificação falhar.

1. Conflito/rebase: main e feat/branch-curta alteram a mesma linha de politica.txt de cinco dias para três e dois dias. O rebase da branch pessoal encontra conflito real. O script registra status e diff, grava a resolução de dois dias, adiciona o arquivo e continua o rebase. A integração local é fast-forward. Nenhuma dessas branches foi publicada.
2. Revert: um commit na main local adiciona temporario.txt. git revert --no-edit cria um novo commit de reversão. O script verifica que o arquivo deixou de existir, mantendo todos os commits no histórico. No repositório GitHub, qualquer reversão deverá ser encaminhada por branch e PR.
3. Bisect: cria função de reserva correta e teste de limite; insere propositalmente o bug que troca <= por <. Commits de documentação tornam a busca não trivial. git bisect run node teste.cjs executa o teste e identifica o primeiro commit ruim. O script verifica o hash retornado em refs/bisect/bad contra o hash conhecido do bug, registra bisect log, encerra a busca, reverte a regressão e confirma que o teste voltou a passar.

Não há push no script, uso de push --force ou reset --hard. A identidade de laboratório está identificada como didática e não simula uma pessoa revisora. O teste falhar durante o bisect é comportamento esperado: fornece o sinal utilizado na busca binária.
