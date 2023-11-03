FROM nginx:stable-alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp
EXPOSE 443/tcp

ENTRYPOINT ["nginx", "-g", "daemon off;"]
