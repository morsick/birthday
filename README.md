# Приглашение на день рождения

Одностраничный сайт-приглашение (Vite + React). Тексты — в `src/content.js`.

```bash
npm install
npm run dev     # локально
npm run build   # сборка в dist/
```

Деплой: при push в `main` GitHub Actions собирает сайт и публикует на GitHub Pages
(`https://<user>.github.io/birthday/`). Если репозиторий называется иначе,
поменяйте `VITE_BASE_PATH` в `.github/workflows/deploy.yml`.
