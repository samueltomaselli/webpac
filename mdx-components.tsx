import type { MDXComponents } from "mdx/types";

export default function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 className="text-5xl text-red-300" {...props} />,
    h2: (props) => <h2 className="text-xl text-blue-900" {...props} />,
    p: (props) => <p className="" {...props} />,
  };
}
