import { MDXProvider } from '@mdx-js/react';

export default function MdxProvider({ children }) {
  return <MDXProvider>{children}</MDXProvider>;
}