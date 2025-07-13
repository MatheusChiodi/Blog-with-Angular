FROM node:14

WORKDIR /app

COPY . .

# Instala as dependências e adiciona o 'querystring' que o Webpack precisa
RUN npm install --legacy-peer-deps && npm install querystring --save-dev

EXPOSE 4200

CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]
