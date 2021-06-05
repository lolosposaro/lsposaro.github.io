FROM node:14 AS node

WORKDIR /

COPY . .
RUN npm install --dev-dependencies
RUN npm run test
RUN npm run build


FROM nginx:1.21-alpine AS nginx

ENV NGINX_HOST=foobar.net
ENV NGINX_HOST=80

COPY --from=node /dist/ /usr/share/nginx/html/

COPY --from=node /img /usr/share/nginx/html/

#COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
### Leventar el sitio!!!!!
## quizas usar https://www.npmjs.com/package/pm2
