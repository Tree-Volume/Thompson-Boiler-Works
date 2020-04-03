FROM nginx:stable

COPY scripts/dummy.sh .

ARG ENV
ENV NODE_ENV ${ENV}

RUN if [ "$ENV" = "development" ] ; then apt-get update \
  && apt-get install openssl \
  && bash ./dummy.sh; \
  fi
COPY nginx.conf.template /etc/nginx/nginx.conf.template

COPY scripts/docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
