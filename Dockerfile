FROM node:alpine3.16

COPY . /opt/app

WORKDIR /opt/app

RUN yarn
RUN yarn build
CMD yarn start