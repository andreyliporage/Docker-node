FROM node:18

WORKDIR /app
RUN chmod -R 777 /app

COPY package*.json ./   

RUN npm install

COPY . ./

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]