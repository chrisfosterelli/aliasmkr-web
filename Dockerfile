FROM kyma/docker-nginx
COPY build/ /var/www/build
COPY index.html /var/www/
