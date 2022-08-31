# Imagem de Origem
FROM willianblueshift/test-images:projeto-calculadora-juros-compostos

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
COPY package-lock.json ./
RUN mkdir -p /app/node_modules/.cache && chmod -R 777 /app/node_modules/.cache
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

# add app
COPY . ./

ENV PORT 80
EXPOSE 80

# Inicializa a aplicação
ENTRYPOINT ["npm", "start"]
