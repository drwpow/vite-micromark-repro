import { micromark } from "micromark";
import { mdxExpression } from "micromark-extension-mdx-expression";

// very simple example
micromark("a {!} b", { extensions: [mdxExpression({ acorn })] });
