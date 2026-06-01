FROM node:25-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:25-alpine
LABEL org.opencontainers.image.title="protogen.chat" \
      org.opencontainers.image.description="A corner of the web for protogens!" \
      org.opencontainers.image.authors="HiiJax" \
      org.opencontainers.image.source="https://tangled.org/hiijax.net/protogen.chat" \
      io.atcr.icon="https://protogen.chat/favicon-96x96.png" \
      io.atcr.readme="https://tangled.org/hiijax.net/protogen.chat/raw/main/README.md"
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY --from=builder /app/static static/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
