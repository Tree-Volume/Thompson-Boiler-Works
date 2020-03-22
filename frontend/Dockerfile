FROM node:current-alpine

ARG ENV
ENV NODE_ENV ${ENV}

RUN mkdir /frontend
WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . . 

RUN npm run build

EXPOSE 3000

CMD ["npm", "run",  "start"]
