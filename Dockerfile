FROM node:13-alpine
WORKDIR /app
COPY . .
EXPOSE 4000
CMD ["node", "start"]