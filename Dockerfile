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
FROM node:12.2.0 as builder
WORKDIR /lib/sourcefe
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:latest AS nginx
COPY --from=builder /lib/sourcefe/dist/cms_wealthmanager /usr/share/nginx/html
COPY /nginx-custom.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
