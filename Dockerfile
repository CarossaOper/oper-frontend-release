FROM node:18-alpine

RUN mkdir -p /app

COPY . /app
WORKDIR /app

RUN npm install

RUN npm run build

EXPOSE 81

ENV HOST=0.0.0.0
ENV PORT=81

CMD ["node", "/app/.output/server/index.mjs"]