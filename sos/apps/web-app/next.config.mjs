import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: 'short',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hotsos.s3.ap-northeast-2.amazonaws.com'],
  },
};

export default withVanillaExtract(nextConfig);
