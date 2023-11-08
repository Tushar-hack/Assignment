FROM node:18.18.0

ENV PORT 4000
ENV URL "mongodb+srv://takaditya921:tushartak01tak@bookapi.xbqzpco.mongodb.net/"

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start"]