FROM node:boron

WORKDIR /treehouse

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "npm", "start" ]