#!/bin/bash

set -e

if [[ ${NODE_ENV} == "development" ]];
    then 
        export AUTH_BASIC_VALUE=off
else 
    export AUTH_BASIC_VALUE="Restricted"
fi;

envsubst '${AUTH_BASIC_VALUE}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"