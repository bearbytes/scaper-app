FROM node:alpine as builder
WORKDIR /app

COPY package.json .
COPY prisma       .
RUN npm install

COPY . .
RUN npm run build

FROM node:alpine as runner
WORKDIR /app

COPY --from=builder /app/public         ./public
COPY --from=builder /app/.next          ./.next
COPY --from=builder /app/node_modules   ./node_modules
COPY --from=builder /app/package.json   .
COPY --from=builder /app/next.config.js .

ENV NODE_ENV=production
CMD ["npm", "start"]
EXPOSE 3000