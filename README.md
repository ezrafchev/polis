# Poliway Website

Site estático institucional da Poliway com estrutura robusta, seções completas e deploy automático no GitHub Pages.

## Status da branch

Conflitos de merge dos arquivos `README.md`, `index.html`, `script.js` e `styles.css` foram consolidados nesta versão, mantendo uma única implementação consistente entre conteúdo, estilo e scripts.

## Publicação no GitHub Pages

1. Faça push para o branch padrão (`main`, `master` ou `work`).
2. Em **Settings → Pages**, selecione **Source: GitHub Actions**.
3. Aguarde o workflow **Deploy static site to GitHub Pages** concluir.
4. O link final ficará visível na aba Pages e no run da action.

## Estrutura

- `index.html`: estrutura principal do site.
- `styles.css`: identidade visual e responsividade.
- `script.js`: filtros de catálogo, calculadora ROI, checklist e interações.
- `.github/workflows/deploy-pages.yml`: pipeline de publicação.
