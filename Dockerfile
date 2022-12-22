# FROM mysql:5.7

# ENV MYSQL_DATABASE acc_helper

# ENV PORT 3306

# EXPOSE $PORT

# COPY ./createdb.sql/ /docker-entrypoint-initdb.d/

FROM node:16.15.0

WORKDIR /business-back

COPY ["package.json", "package-lock.json*", "/"]

RUN npm install

COPY ./ ./

ENV PORT 5600

EXPOSE $PORT

CMD ["npm", "run", "dev"]

