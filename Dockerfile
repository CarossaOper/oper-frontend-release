FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV DB_STRING=mongodb+srv://root:laho1472@cluster0.xxvir.mongodb.net/oper?retryWrites=true&w=majority
ENV PORT=80

EXPOSE 80

CMD [ "node", "./server/server.js"]