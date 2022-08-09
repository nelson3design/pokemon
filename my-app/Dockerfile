FROM node:current-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .


CMD npm install && npm start

# comando para rodar o container docker

# docker build -t image-react .
# docker run --rm -p 3000:3000 image-react