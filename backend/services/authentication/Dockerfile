FROM node:alpine AS dev
WORKDIR '/app'
COPY package-lock.json .
COPY tsconfig.json .
RUN npm install --silent
COPY . .
RUN npm run build
EXPOSE 5100
CMD [ "npm", "start", "auth-service"]