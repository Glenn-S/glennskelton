### Stage 1: Build  ###
FROM node:lts-stretch as build

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock

RUN yarn install
COPY . /usr/src/app
RUN yarn build

### Stage 2: Production Environment ###
FROM nginx:1.17.8
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# map internal port 80 to 3000 on the external port