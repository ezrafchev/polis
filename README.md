# Poliway Prime (GitHub Pages)

Este repositório contém um site estático (HTML/CSS/JS) pronto para deploy no GitHub Pages.

## Como publicar

1. Envie para o branch padrão no GitHub (geralmente `main`).
2. Vá em **Settings → Pages**.
3. Em **Build and deployment**, selecione **Source: GitHub Actions**.
4. Aguarde o workflow **Deploy static site to GitHub Pages** finalizar com sucesso.
5. O link público aparecerá na própria aba Pages e também no run do workflow.

## Observação

O workflow está em `.github/workflows/deploy-pages.yml` e faz deploy automático de todo o conteúdo estático do repositório.
