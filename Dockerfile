FROM 'node:6-alpine'
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3100
CMD [ "yarn", "start" ]