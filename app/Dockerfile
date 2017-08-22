FROM node:6

RUN mkdir /treehouse

WORKDIR /treehouse

COPY . .

RUN npm install && npm run compile

EXPOSE 3001

CMD ["npm", "start"]
