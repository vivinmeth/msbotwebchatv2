FROM node:14.17

RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

WORKDIR /cli

COPY ./package.json ./yarn.lock ./empwc.json ./

RUN yarn

COPY cli ./cli

CMD ["node","cli/index.js"]


