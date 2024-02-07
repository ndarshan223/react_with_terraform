FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install --production 
RUN npm install -g serve
COPY . .
RUN npm run build

FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g","daemon off;" ]