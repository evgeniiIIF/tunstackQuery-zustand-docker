FROM node:20.11.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Указываем Vite слушать все интерфейсы
ENV HOST=0.0.0.0

CMD ["npm", "start"]