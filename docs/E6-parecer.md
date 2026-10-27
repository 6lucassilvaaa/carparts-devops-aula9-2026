# Parecer técnico — Scion e Carparts

Scion é o controle de versão interno desenvolvido pela Anthropic para seu monorepo e seus agentes sempre conectados. Centraliza operações no servidor, grava alterações incrementais e entrega apenas os dados solicitados. O uso de objetos imutáveis endereçados por conteúdo permite reaproveitamento por caches. Esses conceitos procuram reduzir o custo de transportar e manter cópias completas em uma carga excepcional de automação. A descrição técnica e as avaliações de desempenho são relatos da própria empresa, sem reprodução independente neste laboratório.

A Carparts do enunciado trabalha com uma equipe de cinco pessoas e aproximadamente quarenta PRs por semana. Não tem a mesma necessidade operacional nem justificativa para construir serviços de versionamento, armazenamento, revisão e CI próprios. A Anthropic ressalta que Scion não é um substituto adequado para o uso geral de Git. Neste trabalho ele é uma referência arquitetural: não foi instalado nem tratado como produto disponível. A decisão é manter Git, GitHub e GitHub Actions.

Três ideias foram adaptadas. Primeira: materializar somente os dados necessários. O workflow usa clone raso e sparse-checkout, e mede três execuções por configuração no mesmo commit. A interpretação do resultado está no E4 e deve considerar que um laboratório novo pode não apresentar economia. Segunda: reduzir o custo de integrar mudanças pequenas. CONTRIBUTING.md define trunk-based development e branches de até dois dias úteis, para reduzir divergência e conflitos. O E1 mede idade e quantidade de branches, mas não atribui ao laboratório o volume histórico descrito no cenário. Terceira: diferenciar revisão conforme a responsabilidade do código. CODEOWNERS estabelece responsáveis por pasta, com atenção a prompts/, e a proteção exige revisão humana e CI. A fila do GitHub seria uma adaptação viável à escala da Carparts, mas está indisponível em repositório de conta pessoal; sua ativação depende de migrar para organização elegível. O próprio Scion não depende de uma fila global igual à do GitHub.

As medidas reais deste trabalho não demonstram queda do lead time de onze para dois dias. Essa é uma meta do cenário a avaliar posteriormente. A entrega separa configurações implantadas, medições verificáveis e pendências de colaboração humana ou plano do GitHub.

Fonte primária: Anthropic, “Redesigning source control at Anthropic”, publicada em 13/10/2026 e atualizada em 15/10/2026. https://www.anthropic.com/engineering/redesigning-source-control — consulta em 27/10/2026.

Disponibilidade da fila: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue

