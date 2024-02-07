FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install --production 
RUN npm install -g serve
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["serve", "-s", "build", "-l", "5000"]