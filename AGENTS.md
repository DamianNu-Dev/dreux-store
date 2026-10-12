# X — Notas del proyecto (usar SIEMPRE en futuras sesiones)

## Principios de diseño (inspirados en Elixir y Skeleton)
- Marca: QUIET — streetwear minimalista y brutalista.
- Tipografía: display en mayúsculas, condensada y en negrita (Anton); body en Inter.
- Paleta: blanco puro arriba / negro profundo abajo. Sin ruido innecesario.
- Ediciones editoriales: griá asimétrica, superposiciones, textos pequeños con mucho leading.
- Mover poco pero con intención: micro-interacciones (reveal on scroll, hover magnético), nunca animaciones decorativas sin sentido.
- Copy SIEMPRE en español.

## Arquitectura (clean architecture, frontend/backend separados)
- `app/` → solo rutas (capa de presentación Next.js).
- `components/` → UI reutilizable (sin lógica de negocio).
- `lib/` → datos + lógica: `lib/products.js` es la fuente única de datos de producto.
  En el futuro, mover la lectura de datos a una API real (backend) cambiando solo `lib/`, sin tocar componentes ni rutas.
- No mezclar lógica de negocio dentro de componentes.

## Entorno (Termux)
- NO usar /usr/bin/env; los scripts llaman a `node node_modules/next/dist/bin/next` directamente.
- NO usar Turbopack (no hay bindings nativos en android/arm64): `dev` y `build` con `--webpack`.
- Servidor: puerto 3000. Comandos:
  - `npm run dev` → desarrollo
  - `npm run build` → build producción (`--webpack`)
  - `npm run start` → servir producción