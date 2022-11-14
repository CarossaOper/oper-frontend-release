FROM node:18-alpine

RUN mkdir -p /app

COPY . /app
WORKDIR /app

RUN npm install

# ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

ADD .output /app/.output

EXPOSE 81

WORKDIR /app/.output

ENV HOST=0.0.0.0
ENV PORT=81

CMD ["node", "/app/.output/server/index.mjs"]