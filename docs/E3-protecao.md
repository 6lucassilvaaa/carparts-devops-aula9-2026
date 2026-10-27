# E3 — Proteção da main e revisão

A main foi protegida pela API do GitHub antes da publicação da implementação. Evidência: evidencias/protecao-main.json, capturada de volta do servidor, e não apenas um exemplo de configuração.

Regras: PR obrigatório, uma aprovação, aprovação de CODEOWNERS, invalidação de aprovação antiga, aprovação da última atualização por outra pessoa, checagem CI, branch atualizada, conversas resolvidas, histórico linear, administradores sujeitos às regras, force push e exclusão de branch bloqueados.

O README inicial foi criado pela opção auto_init do GitHub ao criar o repositório vazio. Essa é a inicialização do laboratório. Depois disso a implementação foi enviada apenas à branch feat/pratica-git-scion e apresentada em PR. Não houve push direto de implementação à main nem integração de PR de agente sem revisão.

O CODEOWNERS por pasta está em .github/CODEOWNERS e inclui prompts/. Como é um arquivo novo no PR, ele só regerá a main após integração. A proteção geral por aprovação já está ativa. A conta pessoal disponível foi usada como proprietária provisória; o autor de PR não pode aprovar o próprio PR. Convidar outro colaborador humano com escrita, incluir seu usuário real no CODEOWNERS e registrar sua revisão antes de integrar. O agente não representa essa revisão.

Merge queue: indisponível em repositório pertencente a conta pessoal, conforme documentação do GitHub. Não foi criada organização nem simulada fila. Para atender integralmente a E3, transferir para organização elegível e ativar a opção “Require merge queue” na regra da main. O workflow já possui merge_group, mas o evento ainda não foi exercitado neste ambiente.

Prints reais da configuração foram capturados em evidencias/protecao-main.png e evidencias/protecao-main-checks.png. A evidência JSON é complementar. A revisão humana ainda precisa acontecer: anexar sua comprovação quando existir. Não há print de fila ativa, pois o recurso está indisponível. O laboratório permanece com essa parte do requisito pendente.

Fonte: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue
