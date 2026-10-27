# E4 — Resultados reais do checkout

Execução: https://github.com/6lucassilvaaa/carparts-devops-aula9-2026/actions/runs/40462480620
Commit de origem do PR: 35fe1208d45dfc4ab468d1baa4165d66d7d4b008
Conclusão: success. Três execuções por configuração, todas no mesmo workflow e no mesmo commit. O GitHub testa a referência de merge do PR; o head_sha identifica a origem da mudança. Consulte o log de checkout para o SHA efetivamente materializado.

| Configuração | Amostra | Cronômetro checkout (s) | Step API (s) | Job total API (s) |
|---|---:|---:|---:|---:|
| completo | 1 | 0.797213 | 1 | 5 |
| completo | 2 | 0.834404 | 1 | 5 |
| completo | 3 | 0.657268 | 1 | 4 |
| enxuto | 1 | 0.950834 | 1 | 5 |
| enxuto | 2 | 1.061794 | 1 | 7 |
| enxuto | 3 | 1.079407 | 1 | 7 |

Média completo: **0.762962 s**. Média enxuto: **1.030678 s**. O checkout enxuto foi **35.1% mais lento** nesta amostra. Os tempos de job também estão acima para não confundir checkout com duração total da execução. A API tem resolução de segundos; o cronômetro mede também pequenos intervalos entre steps. Não se deve interpretar casas decimais como precisão experimental ou generalizar três amostras.

Conclusão: não houve ganho observado de tempo com o checkout enxuto neste laboratório pequeno. O custo de sparse-checkout e a variação entre runners podem superar a economia de dados. A otimização está configurada para o monorepo do cenário, mas deve ser reavaliada com histórico e volume reais. Não foi demonstrada redução do lead time da Carparts. Os CSV brutos e os relatórios de objetos estão em evidencias/metricas, e os ZIP originais em evidencias/artefatos.

A execução inicial, anterior à atualização das versões das Actions, está preservada em evidencias/execucao-inicial. Não misturar suas amostras com as da execução indicada acima.

