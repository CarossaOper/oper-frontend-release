FROM node:18.10.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install

RUN npm run build
EXPOSE 81

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=81

CMD [ "npm", "start" ]