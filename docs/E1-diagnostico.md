# E1 — Diagnóstico do repositório e fluxo

Este é um repositório de laboratório criado para a atividade. Sua main inicial contém apenas o README gerado pelo GitHub. Não há evidência do histórico da empresa fictícia, de branches com semanas ou de quarenta PRs semanais: esses números são premissas do enunciado, não medições deste repositório.

O arquivo evidencias/diagnostico-inicial.txt registra git count-objects -vH, referências e datas dos commits antes da primeira publicação da implementação. Na coleta inicial há uma branch local de trabalho e a referência remota da main. Ambas são recém-criadas. As datas permitem verificar a idade real; a política passa a limitar branches a dois dias úteis. As referências locais/remotas apontando ao mesmo commit não devem ser contadas como duas branches do servidor.

A consulta posterior em evidencias/branches-remotas.json identifica as branches reais do GitHub. A coleta final de objetos e histórico está em evidencias/diagnostico-final.txt. O tamanho de objetos Git não equivale ao tamanho de todos os arquivos da cópia de trabalho e não inclui arquivos ainda não commitados. O checkout inicial de CI ainda não existia na primeira coleta; a comparação controlada no mesmo commit consta em docs/E4-resultados.md, com três execuções de cada configuração.

O conflito real reproduzido no E5 surge porque duas branches alteram a mesma linha da política. No cenário empresarial, branches longas, alterações concorrentes em arquivos compartilhados e PRs grandes são hipóteses de causa, a validar observando PRs e ocorrências. Prioridade: reduzir idade das branches, limitar o escopo dos PRs e encaminhar revisão por pasta. Acompanhar conflitos por PR e tempo até integração por duas semanas, sem atribuir resultados produtivos a este experimento.

Limite: não foi possível demonstrar melhora de lead time ou taxa de conflito real em um projeto recém-criado. A medição de checkout existe separadamente no E4 e não implica melhora estatisticamente significativa.
