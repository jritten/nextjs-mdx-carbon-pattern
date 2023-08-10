FROM node:18

# app directory
WORKDIR /app

# app dependencies
COPY package*.json ./

# bundle app source
COPY . .

RUN npm install

CMD ["node", "app/page.tsx"]

EXPOSE 3000