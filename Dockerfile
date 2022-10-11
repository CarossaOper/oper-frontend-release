FROM node:17

RUN mkdir -p /app

COPY . /app
WORKDIR /app

RUN npm install

# ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build
EXPOSE 81

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=81

ENTRYPOINT [ "npm", "start" ]