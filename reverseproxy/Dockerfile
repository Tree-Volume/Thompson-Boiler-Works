FROM nginx:latest

COPY dummy.sh .
ARG ENV
RUN if [ "$ENV" = "development" ] ; then apt-get update \
  && apt-get install openssl \
  && bash ./dummy.sh \
; else echo "prod" ; fi 

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
