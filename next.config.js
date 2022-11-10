import createMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkSectionize from "remark-sectionize";
import remarkUnwrapImages from "remark-unwrap-images";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: { esmExternals: false },
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	images: {
		domains: ["res.cloudinary.com"],
	},
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
		remarkPlugins: [
			remarkUnwrapImages,
			remarkSectionize,
			[remarkMath, {
				strict: false,
				unicodeTextInMathMode: true,
			}],
			remarkGfm,
		],
		rehypePlugins: [
			rehypeSlug,
			rehypeKatex
    ]}
});

export default withMDX(nextConfig);
