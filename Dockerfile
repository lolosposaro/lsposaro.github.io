## WIP
FROM nginx:1.21-alpine

ENV APP_VERSION=1.0.1

COPY . /usr/share/nginx/html
