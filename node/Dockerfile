FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

ENV DOCKERIZE_VERSION v0.7.0

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]