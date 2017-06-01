FROM node:5.12.0

# copy from local build machine to inside the docker image
COPY dist /vendor-engagement-app-dist
COPY node_modules/single-page-server /vendor-engagement-app-dist/node_modules/single-page-server

# expose port 8080
EXPOSE 8080

# Define working directory.
WORKDIR /vendor-engagement-app-dist

# NOTE: this should be used in Kubernetes deployments
CMD npm start
CMD node node_modules/single-page-server/bin/single-page-server -port=8080 -base=. -file=index.html
