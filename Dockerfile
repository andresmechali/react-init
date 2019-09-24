##### Stage 1 - Create artifacts #####
FROM node:11.10-alpine AS build-deps
RUN mkdir -p /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app

# Get dependencies
RUN npm install

# Create build artifacts
RUN npm run build

##### Stage 2 - Serve Frontend #####
FROM nginx:1.15.2-alpine
COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]