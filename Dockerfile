FROM node:20-alpine

WORKDIR /interval-app/

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]

# RUN npm run build

# RUN npm install -g http-server

# EXPOSE 8080

# CMD [ "http-server", "dist"]