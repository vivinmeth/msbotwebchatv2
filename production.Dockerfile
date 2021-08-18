FROM node:14.17 as empwc-build

WORKDIR /app

COPY ./package.json ./yarn.lock ./

RUN yarn

COPY . .

RUN yarn build


FROM nginx:1.12-alpine
COPY --from=empwc-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
