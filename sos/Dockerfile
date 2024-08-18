# Production image
FROM node:20.16-alpine AS runner

WORKDIR /app/client

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Copy Yarn Berry files
COPY .yarn ./.yarn
COPY .yarnrc.yml ./

# Copy workspace package.json files
COPY apps/web-app/package.json ./apps/web-app/
COPY packages/components/react/package.json ./packages/components/react/
COPY packages/style-tokens/package.json ./packages/style-tokens/
COPY packages/esbuild-config/package.json ./packages/esbuild-config/

# Enable Corepack and set Yarn version to Berry
RUN corepack enable && corepack prepare yarn@4.3.1 --activate

# Set environment variables
ENV YARN_ENABLE_GLOBAL_CACHE=false
ENV YARN_ENABLE_MIRROR=false
ENV NODE_ENV=production

# Install production dependencies only
RUN yarn install

# Copy the built artifacts
COPY apps/web-app/.next ./apps/web-app/.next
COPY apps/web-app/public ./apps/web-app/public
COPY apps/web-app/next.config.mjs ./apps/web-app/next.config.mjs
COPY packages/components/react/dist ./packages/components/react/dist
COPY packages/style-tokens/dist ./packages/style-tokens/dist

EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "workspace", "@sos/web-app", "start"]