FROM node:14-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

ENV PORT 3001

RUN npm install -g serve

RUN npm install

RUN npm run build

CMD ["serve", "-s", "-l", "3001", "./build"]
