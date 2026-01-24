import { MDXProvider } from '@mdx-js/react';

export default function MdxProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider>{children}</MDXProvider>;
}