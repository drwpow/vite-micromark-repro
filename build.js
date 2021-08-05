import { createServer } from "vite";

async function build() {
  const vite = await createServer({
    ssr: {
      external: ["micromark", "micromark-extension-mdx-expression"], // even marked as external, still get "Error [ERR_REQUIRE_ESM]"
    },
  });
  await vite.ssrLoadModule("./server/markdown.js");
}

build();
