FROM node:lts-gallium

RUN mkdir -p /app
WORKDIR /app

COPY . /app/
RUN npm install

ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build
EXPOSE 81

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=81

CMD [ "npm", "start" ]