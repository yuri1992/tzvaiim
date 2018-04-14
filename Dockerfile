FROM node:latest

# App requirements, We do not copying . to docker container since we using volume
RUN mkdir /games
VOLUME /games
WORKDIR /games

#Pre install services
RUN npm install

# Running images as exectutable
CMD npm install && npm start
