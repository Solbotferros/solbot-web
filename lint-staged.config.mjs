export default {
  '*.{js,ts,mjs,cjs,json,css,md}': ['prettier --write'],
  '*.astro': ['prettier --write'],
  '*.{js,ts,mjs,cjs,astro}': ['eslint --fix'],
};
