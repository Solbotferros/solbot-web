# 🔨 Web corporativa – Herrería

Proyecto web desarrollado con **Astro** para una empresa de herrería.
El objetivo es ofrecer una página rápida, clara y profesional para mostrar servicios, trabajos realizados y facilitar el contacto.

---

## 🚀 Stack

- **Astro** – framework principal
- **TailwindCSS** – estilos
- **ESLint + Prettier** – calidad de código y formato
- **Husky + lint-staged** – control automático en commits

---

## 📁 Estructura básica

```bash
/
├── src/                # Código fuente
├── public/             # Assets estáticos
├── .husky/             # Hooks de git
├── dist/               # Build de producción
├── astro.config.mjs
├── package.json
```

---

## 🛠️ Scripts

```bash
npm run dev       # entorno de desarrollo
npm run build     # build producción
npm run preview   # preview del build
npm run lint      # linting
npm run format    # formateo con prettier
```

---

## 🌐 Ramas

- `dev` → desarrollo principal
- `main` → producción

Flujo:

1. Desarrollo en `dev`
2. Merge a `main` para deploy

---

## ✅ Pre-commit

Antes de cada commit se ejecuta automáticamente:

- Formateo con Prettier
- Autofix con ESLint

Esto asegura consistencia en todo el proyecto.

---

## 📌 Notas

- Proyecto privado
- Pensado para ser mantenible y escalable

---

## 📬 Contacto

Para cualquier cambio o mejora, contactar con el desarrollador.
