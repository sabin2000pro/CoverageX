FROM node:alpine AS dev
WORKDIR '/app'
COPY package-lock.json .
COPY package.json .
COPY tsconfig.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5102
CMD [ "npm", "run", "start:claims-service"]