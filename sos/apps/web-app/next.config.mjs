import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import path from 'path'
const __dirname = path.resolve();

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: 'short',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname, '../../'),
  output: 'standalone',
  images: {
    domains: ['hotsos.s3.ap-northeast-2.amazonaws.com'],
  },
};

export default withVanillaExtract(nextConfig);
