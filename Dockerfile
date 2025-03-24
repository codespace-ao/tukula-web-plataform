FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

RUN npm install axios

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 2026

CMD ["npm", "run", "start"]