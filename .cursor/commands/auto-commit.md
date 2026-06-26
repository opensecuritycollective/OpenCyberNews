# Autocommit — OpenCyberNews (Astro)

Usar cuando el usuario pida **hacer commit**. Mensajes **Conventional Commits** en inglés. **No** push salvo petición explícita.

## Cuándo ejecutar

- **`/auto-commit`** o petición explícita de commit.
- **No** commitear sin petición.

## Antes de commitear

1. `git status` / `git diff` / `git log -15 --oneline`
2. **Respetar borrados** intencionales.
3. No secretos en `.env`.

## Scopes habituales

`astro`, `layout`, `pages`, `components`, `cursor`, `fix`, `chore`.

Rutas: `src/components/`, `src/layouts/`, `src/pages/`, `.cursor/`.

## Reglas

- Cumplir `.cursor/rules/git-commits.mdc`.
- Mensaje en **inglés**; chat en **español**.
