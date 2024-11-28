import createMDX from "@next/mdx";
import { remarkPlugins } from "@prose-ui/core";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: remarkPlugins(),
  },
});

export default withMDX(nextConfig);
