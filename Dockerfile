FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
RUN serve -s build