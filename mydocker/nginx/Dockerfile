FROM nginx:1.27.1-alpine


RUN apk add --update nano curl sudo

RUN addgroup -g 1000 -S www-group && \
    adduser -u 1000 -S www-user -G www-group

COPY --chown=www-user:www-group index.html /usr/share/nginx/html/
COPY --chown=www-user:www-group nginx.conf /etc/nginx/nginx.conf
COPY --chown=www-user:www-group certs /etc/nginx/certs

RUN touch /var/run/nginx.pid && \
  chown -R www-user:www-group /var/run/nginx.pid && \
  chown -R www-user:www-group /var/log/nginx && \
  chown -R www-user:www-group /var/cache/nginx && \
  chmod -R 777 /var/log/nginx;

RUN touch /var/run/nginx.pid && \
        chown -R www-user:www-group /var/run/nginx.pid

# Create a user group 'xyzgroup'
#RUN addgroup -S xyzgroup

# Create a user 'appuser' under 'xyzgroup'
#RUN adduser -S -D -h /usr/app/src appuser xyzgroup

# Chown all the files to the app user.
#RUN chown -R appuser:xyzgroup /usr/app

USER www-user

EXPOSE 80 443

CMD ["nginx","-g","daemon off;"]