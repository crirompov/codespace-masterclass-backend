#Que sistema operativo base voy a utilizar
FROM node:20-alpine

##Tareas

WORKDIR /app 
# ~/app => /usr/ubuntu/home/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

##Tarea de finalización

CMD ["npm", "run", "start"]