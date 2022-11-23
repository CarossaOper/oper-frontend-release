FROM node:18

RUN mkdir -p /app

COPY . /app
WORKDIR /app

RUN npm install

# RUN npm run build

EXPOSE 81

ENV HOST=0.0.0.0
ENV PORT=81

RUN npm run dev

#CMD ["node", "/app/.output/server/index.mjs"]