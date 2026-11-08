# Studio Caramujo

Site do Studio Caramujo (React + Vite), publicado no GitHub Pages.

## Rodar localmente
```
npm install
npm run dev
```

## Onde editar
- `src/data/site.js`: contatos, textos de "Quem somos", categorias da home, link do formulário de orçamento
- `src/data/projects.js`: projetos do portfólio (imagens em `public/images/`)
- `src/data/process.js`: etapas do briefing à entrega
- `src/styles.css`: paleta e fontes nas variáveis `:root` no topo do arquivo
- `public/logo.png`: logo

## Publicação
Ao fazer push na `main`, o GitHub Actions gera o build e publica no Pages
(Settings → Pages → Source: GitHub Actions).
