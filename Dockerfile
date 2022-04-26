## Stage 0, "build-stage", based on Node.js, to build and compile the frontend
#FROM node:10.8.0 as build-stage
#WORKDIR /app
#COPY package*.json /app/
#RUN npm install
#COPY ./ /app/
#ARG configuration=production
#RUN npm run build -- --output-path=./dist/smartadmin-angular-seed --configuration $configuration
#
## Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
#FROM nginx:1.15
##Copy ci-dashboard-dist
#COPY --from=build-stage /webfw20/dist/smartadmin-angular-seed /usr/share/nginx/html
##Copy default nginx configuration
#COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

# base image
FROM node:12.2.0

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0
