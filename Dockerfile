### STAGE 1: Build ###
FROM node:alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/weatherApp /usr/share/nginx/html
