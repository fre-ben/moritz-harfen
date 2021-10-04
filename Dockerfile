# Gatsby Website
FROM node:lts-buster-slim AS builder

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install -g gatsby-cli

RUN npm ci

COPY . .

ENV NODE_ENV production


RUN npm run build

EXPOSE 9000

CMD ["npm", "run", "start"]

# # NGINX Server
# FROM nginx:alpine
# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# RUN rm -rf ./*
# # Copy static assets from builder stage
# COPY --from=builder /app/public .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]