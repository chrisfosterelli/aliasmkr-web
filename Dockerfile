FROM kyma/docker-nginx
COPY src/ /var/www/build
COPY index.html /var/www/
