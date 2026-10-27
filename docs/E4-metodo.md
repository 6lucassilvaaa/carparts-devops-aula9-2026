# E4 — Método de comparação

O mesmo commit é submetido a dois tratamentos: checkout completo com fetch-depth 0 e checkout enxuto com fetch-depth 1 mais sparse-checkout de apps/api e tests. Cada tratamento roda três vezes em jobs ubuntu-latest independentes, sem cache persistente controlado. O número de commits varia no tratamento completo, não o conteúdo de origem. As pastas de documentação e prompts são omitidas na cópia enxuta; arquivos da raiz são incluídos pelo modo cone, incluindo package.json.

A comparação é pareada por commit, com três execuções por configuração, e não uma série histórica do projeto original da Carparts. Cronômetro: timestamp imediatamente antes do checkout até imediatamente depois, incluindo inicialização e intervalo entre steps. Os artefatos CSV guardam esse tempo; a API do GitHub fornece também tempo do step e tempo total de job, com resolução de segundos. Não confundir essas medidas.

O filtro paths seleciona mudanças relevantes ao laboratório. Ao adicionar outra pasta ou arquivo executável, atualizar o filtro antes da mudança: um workflow inteiramente ignorado pode deixar a checagem obrigatória pendente. Em merge_group o workflow roda sem filtro de caminhos. Não foi adicionado cache de dependências porque não há dependências externas para instalar.

Este repositório é pequeno e novo. Não se promete ganho: inicialização, rede e variação dos runners podem superar qualquer economia. Os CSV e as conclusões só devem declarar os resultados efetivamente observados. O histórico completo continua disponível no ambiente de investigação para bisect, blame e diagnóstico.

