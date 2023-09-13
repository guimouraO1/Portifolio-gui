# Use a imagem base Node.js
FROM node:16

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos da aplicação para o contêiner
COPY . .

# Construa a aplicação React para produção
RUN npm run build

# Exponha a porta em que a aplicação será executada (geralmente 80)
EXPOSE 80

# Inicie a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
