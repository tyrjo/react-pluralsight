FROM node:6.7.0
COPY package.json /app/
WORKDIR /app
RUN npm install && npm cache clean
CMD ["npm start"]
