FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && \
    apt-get install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]