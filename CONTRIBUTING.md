# Política de contribuição — Carparts

Usamos trunk-based development: main é o tronco estável. Cada tarefa usa uma branch curta, com no máximo dois dias úteis de vida. Se ultrapassar, dividir o escopo ou usar feature flag; revisar diariamente branches abertas. Não criar develop permanente. Nomes: feat/reserva-estoque, fix/validacao-quantidade e docs/politica-git.

Commits seguem Conventional Commits: feat(api): adiciona reserva de estoque; fix(api): recusa quantidade negativa; docs: documenta revisão. Um commit deve ter uma intenção verificável. O changelog pode ser elaborado a partir desses prefixos; não foi implantada automação de release neste laboratório.

## Fluxo obrigatório

1. Criar branch a partir da main atualizada. Fazer commits pequenos e rodar npm test.
2. Atualizar a branch por rebase apenas enquanto ela for pessoal e não tiver sido compartilhada. Branch publicada: atualizar por merge, sem reescrever histórico. Havendo colaboração, nunca usar reset --hard ou push --force.
3. Abrir PR com objetivo, evidência dos testes, riscos e plano de reversão. Todo PR de agente deve declarar a autoria assistida e receber revisão humana registrada por pessoa diferente do autor do PR.
4. Exigir CI, uma aprovação, aprovação de CODEOWNERS e resolução de conversas. Mudanças posteriores invalidam a aprovação anterior. A pasta prompts/ exige revisão de seu proprietário.
5. Integrar pela merge queue quando o repositório estiver em organização compatível. Nesta conta pessoal, a fila não é disponível: usar PR atualizado com main e checagens obrigatórias, com integração humana. Isso é limitação, não equivalência com a fila.
6. Desfazer mudanças na main por git revert em nova branch e novo PR. Nunca dar push direto na main.

## Autoria e revisão neste laboratório

A conta disponível é a única proprietária de código. O agente usa essa mesma conta para abrir o PR; por isso ela não pode aprovar o próprio PR. Antes da integração, convidar outro colaborador humano com permissão de escrita, incluir seu usuário real no CODEOWNERS via PR e obter sua aprovação. Não simular identidades ou aprovações. O CODEOWNERS novo só passa a governar a main depois de integrado; o bootstrap é protegido pela aprovação geral exigida.

## Segurança

Não versionar tokens, senhas ou .env, nem temporariamente. .gitignore não remove segredos já versionados. Revogar qualquer credencial exposta. Usar Secrets do GitHub Actions quando necessário; este laboratório não precisa deles. Histórico compartilhado nunca é reescrito.

## Implantação em duas semanas

Dias 1–2: diagnóstico e coleta inicial. Dias 3–5: política, proteção e responsáveis. Dias 6–8: checkout enxuto e três medições por configuração. Dias 9–10: laboratório, parecer e revisão dos indicadores. Medir idade das branches, conflitos/PR, duração de checkout e tempo até integração. O cenário informa meta de lead time de dois dias; este repositório novo não demonstra essa redução.

