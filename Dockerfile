# Use uma imagem base do Node.js
FROM node:14

ENV TZ=America/Sao_Paulo

# Crie um diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o contêiner
COPY package.json /app

# Instale as dependências da aplicação
RUN npm install 

# Copie o restante do código-fonte da aplicação para o contêiner
COPY . .

# Exponha a porta em que a aplicação irá escutar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "src/server"]


