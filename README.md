# Vite + micromark-extension-mdx-expression repro

To reproduce:

1. Clone this repo
2. Run `npm install`
3. Run `npm run build`. You should see the following error:

   ```
   Error when evaluating SSR module [...]/server/markdown.mjs:
   Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: [...]/node_modules/micromark/index.js
   require() of ES modules is not supported.
   require() of [...]/node_modules/micromark/index.js from [...]/node_modules/vite/dist/node/chunks/dep-c1a9de64.js is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
   Instead rename index.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from [...]/node_modules/micromark/package.json.
   ```
