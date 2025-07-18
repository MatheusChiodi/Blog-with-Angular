FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# build de produção para GitHub Pages
RUN npx ng build --prod --base-href "https://MatheusChiodi.github.io/Blog-with-Angular/"
