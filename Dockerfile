FROM node:14.17

WORKDIR /app

COPY ./package.json ./yarn.lock ./

RUN yarn install

EXPOSE 3000

COPY . .

CMD ["yarn", "start"]
