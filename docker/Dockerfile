FROM node:lts-alpine

USER node

WORKDIR /usr/src/app

COPY --chown=node:node ./package.json .
COPY --chown=node:node ./package-lock.json .
RUN npm install

COPY --chown=node:node . .

CMD [ "npm", "start" ]