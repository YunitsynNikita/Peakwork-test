
FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
ENV REACT_APP_BASE_URL="http://35.246.155.253:50"
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]